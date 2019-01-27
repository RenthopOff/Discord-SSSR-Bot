const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(message.member.hasPermission("ADMINISTRATOR")) {
      let rulesembed = new Discord.RichEmbed()
      .setColor("#8000ff")
      .addField("[**Нововведение в игре**]", `<@&538320686150713356> - Новый рейтинговый сезон начнётся на следующей неделе! Также в игре выйдет патч 7.21. Долгожданного героя Mars обещают добавить в игру в конце февраля или начале марта.`)
      .setImage("https://sun1-14.userapi.com/c848620/v848620236/10d629/BEQ2kguWecM.jpg")
      message.channel.send(rulesembed)
    }

}

module.exports.help = {
  name:"annoncegamedota"
}

