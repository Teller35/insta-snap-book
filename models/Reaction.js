const { Schema } = require("mongoose");
const dateFormat = require('../utils/format');

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
    get: (createdAtVal) => dateFormat(createdAtVal),
  },
});

module.exports = ReactionSchema;
