const { Schema, model, Types } = require("mongoose");
const format = require("../utils/format");

const ReactionSchema = new Schema(
  {
    // Create a reactionId to target
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
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
    // Formatted timestamp
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAt) => format(createdAt),
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

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
      get: (createdAt) => format(createdAt),
    },

    username: [
      {
        type: String,
        required: true,
        ref: "User",
      },
    ],

    reactions: [ReactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);
// Counter to show how many reactions a thought has
ThoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("Thought", ThoughtSchema);

module.exports = Thought;
