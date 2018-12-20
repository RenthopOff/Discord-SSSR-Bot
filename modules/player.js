const Discord = module.require('discord.js');
const moment = require('moment');


module.exports.run = async (bot, message, args) => {

    let user = message.mentions.users.first() || message.author;
    let embed = new Discord.RichEmbed()
        .setAuthor(user.username + '#' + user.discriminator, user.displayAvatarURL)
        .setDescription(`${user}`)
        .setColor(`#4bf442`)
        .setThumbnail(`${user.displayAvatarURL}`)
        .addField('Cтатус:', user.presence.status, true)
    	.addField("Created At:", `${moment.utc(user.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
		.addField("Joined Server:", `${moment.utc(member.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
        .addField("ТЕГ", `#${user.discriminator}`, true)
        .addField("Играет в:", `${user.presence.game ? user.presence.game.name: "Тупо флексит"}`, true)
        .setFooter(`ID: ${user.id}`)
        .setTimestamp();

    message.channel.send({ embed: embed });
    return;
}

module.exports.help = {
    name: 'userinfo'
}

