const { Schema, model } = require("mongoose");
const ReactionSchema = require("./Reaction");
const dateFormat = require('../utils/format');

const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: "Must have a thought!",
      min: [1, "Thought needs to be bigger!"],
      max: [280, "Over achiever thought needs to be smaller!"],
    },

    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal),
    },

    username: [
      {
        type: String,
        required: true,
        ref: "User",
      },
    ],

    thoughts: [ReactionSchema],
  }
);

const Thought = model("Thought", ThoughtSchema);

module.exports = Thought;
