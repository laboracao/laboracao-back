const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: String,
    exercises: Array,
    exercises_created: Date,
    gl_List: Array,
    term_accept: Boolean,
    created_at: Date,
    updated_at: Date
});

module.exports = mongoose.model('Users', UserSchema);