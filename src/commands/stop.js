
const command = 'stop';

// does not leave the channel need a global queue state

module.exports = {
  id: 'command_leave',
  displayName: 'stop',
  canHandle: (message) => {
    return message.content.toLowerCase().startsWith(command);
  },
  handle: async (message) => {
    const voiceChannel = message.member.voice.channel;
    
    if (!voiceChannel) return message.channel.send('Try again while in a voice channel');

    voiceChannel.leave();
  }
};