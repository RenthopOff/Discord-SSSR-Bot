const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(message.member.hasPermission("ADMINISTRATOR")) {
      let rulesembed = new Discord.RichEmbed()
      .setColor("#8000ff")
      .addField("**Приветствуем тебя в нашем ламповом месте, где ты можешь отдохнуть и поиграть в игры или побеседовать с другими людьми.", true)
      .addField("Первое дело пожалуйста прочти правила и потом можешь идти со спокойной душой развлекаться.")
      message.channel.send(rulesembed)
    }

}

module.exports.help = {
  name:"wel"
}
