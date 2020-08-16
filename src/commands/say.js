const Discord = require('discord.js');

const path = require('path');
const fs = require('fs');

const supportedAudio = Object.fromEntries(
  fs.readdirSync(path.join(__dirname, '../assets/audio'))
  .map(audio => [audio.replace('.mp3', ''), audio]));

const command = 'say';

const getAudioFile = (phrase) => {
  if (phrase !== 'random') return supportedAudio[phrase];

  const supportedArray = Object.keys(supportedAudio);
  const randomNumber = Math.floor(Math.random() * supportedArray.length);

  return supportedAudio[supportedArray[randomNumber]];
}

module.exports = {
  id: 'command_say',
  displayName: 'say',
  canHandle: (message) => {
    return message.content.toLowerCase().startsWith(command);
  },
  handle: (message) => {
    const phrase = message.content.substring(command.length).trim().toLowerCase();

    const audioPhrase = phrase.split(' ').join('-');
    const audioFile = getAudioFile(audioPhrase);

    if (!audioFile) {
      const supportedAudioText = Object.keys(supportedAudio).join('\n').replace(/-/g, ' ');
      const fields = [ { name: 'Phrases', value: supportedAudioText } ];

      const embed = new Discord.MessageEmbed({ fields });

      message.channel.send('I can say these:');
      return message.channel.send(embed);
    }
    
    const voiceChannel = message.member.voice.channel;
    
    if (!voiceChannel) return message.channel.send('Try again while in a voice channel');

    voiceChannel.join().then(connection => {
      connection.play(`./src/assets/audio/${audioFile}`);
    }).catch(err => console.log(err))
  }
};