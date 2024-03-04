const Workout = require('../models/workout');


async function index(req, res) {
    const workouts = await Workout.find({});
    res.render('workouts/index', { title: 'All Workouts', workouts });
  }

  async function show(req, res) {
    const workout = await Workout.findById(req.params.id);
    // const tickets = await Ticket.find({flight: flight._id});
    res.render('workouts/show', { title: 'Workout Details', workout });
  }

  function newWorkout(req, res) {
    // We'll want to be able to render an  
    // errorMsg if the create action fails
    res.render('workouts/new', { title: 'Add Workout', errorMsg: '' });
  }

  async function create(req, res) {
    
    try {
      await Workout.create(req.body);
      // Always redirect after CUDing data
      // We'll refactor to redirect to the flights index after we implement it
      res.redirect('/workouts');  // Update this line
    } catch (err) {
      // Typically some sort of validation error
      console.log(err);
      res.render('workouts/new', { errorMsg: err.message });
    }
  }

module.exports = {
    index,
    show,
    new: newWorkout,
    create
 
  };