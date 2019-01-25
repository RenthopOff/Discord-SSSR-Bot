const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(message.member.hasPermission("ADMINISTRATOR")) {
      let rulesembed = new Discord.RichEmbed()
      .setColor("#8000ff")
      .addField("[**Нововведение в игре**]", `<@&538320686150713356> - новое в игре`
      message.channel.send(rulesembed)
    }

}

module.exports.help = {
  name:"annoncegame"
}
