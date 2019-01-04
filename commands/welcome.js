const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(message.member.hasPermission("ADMINISTRATOR")) {
      let rulesembed = new Discord.RichEmbed()
      .setColor("#8000ff")
      .setTitle("Привет мой новый друг,вижу ты решил к нам зайти?Ну мы всегда рады новым друзья на нашем сервере.Прочитай правила и потом можешь идти развлекаться😏");

      message.channel.send(rulesembed)
    }

}

module.exports.help = {
  name:"rules2"
}


