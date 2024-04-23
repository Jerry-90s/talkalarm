// models/Task.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  time: { type: String, required: true },
  date: { type: String, required: true },
  color: { type: String, required: true }
});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
