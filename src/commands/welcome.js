const command = 'welcome';

module.exports = {
  id: 'command_welcome',
  displayName: 'welcome',
  canHandle: (message) => {
    return message.content.toLowerCase().startsWith(command);
  },
  handle: async (message) => {
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) return message.channel.send('Try again while in a voice channel');
    voiceChannel.join();
  }
};