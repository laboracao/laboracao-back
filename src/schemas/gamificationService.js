const mongoose = require('mongoose');

const GamificationSchema = new mongoose.Schema({
  email: String,
  exerciseCompleteCount: Number,
});

module.exports = mongoose.model('Gamification', GamificationSchema);