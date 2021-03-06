require('dotenv').config();
const Discord = require('discord.js');
const mongoose = require('mongoose');

const { DB_URI } = require('./src/config');
const QuizMessage = require('./src/QuizMessage');

const answer = require('./src/commands/quiz/answer');

mongoose.connect(DB_URI);

const { handleCommand, handleResponse } = require('./src/handler');
const { token, commandPrefix } = require('./src/config');

const bot = new Discord.Client();

bot.on('ready', async () => {
  console.log(`Logged in as ${bot.user.tag}`);
  await QuizMessage.load();
});

bot.on('message', (message) => {
  if (message.author === bot.user) return; // don't respond to its own messages

  const content = message.content;
  
  // content.startsWith(commandPrefix) ? handleCommand(message) : handleResponse(message);

  if (content.startsWith(commandPrefix)) handleCommand(message);
  return;
});

// bot.on('messageReactionAdd', async (messageReaction, user) => {
//   const messageId = messageReaction.message.id;
//   const userId = user.id

//   const emoji = messageReaction._emoji.name;

//   if(!['1️⃣', '2️⃣', '3️⃣', '4️⃣'].includes(emoji)) return;

//   const quizMess = QuizMessage.get({ messageId: messageId, userId: userId });
//   if (!quizMess) return;

//   const correct = await answer(quizMess, emoji);

//   correct ? messageReaction.message.react('✅') : messageReaction.message.react('❌');
// });

bot.on('voiceStateUpdate', async (oldState, newState) => {
  const newChannel = await bot.channels.fetch(newState.channelID);
  const isObiInChannel = newChannel.members.get(bot.user.id);

  if (oldState.selfDeaf !== newState.selfDeaf || oldState.selfMute !== newState.selfMute) return;

  if (isObiInChannel) {
    newChannel.join().then(connection => {
      setTimeout(() => connection.play('./src/assets/audio/hello.mp3'), 500);
    }).catch(err => console.log(err))
  }
});

bot.login(token);
