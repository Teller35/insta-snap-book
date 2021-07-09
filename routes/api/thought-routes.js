const router = require("express").Router();

const {
  allThought,
  oneThought,
  addThought,
  removeThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");
// route for all thoughts
router.route("/").get(allThought);
// route for a single thought
router.route("/:id").get(oneThought);
// route to add a thought though a user id
router.route("/:userId").post(addThought);
// route to add a reaction though a thought and to delete thought
router.route("/:userId/:thoughtId").put(addReaction).delete(removeThought);
// route to delete a reaction
router.route("/:userId/:thoughtId/:reactionId").delete(removeReaction);

module.exports = router;
