const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  competition: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'competitions',
    required: true
  }
});

module.exports = mongoose.model('submissions', submissionSchema);