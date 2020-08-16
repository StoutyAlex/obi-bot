const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuizLog = new Schema({
  userId: String,
  answered: Array,
  unanswered: Array,
});

module.exports = mongoose.model('QuizLog', QuizLog);
