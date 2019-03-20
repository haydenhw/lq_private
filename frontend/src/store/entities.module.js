import { normalize } from 'normalizr';
import router from '@/router';
import callApi from '@/utils/api.utils.js';
import { prettyPrint } from '@/utils/debug.utils.js';
import { validatePayload } from '@/utils/entities.utils';
import { moduleSchema } from '@/constants/schemas.constants';
import { MODULES_URL, UPDATE_STATE_URL } from '@/constants/api.constants';
// TODO: refactor so that this comes from back end configuration
import { modulesInitial } from './entities.initialState.js';
import {
  HANDLE_UPDATE_STATE_MESSAGE,
  UPDATE_MODULE_PARAMS,
  UPDATE_MODULE_STATE,
  UPDATE_MODULE_LIMITS,
} from './actions.types';

import {
  FETCH_MODULES_SUCCESS,
  FETCH_MODULES,
  LOAD_REACTIONS,
  LOAD_MODULES,
  MUTATE_MODULE_STATE,
  MUTATE_MODULE_PARAMS,
  MUTATE_MODULE_LIMITS,
} from './mutations.types';

const initialState = {
  modules: modulesInitial,
  reactions: {},
};

export const mutations = {
  // TODO: refactor to generic LOAD_ENTITY
  [LOAD_MODULES](state, modules) {
    state.modules = modules;
  },
  // TODO: refactor to generic LOAD_ENTITY
  [LOAD_REACTIONS](state, reactions) {
    state.reactions = reactions;
  },
  [MUTATE_MODULE_STATE](state, { moduleName, actuatorType, newState }) {
    state.modules[moduleName].moduleState[actuatorType] = newState;
  },
  [MUTATE_MODULE_PARAMS](state, { moduleName, actuatorType, newParams }) {
    const { level } = newParams;
    // the api requires level to be a string. Ensure that that is the case
    newParams = level && typeof level === 'number'
      ? Object.assign({}, newParams, { level: String(level) })
      : newParams;

    const currentParams = state.modules[moduleName].parameters;
    const currentParamsValues = currentParams[actuatorType];
    currentParams[actuatorType] = Object.assign({}, currentParamsValues, newParams);
  },
  [MUTATE_MODULE_LIMITS](state, { moduleName, actuatorType, newLimits }) {
    const currentLimits = state.modules[moduleName].limits;
    const currentLimitsValues = currentLimits[actuatorType];
    currentLimits[actuatorType] = Object.assign({}, currentLimitsValues, newLimits);
  },
};

// TODO: refactor to handle errors
export const getModuleUpdateAction = (mutationType, validatePayload, callApi, updateUrl) => (
  { commit, getters },
  mutationPayload,
) => {
  const { selectedModuleName } = getters;
  mutationPayload = Object.assign({}, mutationPayload, { moduleName: selectedModuleName });
  validatePayload(mutationPayload);

  // console.log('\n', '** Mutation Payload **');
  // console.log(mutationPayload, '\n');

  commit(mutationType, mutationPayload);

  const { actuatorType } = mutationPayload;
  const requestPayload = getters[`${actuatorType.toLowerCase()}UpdatePayload`];
  validatePayload(requestPayload);

  // console.log('\n', '** Api Request Payload **');
  // console.log(requestPayload, '\n');

  callApi(updateUrl, {
    method: 'POST',
    data: requestPayload,
  });
};

export const actions = {
  [HANDLE_UPDATE_STATE_MESSAGE](
    { commit, state },
    {
      message, stateDiffGetter, moduleGetter, objectDiffGetter, mutationType,
    },
  ) {
    const diff = stateDiffGetter(message, state, moduleGetter, objectDiffGetter);

    if (diff.length > 0) {
      console.log(' Diff Detected, Committing State Change ');
      console.log(diff[0]);

      commit(mutationType, diff[0]);
    }
  },
  // TODO: add logic to handle fetch failure
  async [FETCH_MODULES]({ commit }, successRoute) {
    // If user is logged in 'data' will contain an array of module data.
    // Otherwise 'data' will contain an error message.
    try {
      const { data } = await callApi(MODULES_URL);
      const { message } = data;

      if (message === 'NOT_AUTHORIZED') {
        router.push('/login');
        return;
      }

      const { entities } = normalize(data, moduleSchema);
      const { modules, reactions } = entities;

      commit(LOAD_MODULES, modules);
      commit(LOAD_REACTIONS, reactions);
      commit(FETCH_MODULES_SUCCESS);

      if (successRoute) {
        router.push(successRoute);
      }
    } catch (error) {
      console.log(error);
    }
  },
  // TODO: refactor to be more DRY
  [UPDATE_MODULE_STATE]: getModuleUpdateAction(
    MUTATE_MODULE_STATE,
    validatePayload,
    callApi,
    UPDATE_STATE_URL,
  ),
  [UPDATE_MODULE_PARAMS]: getModuleUpdateAction(
    MUTATE_MODULE_PARAMS,
    validatePayload,
    callApi,
    UPDATE_STATE_URL,
  ),
  [UPDATE_MODULE_LIMITS]: getModuleUpdateAction(
    MUTATE_MODULE_LIMITS,
    validatePayload,
    callApi,
    UPDATE_STATE_URL,
  ),
};

