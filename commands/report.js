const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const red = botconfig.red;
const green = botconfig.green;
const orange = botconfig.orange;

module.exports.run = async (bot, message, args) => {

    if(args[0] == "help"){
      message.reply("Usage: !report <user> <reason>");
      return;
    }
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Не могу найти пользователя.");
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setFooter(message.guild.owner.user.tag, message.guild.owner.user.avatarURL)
    .setTimestamp()
    .setDescription("Reports")
    .setColor(orange)
    .addField("Репорт на", `${rUser} with ID: ${rUser.id}`)
    .addField("Кем выдан", `${message.author}`)
    .setThumbnail(message.author.displayAvatarURL)
    .addField("Канал", message.channel)
    .addField("Время", message.createdAt)
    .addField("Причина", rreason);

    let reportschannel = message.guild.channels.find(`name`, "📥доносы");
    if(!reportschannel) return message.channel.send("Где канал для репорт,а сучка?!");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

}

module.exports.help = {
  name: "report",
}
