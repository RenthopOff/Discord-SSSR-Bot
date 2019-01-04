const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(message.member.hasPermission("ADMINISTRATOR")) {
      let rulesembed = new Discord.RichEmbed()
      .setColor("FF0000")
      .addField("1.1 Запрещён спам, флуд, злоупотребление капсом в чате кроме", true)
      .setDescription(args.join(" "));

      message.channel.send(rulesembed)
    }

}

module.exports.help = {
  name:"rules"
}
