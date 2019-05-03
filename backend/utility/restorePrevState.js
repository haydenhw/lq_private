var { queryReactionsByUser } = require('../utility/databaseUtils');

const isObjectEmpty = obj => Object.keys(obj).length === 0 && obj.constructor === Object;

// case ModuleState: {}
const restoreSavedModuleState = (reactions, allModulesActiveDefault) => {
  reactions.forEach(reaction => {
    const { module: moduleName, mod_active, ModuleState } = reaction;
    // console.log(ModuleState)
    
    // const { settings } = ModuleState;

    if (!reaction.active || isObjectEmpty({})) {
      return;
    }


    // const moduleReactions = reactions
    //   .filter(reaction => reaction.module === moduleName)
    //   .map(reaction => Object.assign({}, { id: reaction._id, ...reaction._doc }))

    allModulesActiveDefault[moduleName] = {
      mod_active,
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
  const allModulesActive = restoreSavedModuleState(userReactions, allModulesActiveDefault);
  userReactionAssets.setAllModulesActive(allModulesActive);

    // console.log("** restore state", userReactionAssets.needsUpdate("reactions"));    
  // console.log(userReactionAssets.reactions);
  // console.log(userReactionAssets.genModuleList())
}

module.exports = restorePrevState;