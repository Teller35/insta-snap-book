const { Schema, model, Types } = require("mongoose");

const FriendSchema = new Schema({
  friendId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },

  username: [
    {
      type: String,
      required: true,
      ref: "User"
    }
  ],
  
},
{
  toJSON: {
    getters: true
  }
}
)

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

    friends: [FriendSchema],

  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
  
);

const User = model("User", UserSchema);

module.exports = User;
