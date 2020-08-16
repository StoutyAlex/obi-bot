const questions = require('./questions');

const QuizLog = require('../../database/models/QuizLog');
const QuizMessage = require('../../QuizMessage');

const emojiMap = {
  '1️⃣': 'one',
  '2️⃣': 'two',
  '3️⃣': 'three',
  '4️⃣': 'four'
};

module.exports = async (quizMessage, emoji) => {
  const question = questions[quizMessage.questionId];
  const emojiText = emojiMap[emoji];

  const correct = question.options[emojiText].correct || false;

  const userQuizLog = await QuizLog.findOne({ userId: quizMessage.userId });

  userQuizLog.answered.push({
    id: quizMessage.questionId,
    correct,
  });

  userQuizLog.save();
  QuizMessage.remove(quizMessage);

  return correct;
};
