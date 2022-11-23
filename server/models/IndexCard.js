const mongoose = require('mongoose');

const IndexCardSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ['No clue', 'Somewhat get', 'In the bag'],
  },
  subjectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subject',
  }
});

module.exports = mongoose.model('IndexCard', IndexCardSchema);