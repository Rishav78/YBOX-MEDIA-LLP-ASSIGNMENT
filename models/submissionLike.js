const mongoose = require('mongoose');

const submissionLikeSchema = new mongoose.Schema({
  submission: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'submissions',
    required: true
  },
  author: {
    type:mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true
  }
});

module.exports = mongoose.model('submissionlikes', submissionLikeSchema);