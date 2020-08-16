
module.exports = {
  id: 'response_unlimited_power',
  canHandle: (message) => {
    return message.content.toLowerCase().includes('power');
  },
  handle: (message) => {
    message.channel.send('UNLIMITED POWER!');
  }
};
