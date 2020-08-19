const discord = require('discord.js');
const superagent = require('superagent')

exports.run = (client, message, args) => {
  if (message.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: '4k'})
    .end((err, response) => {
      message.channel.send({ file: response.body.message });
    });
  } else {
    message.channel.send("**Bu Kanalda NSFW Aktif Değil ! Kanal Ayarlarından Aktifleştiriniz !** 🔞")
  }
};

exports.conf = {
  enabled: true, 
  guildOnly: false,
  aliases: [], 
  permLevel: 0 
};
exports.help = {
  name: '4k', 
  description: 'Sunucuda kullanıcıyı kayıt etmeye yarar.', 
  usage: '4k'
};