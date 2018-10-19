const Discord = require('discord.js');
const superagent = require('superagent');

module.exports.run = async (bot,message,args) => {

  let {body} = await superagent
  .get (`https://random.dog/woof.json`);

  let dogembed = new  Discord.RichEmbed()
  .setColor("#a0522d")
  .setTitle("Doggo :dog:")
  .setImage(body.url);

  message.channel.send(dogembed).then(message => {message.delete(5000)});
}

module.exports.help = {
  name: "dog",
}
