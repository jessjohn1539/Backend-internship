// controllers/nudgeController.js

const Nudge = require('../models/nudgeModel');

// POST /nudges
exports.createNudge = async (req, res) => {
  try {
    // Extract data from the request body
    const { title, image, sendTime, description, icon, invitation } = req.body;

    // Save the nudge in the database
    const nudge = await Nudge.create({ title, image, sendTime, description, icon, invitation });

    res.status(201).json({ message: 'Nudge created successfully', nudge });
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};

// GET /nudges/:nudgeId
exports.getNudge = async (req, res) => {
  try {
    const nudge = await Nudge.findById(req.params.nudgeId);
    if (!nudge) {
      return res.status(404).json({ error: 'Nudge not found' });
    }

    res.json(nudge);
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};

// PUT /nudges/:nudgeId
exports.updateNudge = async (req, res) => {
  try {
    const nudge = await Nudge.findByIdAndUpdate(req.params.nudgeId, req.body, { new: true });
    if (!nudge) {
      return res.status(404).json({ error: 'Nudge not found' });
    }

    res.json({ message: 'Nudge updated successfully', nudge });
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};

// DELETE /nudges/:nudgeId
exports.deleteNudge = async (req, res) => {
  try {
    const nudge = await Nudge.findByIdAndDelete(req.params.nudgeId);
    if (!nudge) {
      return res.status(404).json({ error: 'Nudge not found' });
    }

    res.json({ message: 'Nudge deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};