// Getters
export const getActiveReactionId = alert => (state) => {
  const [activeReaction] = Object.keys(state.reactions).filter(
    reactionId => state.reactions[reactionId].active,
  );

  const { NODE_ENV } = process.env;
  if (!activeReaction && (NODE_ENV === 'production' || NODE_ENV === 'test')) {
    const message = 'No active reactions were found. Make sure that you are logged in and that a reaction is active';
    alert(message);
    throw new Error(message);
  }

  return activeReaction;
};

const getParamsKey = (selectedModuleName, actuatorName) => (
  `${selectedModuleName}-${actuatorName}-parameters`
);

const getLimitsKey = (selectedModuleName, actuatorName) => (
  `${selectedModuleName}-${actuatorName}-limits`
);

export const getApiUpdatePayload = actuatorName => (
  state,
  {
    activeModuleState,
    activeReactionId,
    selectedModuleName,
    activeModuleParams,
    activeModuleLimits,
  },
) => {
  // TODO refactor to create these keys with the same function
  const paramsKey = getParamsKey(selectedModuleName, actuatorName);
  const limitsKey = getLimitsKey(selectedModuleName, actuatorName);

  const targetParams = activeModuleParams[actuatorName];
  const targetLimits = activeModuleLimits[actuatorName];

  // TODO move this logic to a separate function
  const limits = targetLimits
    ? { 'HIGH-value': targetLimits['HIGH-value'], 'LOW-value': targetLimits['LOW-value'] }
    : {};

  let apiPayload = {
    mid: selectedModuleName,
    allStates: activeModuleState,
    activeId: activeReactionId,
    activeSwitch: `ReactionActive-${activeReactionId}`,
    changes: [actuatorName],
    [paramsKey]: targetParams,
    [limitsKey]: limits || {},
  };

  // TODO move this logic to a separate function
  // TODO refactor so that both extraction and water props aren't included in the same request
  if (actuatorName === 'water' || actuatorName === 'extraction') {
    const specialParams = {
      [paramsKey]: Object.assign({}, { 'material-rate': '0', 'material-amount': '0', level: '100' }),
    };

    apiPayload = Object.assign({}, apiPayload, specialParams);
  }

  return apiPayload;
};

const getHeater = (state, { activeModuleState, activeModuleParams, activeModuleLimits }) => ({
  powerOn: activeModuleState.Heater,
  level: activeModuleParams.Heater.level,
  minTemp: activeModuleLimits.Heater['LOW-value'],
  maxTemp: activeModuleLimits.Heater['HIGH-value'],
});

const getLamp = (state, { activeModuleState, activeModuleParams }) => ({
  powerOn: activeModuleState.Lamp,
  level: activeModuleParams.Lamp.level,
  start: activeModuleParams.Lamp.start,
  stop: activeModuleParams.Lamp.stop,
});

const getActiveModule = (state, { selectedModuleName }) => {
  const activeModule = state.modules[selectedModuleName];
  if (!activeModule) {
    console.log('Selected Module Name:', selectedModuleName, '\n\n');
    prettyPrint('Modules State:', state.modules);
    throw new Error('active module is undefined');
  }

  return activeModule;
};


export const getters = {
  activeReactionId: getActiveReactionId(window.alert),
  activeModule: getActiveModule,
  activeModuleParams: (state, { activeModule }) => activeModule.parameters,
  activeModuleState: (state, { activeModule }) => activeModule.moduleState,
  activeModuleLimits: (state, { activeModule }) => activeModule.limits,
  air: (state, { activeModuleState }) => activeModuleState.Air,
  water: (state, { activeModuleState }) => activeModuleState.water,
  extraction: (state, { activeModuleState }) => activeModuleState.extraction,
  heater: getHeater,
  lamp: getLamp,
  airUpdatePayload: getApiUpdatePayload('Air'),
  lampUpdatePayload: getApiUpdatePayload('Lamp'),
  heaterUpdatePayload: getApiUpdatePayload('Heater'),
  waterUpdatePayload: getApiUpdatePayload('water'),
  extractionUpdatePayload: getApiUpdatePayload('extraction'),
};

export default {
  state: initialState,
  mutations,
  actions,
  getters,
};
