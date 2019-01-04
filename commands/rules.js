const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(message.member.hasPermission("ADMINISTRATOR")) {
      let rulesembed = new Discord.RichEmbed()
      .setColor("#f4e842")
      .addField("<@&377152436340785153>", `- **Главная** модерация сервера`)
      .addField("<@&419508485601099776>", `- **Старший** модератор сервера`)
      .addField("<@&377332841434054668>", `- **Младший** модератор сервера`)
      .addField("<@&471194313091448835>>", `- **Рядовые** модераторы сервера`);
      
      message.channel.send(rulesembed)
    }

}

module.exports.help = {
  name:"rules"
}

