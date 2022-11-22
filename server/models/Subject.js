const mongoose = require('mongoose');

const SubjectSchema = new mongoose.Schema({
  name: {
    type: String
  }
});

module.exports = mongoose.model('Subject', SubjectSchema);