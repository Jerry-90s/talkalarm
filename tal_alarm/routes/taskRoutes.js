// routes/taskRoutes.js
const express = require('express');
const router = express.Router();
const Task = require('../models/Task'); // Ensure this path is correct

router.get('/api/tasks', async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json(tasks); // Always returns an array
  } catch (error) {
    console.error('Failed to retrieve tasks:', error);
    res.status(500).json({ message: "Failed to fetch tasks", error: error.message }); 
  }
});

module.exports = router;
