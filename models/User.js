const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      trim: true,
      required: "Must have a username!",
    },

    email: {
      type: String,
      unique: true,
      required: "Email is required!",
      match: [/.+@.+\..+/, "Please enter a valid email!"],
    },
  }
  // {
  //     toJSON: {
  //         virtuals: true
  //     },
  //     id: true
  // }
);

const User = model("User", UserSchema);

module.exports = User;
