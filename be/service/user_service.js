const express = require('express');
const router = express.Router(); // Use a router for modularity

// Middleware for handling timestamps (example using a hypothetical function)
const handleTimestamps = (req, res, next) => {
  req.body.created_at = Date.now();
  req.body.updated_at = Date.now();
  next();
}

// GET /users - Get all users (not recommended for large datasets due to performance)
router.get('/users', async (req, res) => {
  try {
    const users = await User.find({ deleted_at: null }); // Find users where deleted_at is null (not soft deleted)
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching users');
  }
});

// POST /users - Create a new user
router.post('/users', handleTimestamps, async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser); // Return the created user with status code 201 (Created)
  } catch (error) {
    console.error(error);
    res.status(400).send('Error creating user'); // Handle validation or other errors
  }
});

// PUT /users/:id - Update a user
router.put('/users/:id', handleTimestamps, async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedUser = await User.findByIdAndUpdate(userId, req.body, { new: true }); // Find by ID, update with request body, and return the updated user
    if (!updatedUser) {
      return res.status(404).send('User not found');
    }
    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error updating user');
  }
});

// DELETE /users/:id - Soft delete a user (set deleted_at)
router.delete('/users/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const deletedUser = await User.findByIdAndUpdate(userId, { deleted_at: Date.now() });
    if (!deletedUser) {
      return res.status(404).send('User not found');
    }
    res.json({ message: 'User soft deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error deleting user');
  }
});

module.exports = router;