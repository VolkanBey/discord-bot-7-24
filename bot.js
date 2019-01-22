const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');

var prefix = ayarlar.prefix;


client.on('ready', () => {
  console.log(`Botunuz olan ${client.user.tag} sunucuya giriş yaptı!`);
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.channel.sendMessage('Aleykum Selam');
  }
  if (msg.content.toLowerCase() === 'volkan') {
    msg.channel.sendMessage('Kendisi sizinle ilgilenecektir. Lütfen Bekleyiniz!');
  }
if (!msg.content.startsWith(prefix)) {
   return;
}
if (msg.content.toLowerCase() === prefix + 'efeberkay' ) {
msg.channel.sendMessage('Bu dediğin kişi volkanın can dostu değil mi?')
}
if (!msg.content.startsWith(prefix)) {
   return;
}
if (msg.content.toLowerCase() === prefix + 'ezgi' ) {
msg.channel.sendMessage('Hoop! Volkanımın sevgilisinin adını ağzına alma!')
}
});

client.login('NTM3MzE0NDM1MzkyNjAyMTMz.DyjcsA.6gascKWd6rzhlFS2nj9wopVFC1A');
