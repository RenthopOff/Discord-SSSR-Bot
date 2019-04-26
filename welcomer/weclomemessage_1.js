
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(message.member.hasPermission("ADMINISTRATOR")) {
      let rulesembed = new Discord.RichEmbed()
      .setColor("#8000ff")
      .setTitle("Добрый день товарищ! Рады тебя видеть на наших землях, где же ты пропадал? Ну ладно это потом узнаем уже, а пока посмотри как тут все меняется на твоих глазах. Ладно почитай пока правила, а я пока за чайком , потом увидемся позже♥")

      message.channel.send(rulesembed)
    }

}

module.exports.help = {
  name:"welcome"
}
