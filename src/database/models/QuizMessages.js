const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuizMessage = new Schema({
  messageId: String,
  questionId: String,
  userId: String,
});

module.exports = mongoose.model('QuizMessage', QuizMessage);
