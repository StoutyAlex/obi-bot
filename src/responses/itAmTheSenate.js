
module.exports = {
  id: 'response_i_am_the_senate',
  canHandle: (message) => {
    return message.content.toLowerCase().includes('the senate');
  },
  handle: (message) => {
    message.channel.send('I AM THE SENATE!');
  }
};
