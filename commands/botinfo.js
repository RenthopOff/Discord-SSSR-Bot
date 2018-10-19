const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("**Version bot 1.5**")
    .setColor("#7f4870")
    .setThumbnail(bicon)
    .addField("**Cоздатель**", message.guild.owner)
    .addField("Имя Бота", bot.user.username)
    .addField("Создан", bot.user.createdAt, true);
    message.channel.send(botembed);
}

module.exports.help = {
  name:"botinfo"
}

