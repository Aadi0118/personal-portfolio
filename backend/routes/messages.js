const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// POST a new message
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Please provide name, email, and message.' });
  }

  // If MongoDB is not connected, just mock the save so the frontend form works
  const mongoose = require('mongoose');
  if (mongoose.connection.readyState !== 1) {
    console.log('MongoDB not connected. Mocking message save:', { name, email, message });
    return res.status(201).json({ _id: Date.now().toString(), name, email, message, status: 'mock_saved' });
  }

  const newMessage = new Message({
    name,
    email,
    message
  });

  try {
    const savedMessage = await newMessage.save();
    res.status(201).json(savedMessage);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
