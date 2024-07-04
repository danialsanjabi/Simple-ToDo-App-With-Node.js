const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    name : { type : String, required : true}
});

const Task = mongoose.model('Task',Schema);
module.exports = Task;