const router = require('express').Router();
const userRoutes = require('./user.routes');
const thoughtRoutes = require('./thought.routes');
const reactionRoutes = require('./thought.routes');

router.use('/api/users');
router.use('/api/thoughts');
router.use('/api/reactions');

module.exports = router;