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

    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],

    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]

  }
  
);

const User = model("User", UserSchema);

module.exports = User;
