const mongoose = require('mongoose');

const GamificationSchema = new mongoose.Schema({
  email: String,
  exerciseCompleteCount: Number,
  year: Number,
  month: Number
});

module.exports = mongoose.model('Gamification', GamificationSchema);