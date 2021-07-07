const { Schema, model } = require("mongoose");
const ReactionSchema = require("./Reaction");

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
  // {
  //     toJSON: {
  //         virtuals: true
  //     },
  //     id: true
  // }
);

const Thought = model("Thought", ThoughtSchema);

module.exports = Thought;
