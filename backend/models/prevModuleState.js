const mongoose = require("mongoose");

const PrevModuleStateSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  allModulesActive: {},
});

module.exports = mongoose.model("PrevModuleStates", PrevModuleStateSchema);
