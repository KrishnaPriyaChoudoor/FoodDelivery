const mongoose = require("mongoose");

const UsersModel = mongoose.model("users", {
  name: { type: String },
  email: { type: String },
  password: { type: String },
});

module.exports = UsersModel;
