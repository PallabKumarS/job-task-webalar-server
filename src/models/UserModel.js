const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  photo: {
    type: String,
  },
  role: {
    type: String,
  },
});

const UserModel = model("User", userSchema);

module.exports = UserModel;
