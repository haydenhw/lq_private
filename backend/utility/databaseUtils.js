const Reaction = require('../models/reaction');

var reactionFields = [ 'id', 'name', 'module', 'media', 'procedure', 'notes', 'ModuleState', 'active' ]

const queryReactionsByUser = (userId) => {
  return Reaction.find({ "user.id": userId }, reactionFields.join(' '))
    .exec()
    .then(docs => docs);
}

const saveModuleStateToReaction = (reactionId, moduleObject) => {
  if (!moduleObject) {
    return;
  }

  const { limits, parameters, moduleState } =  moduleObject;

  Reaction.findByIdAndUpdate(
      reactionId, 
      {"ModuleState.settings": { limits, parameters, moduleState }}, 
      { new: true }
     )
    .then(doc => {
      // console.log(doc);
    })
    .catch(err => {
      console.error(err);
    });
}

module.exports = { saveModuleStateToReaction, queryReactionsByUser };
