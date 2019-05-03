var { queryReactionsByUser } = require('../utility/databaseUtils');

const isObjectEmpty = obj => Object.keys(obj).length === 0 && obj.constructor === Object;

const restoreSavedModuleState = (reactions, allModulesActiveDefault) => {
  reactions.forEach(reaction => {
    console.log(reaction);
    const { module: moduleName, active , ModuleState } = reaction;
    const { settings } = ModuleState;

    const {name } = reaction;
    console.log({
     name,
     moduleName,
     active,
     ModuleState
    })

    if (!reaction.active || isObjectEmpty(settings)) {
      return;
    }

    allModulesActiveDefault[moduleName] = {
      mod_active: active,
      mod_name: moduleName,
      title: moduleName,
      'reaction-id': 0,
      reactions: [],
      ...settings,
    }
  });

  return allModulesActiveDefault;
};

const restorePrevState = async (userId, userReactionAssets) => {
  const userReactions = await queryReactionsByUser(userId);
  const allModulesActiveDefault = userReactionAssets.allModulesActive;
  // const allModulesActive = restoreSavedModuleState(userReactions, allModulesActiveDefault);
    console.log('*******************************')
    console.log()
  // userReactionAssets.setAllModulesActive(allModulesActive);

}

module.exports = restorePrevState;