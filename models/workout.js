const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    title: {type: String, required: true },
    description: { type: String, required: true },
    bodyPart: {
        type: String,
        enum: ['Legs', 'Back and Biceps', 'Shoulder and Triceps', 'Full Body'],
      },
}, {
    timestamps: true
});

module.exports = mongoose.model('Workout', workoutSchema);