
const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const workoutSessionSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    difficulty: {
      type: String,
      enum: ['Beginner', 'Intermediate', 'Advance'],
      default: 'Beginner'
    },
    locationType: {
      type: String,
      enum: ['Gym', 'Home'],
      default: 'Gym'
    },
    completed: { type: Boolean, default: false },
    
    workouts:[{
      type: Schema.Types.ObjectId,
      ref: 'Workout'
    }],
  
    }, {
      timestamps: true
    });


    module.exports = mongoose.model('WorkoutSession', workoutSessionSchema);
    
    