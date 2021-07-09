const { Schema, model, Types } = require("mongoose");
const dateFormat = require('../utils/format');

const ReactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId()
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
    // get: (createdAtVal) => dateFormat(createdAtVal),
  },
},
{
  toJSON: {
    getters: true
  }
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
      // get: (createdAtVal) => dateFormat(createdAtVal),
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
      getters: true
    },
    id: false,
  }
);

ThoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
})

const Thought = model("Thought", ThoughtSchema);

module.exports = Thought;
