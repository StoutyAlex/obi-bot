const ytdl = require('ytdl-core');

const command = 'play';

// Search youtube for the first phrase it gets
// store a connection thing

module.exports = {
  id: 'command_play',
  displayName: 'play',
  canHandle: (message) => {
    return message.content.toLowerCase().startsWith(command);
  },
  handle: async (message) => {
    const phrase = message.content.substring(command.length).trim();
    const voiceChannel = message.member.voice.channel;
    
    if (!voiceChannel) return message.channel.send('Try again while in a voice channel');
    
    voiceChannel.join().then(connection => {
      connection.play(ytdl(phrase));
    }).catch(err => console.log(err))
  }
};