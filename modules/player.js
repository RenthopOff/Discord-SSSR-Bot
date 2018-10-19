const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

  let playerembed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setDescription("Информация об гражданском")
  .setColor("#4b0082")
  .setThumbnail(message.author.avatarURL)
  .addField("Полное Имя", message.author.tag)
  .addField("ID", message.author.id)
  .addField("Зашел", message.author.createdAt);

  message.channel.send(playerembed);
}

module.exports.help = {
  name: "playerinfo"
}
