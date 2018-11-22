const Discord = require('discord.js');
const superagent = require('superagent');

module.exports.run = async (bot,message,args) => {
  if (!message.channel.nsfw) return message.channel.send('Используйте в специальных каналах к примеру #🔞pron!')
  let {body} = await superagent
  .get (`https://nekos.life/api/v2/img/Random_hentai_gif`);  
  let dogembed = new Discord.RichEmbed()
  .setColor("#911e42")
  .setTitle("Ohh... :peach: ")
  .setImage(body.url);

  message.channel.send(dogembed);

}

module.exports.help = {
  name: "randomhentai",
}
