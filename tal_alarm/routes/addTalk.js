// Assuming you have these imports in your server.js or a designated routes file
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

// Task schema and model
const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: Date,
});

const Task = mongoose.model('Task', taskSchema);

// Endpoint to add a new task
router.post('/addTalk', async (req, res) => {
  console.log(req.body);
  try {
    const { title, description, date } = req.body;
    if (!title || !description || !date) {
      return res.status(400).json({ message: "Missing fields" });
    }
    const newTask = new Task({ title, description, date });
    await newTask.save();
    res.status(201).json({ message: 'Task added successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router; // Export the router if this is in a separate file
