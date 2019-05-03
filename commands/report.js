const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Недостаточно прав на использование команды!");
    var canal = message.guild.channels.find('name', '📥доносы');
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if (!member)
        return message.reply("Укажи нарушителя.");
    let reason = args.slice(1).join(' ');
    if (!reason) reason = "Отсуствие причины является нарушением! Пиши Главе Аднимистрации через >reportplayer!";
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(message.author.avatarURL)
        .setTitle(`Донос | Репорт `)
        .addField('Кто написал:', message.author)
        .addField('На кого написали:', member.user)
        .addField('Причина доноса:', reason)
        .setTimestamp()
    canal.send(embed);
}

module.exports.help = {
    name: "report"
}
