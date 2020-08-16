const Discord = require('discord.js');

const Log = require('../database/models/Log');

const command = 'audit';

module.exports = {
  id: 'command_audit',
  displayName: 'audit',
  log: false,
  canHandle: (message) => {
    return message.content.toLowerCase().startsWith(command);
  },
  handle: async (message) => {
    const startTime = Date.now();

    const username = message.content.substring(command.length).trim() || message.author.username;

    const logEntry = await Log.findOne({ username });
    if (!logEntry) return message.channel.send('User does not exist in logs');

    const userId = logEntry.userId;
    const userLogs = await Log.find({ userId });

    const count = {};

    userLogs.forEach(userLog => {
      const displayName = userLog.commandDisplayName;
      !count[displayName] ? count[displayName] = 1 : count[displayName] = count[displayName] + 1;
    });

    const field = { name: 'Commands used', value: '' };

    Object.keys(count).map(command => {
      const commandLabel = command.charAt(0).toUpperCase() + command.slice(1);
      field.value = field.value + `${commandLabel}: ${count[command]}\n`
    });

    const endTime = Date.now();
    const timeTaken = (endTime - startTime);

    const embedObject = {
      title: `${username}'s Audit`,
      fields: [ field ],
      footer: {
        text: `Time taken: ${timeTaken}ms`
      }
    };

    const embed = new Discord.MessageEmbed(embedObject);

    message.channel.send(embed);
  }
};