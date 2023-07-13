const mongoose = require('mongoose');

const ServerService = new mongoose.Schema({
  currentMonth: Number
});

module.exports = mongoose.model('Server', ServerService);