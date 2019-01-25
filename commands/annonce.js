const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(message.member.hasPermission("ADMINISTRATOR")) {
      let rulesembed = new Discord.RichEmbed()
      .setColor("#8000ff")
      .addField("[**Нововведение в игре**]", `<@&538320686150713356> - новое в игре`)
      .setImage("https://i.pinimg.com/originals/f3/62/06/f36206d27a5d40908bd1bc02ecca2b27.jpg")
      message.channel.send(rulesembed)
    }

}

module.exports.help = {
  name:"annoncegamedota
}

