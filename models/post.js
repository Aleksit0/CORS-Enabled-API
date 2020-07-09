const mongoose = require('mongoose');

// Data scheme
const posts_scheme = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content_text: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Post', posts_scheme);