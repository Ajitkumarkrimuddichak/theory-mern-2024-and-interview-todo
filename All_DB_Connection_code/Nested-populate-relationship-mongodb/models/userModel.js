const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  posts: [{ type: mongoose.Types.ObjectId, ref: "Post" }],
});
module.exports = mongoose.model("User", userSchema);
