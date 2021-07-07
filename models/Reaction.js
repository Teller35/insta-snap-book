const { Schema } = require("mongoose");

const ReactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
  },
  reactionBody: {
    type: String,
    required: true,
    max: [280, "Over achiever reaction needs to be smaller!"],
  },
  username: [
    {
      type: String,
      required: true,
      ref: "User",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = ReactionSchema;
