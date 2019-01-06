const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    var canal = message.guild.channels.find('name', 'adminchat');
    let reason = args.slice(0).join(' ');
    if (!reason)
     return message.reply("А что за баг?");
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(message.author.avatarURL)
        .setTitle(`Новый нарушитель!`)
        .addField('Кто сообщил:', message.author)
        .addField('\n\n Причина:', reason)
        .setFooter(`Предоставлено ${message.author.username}.`)
        .setTimestamp()
    canal.send(embed);
        message.reply('Спасибо за хорошую работу!');
}

module.exports.help = {
    name: "reportplayer"
}
