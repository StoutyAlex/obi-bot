
module.exports = {
  id: 'response_master_jedi',
  canHandle: (message) => {
    return message.content.toLowerCase().includes('thank you sheev');
  },
  handle: (message) => {
    message.channel.send('you\'re welcome Master Jedi');
  }
};
