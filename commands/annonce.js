const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(message.member.hasPermission("ADMINISTRATOR")) {
      let rulesembed = new Discord.RichEmbed()
      .setColor("#8000ff")
      .addField("[**Нововведение в игре**]", `<@&538320686150713356> - новое в игре`)
      .addField("1", `https://dota2hq.eu/_ph/1/183775890.jpg`)
      message.channel.send(rulesembed)
    }

}

module.exports.help = {
  name:"annoncegame"
}

