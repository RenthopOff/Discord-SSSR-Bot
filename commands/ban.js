const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("No can do pal!");
    if(args[0] == "help"){
      message.reply("Usage: !ban <user> <reason>");
      return;
    }
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Не могу найти его!");
    let bReason = args.join(" ").slice(22);
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("У него привилегия выше твоей,LOL!?");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("~Ban~")
    .setColor("#FF0000")
    .addField("Забанен", `${bUser} with ID ${bUser.id}`)
    .addField("Кем был выдан бан", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Забанен в", message.channel)
    .addField("Время", message.createdAt)
    .addField("Прчина", bReason);

    let incidentchannel = message.guild.channels.find(`name`, "incidents");
    if(!incidentchannel) return message.channel.send("Не могу найти канал где это произошло.");

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);
}

module.exports.help = {
  name:"ban"
}
