const commands = require('./commands');
const responses = require('./responses');

const Log = require('./database/models/Log');

const { commandPrefix, maxHistory } = require('./config');

const previousCommands = [];
const previousResponses = [];

const logResult = (array, id) => {
  if (array.length >= maxHistory) {
    array.shift();
  }
  array.push(id);
}

const handleResponse = (message) => {
  [ response, ...rest ] = responses.filter(response => response.canHandle(message, previousResponses));

  if (!response || !response.handle ) {
    return;
  }

  logResult(previousResponses, response.id);
  return response.handle(message, previousResponses);
};

const handleCommand = (message) => {
  message.content = message.content.substring(commandPrefix.length).trim();
  [ command, ...rest ] = commands.filter(command => command.canHandle(message, previousCommands));
  
  if (!command || !command.handle ) {
    return message.channel.send('Invalid command');
  }

  const { id, username } = message.author;
  
  if (command.log !== false) {
    new Log({
      userId: id,
      username,
      commandId: command.id,
      commandDisplayName: command.displayName,
      phrase: message.content
    }).save();
  }

  logResult(previousCommands, command.id);

  return command.handle(message, previousCommands);
}

module.exports = { handleCommand, handleResponse };
