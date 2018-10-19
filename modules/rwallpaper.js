const Discord = require('discord.js');
const superagent = require('superagent');

module.exports.run = async (bot,message,args) => {

  let {body} = await superagent
  .get (`https://nekos.life/api/v2/img/wallpaper`);

  let dogembed = new Discord.RichEmbed()
  .setColor("#911e42")
  .setTitle("For you... :heart:")
  .setImage(body.url);

  message.channel.send(dogembed);

}

module.exports.help = {
  name: "rwallpaper",
}
