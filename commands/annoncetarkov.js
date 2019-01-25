const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(message.member.hasPermission("ADMINISTRATOR")) {
      let rulesembed = new Discord.RichEmbed()
      .setColor("#8000ff")
      .addField("[**Нововведение в игре**]", `<@&506168508892184586> - новое в игре`)
      .setImage("https://www.free-wallpapers.su/data/media/5477/big/gm6021.jpg")
      message.channel.send(rulesembed)
    }

}

module.exports.help = {
  name:"annoncegametarkov"
}

