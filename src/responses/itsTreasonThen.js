const phrases = [
  'treason',
  'betreyal',
  'snaked',
  'snake'
];

// include these phrases

module.exports = {
  id: 'response_its_treason_then',
  canHandle: (message) => {
    return message.content.toLowerCase().includes('betrayal');
  },
  handle: (message) => {
    message.channel.send("It's treason then");
  }
};
