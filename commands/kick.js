const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Не могу найти пользователя!");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**НЕ МОГУ**!");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("*Он имеет привелегию выше твоей или он команда Администрации*!");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("~Выгнан из государства~")
    .setColor("#e56b00")
    .addField("*Кому выдали*", `${kUser} with ID ${kUser.id}`)
    .addField("*Кем был выдан*", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("*Где был*", message.channel)
    .addField("*Время*", message.createdAt)
    .addField("*Причина*", kReason)
    .setFooter(message.guild.owner.user.tag, message.guild.owner.user.avatarURL)
    .setTimestamp();

    let kickChannel = message.guild.channels.find(`name`, "⚙report-list");
    if(!kickChannel) return message.channel.send("Где канал?.");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);
}

module.exports.help = {
  name:"kick"
}
