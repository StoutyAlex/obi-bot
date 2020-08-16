const darthTheWise = require('./darthTheWise');

module.exports = {
  id: 'response_not_from_a_jedi',
  canHandle: (message) => {

    return message.content.toLowerCase().includes('is it possible to learn this power?');
  },
  handle: (message) => {
    message.channel.send(text);
  }
};
