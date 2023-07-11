const mongoose = require('mongoose');

const CountSchema = new mongoose.Schema({
  count: Number
});

module.exports = mongoose.model('Count', CountSchema);