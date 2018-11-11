const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(message.member.hasPermission("ADMINISTRATOR")) {
      let annonceembed = new Discord.RichEmbed()
      .setColor("FF0000")
      .setTitle(`Обновление от ${message.author.username}`, `{args}`)
      .setTimestamp()
      .setDescription(args.join(" "));

      message.channel.send(annonceembed)
    }

}

module.exports.help = {
  name:"anonce"
}
