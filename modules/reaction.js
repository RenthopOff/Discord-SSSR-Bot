const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  if(message.author.id != "267532316392292352") return;
  message.react('🤔');
  message.react('😍');
  message.react('👽');
  message.react('👽');

    let reactEmbed = new Discord.RichEmbed()
    .setColor("#35170c")
    .setTitle("Я отреагировал на ваше сообщения удачно!");

    message.channel.send(reactEmbed).then(msg => {msg.delete(2000)});

}

module.exports.help = {
  name: "react"
}
