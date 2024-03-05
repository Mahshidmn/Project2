const WorkoutSession = require('../models/workoutsession');




async function index(req, res) {
    const workoutSessions = await WorkoutSession.find({});
    res.render('workoutsessions/index', { workoutSessions});
}

async function show(req, res) {
    const workoutSession = await WorkoutSession.findById(req.params.id);
    res.render('workoutsessions/show', { workoutSession });
  }

  

function newSession(req, res) {
    // We'll want to be able to render an  
    // errorMsg if the create action fails
    res.render('workoutsessions/new');
  }

  async function create(req, res) {
    
    try {
      await WorkoutSession.create(req.body);
      res.redirect('/workoutsessions');  
    } catch (err) {
      // Typically some sort of validation error
      console.log(err);
      res.render('workoutsessions/new', { errorMsg: err.message });
    }
  }

module.exports = {
    index,
    show,
    new: newSession,
    create
  };