// models/nudgeModel.js

const mongoose = require('mongoose');

const nudgeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  sendTime: {
    type: Date,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  icon: String,
  invitation: String
});

const Nudge = mongoose.model('Nudge', nudgeSchema);

module.exports = Nudge;
