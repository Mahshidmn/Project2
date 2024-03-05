const express = require('express');
const router = express.Router();

const workoutSessionsController = require('../controllers/workoutSessions');

// GET /workoutsessions
router.get('/',workoutSessionsController.index);
// GET /workoutsessions/new
router.get('/new', workoutSessionsController.new);
// GET /workoutsessions/:id
router.get('/:id', workoutSessionsController.show);
// POST /workoutsessions
router.post('/', workoutSessionsController.create);

module.exports = router;    