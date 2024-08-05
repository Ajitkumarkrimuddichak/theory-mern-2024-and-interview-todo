const mongoose = require("mongoose");

const stateSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  state_name: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("City", stateSchema);
