// Import necessary modules
const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Adjust path as necessary

// Update profile endpoint
router.post('/updateProfile', async (req, res) => {
    const { email, fullName, tagName } = req.body;

    try {
        const updatedUser = await User.findOneAndUpdate(
            { email }, 
            { fullName, tagName },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({
            message: "Profile updated successfully",
            data: updatedUser
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Export the router
module.exports = router;
