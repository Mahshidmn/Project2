const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const workoutSchema = new Schema({
    title: {type: String, required: true },
    description: { type: String},
    bodyPart: {
        type: String,
        enum: ['Legs and Glute', 'Back and Biceps', 'Shoulder and Triceps', 'Full Body']
      },
    // date: {
    //     type: Date,
    //     default: function() {
    //       const currentYear = new Date().getFullYear();
    //       return currentYear;
    //     },
    //   },
    // duration: {type: String, required: true },
    // set: {type: Number, required: true },
    // kg: {type: Number, required: true }
}, {
    timestamps: true
});

module.exports = mongoose.model('Workout', workoutSchema);