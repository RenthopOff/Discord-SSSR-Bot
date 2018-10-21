const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

  let user = message.mentions.users.first() || message.author;

  let playerembed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setDescription("Информация об гражданском")
  .setColor("#4b0082")
  .setThumbnail(message.author.avatarURL)
  .addField("Полное Имя", message.author.tag, true)
  .addField("ID", message.author.id)
  .addField("Статус Гражданина:", user.presence.status, true)
  .addField("Сейчас играет:", `${user.presence.game ? user.presence.game.name: 'Просто в сети!'}`)
  .addField("Зашел", message.author.createdAt);

  message.channel.send(playerembed);
}

module.exports.help = {
  name: "playerinfo"
}
