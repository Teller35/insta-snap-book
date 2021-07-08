const router = require('express').Router();

const {
    allThought,
    oneThought,
    addThought,
    removeThought,
    addReaction,
    removeReaction,
} = require("../../controllers/thought-controller");

router.route('/').get(allThought);

router.route('/:id').get(oneThought);

router.route('/:userId').post(addThought);

router.route('/:userId/:thoughtId').put(addReaction).delete(removeThought);

router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;