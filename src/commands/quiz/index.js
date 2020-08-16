const Discord = require('discord.js');

const QuizLog = require('../../database/models/QuizLog');
const QuizMessage = require('../../QuizMessage');
const questions = require('./questions');

const command = 'quiz';

// check for users answered questions
// filter ids from actual list of questions
// return random question
// handle react of question somewhere

// TODO: Make it so that if there is an unanswered question in the QuizMessages we load that

module.exports = {
  id: 'command_quiz',
  displayName: 'quiz',
  canHandle: (message) => {
    return message.content.toLowerCase().startsWith(command);
  },
  handle: async (message) => {
    let quizLog = await QuizLog.findOne({ userId: message.author.id });
    
    if (!quizLog) {
      quizLog = new QuizLog({ userId: message.author.id, answered: [], unanswered: [] });
      await quizLog.save();
    }

    const answered = quizLog.answered.map(question => question.id);
    const questionIds = Object.keys(questions);
    const possibleQuestions = questionIds.filter( ( id ) => !answered.includes( id ) );

    if (possibleQuestions.length === 0) return message.reply('You have answered all of the questions!');

    const questionKey = possibleQuestions[Math.floor(Math.random() * possibleQuestions.length)];
    const questionToBeAsked = questions[questionKey];

    const embedObject = {
      title: questionToBeAsked.text,
      color: 7023837,
      footer: {
        text: `question:${questionToBeAsked.id}`
      },
      author: {
        name: `Question for ${message.author.username}`
      },
      fields: [
        {
          "name": ":one:",
          "value": questionToBeAsked.options.one.text
        },
        {
          "name": ":two:",
          "value": questionToBeAsked.options.two.text
        },
        {
          "name": ":three:",
          "value": questionToBeAsked.options.three.text
        },
        {
          "name": ":four:",
          "value": questionToBeAsked.options.four.text
        }
      ]
    };

    const embed = new Discord.MessageEmbed(embedObject);

    const sentMessage = await message.channel.send(embed);

    QuizMessage.add({
      messageId: sentMessage.id,
      questionId: questionKey,
      userId: message.author.id,
    })
  }
};