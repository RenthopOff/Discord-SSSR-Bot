const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(message.member.hasPermission("ADMINISTRATOR")) {
      let rulesembed = new Discord.RichEmbed()
      .setColor("#f4e842")
      .addField("@👑 Маршал Российской Федерации 👑", `- **Главная** модерация сервера`);
      
      message.channel.send(rulesembed)
    }

}

module.exports.help = {
  name:"rules"
}

