const Discord = module.require('discord.js');


module.exports.run = async (bot, message, args) => {

    let user = message.mentions.users.first() || message.author;
    const joinDiscord = moment(user.createdAt).format('llll');
    const joinServer = moment(user.joinedAt).format('llll');
    let embed = new Discord.RichEmbed()
        .setAuthor(user.username + '#' + user.discriminator, user.displayAvatarURL)
        .setDescription(`${user}`)
        .setColor(`RANDOM`)
        .setThumbnail(`${user.displayAvatarURL}`)
        .addField('Status:', user.presence.status, true)
        .addField('Roles:', user.roles.map(r => `${r}`).join(' | '), true)
        .setFooter(`ID: ${user.id}`)
        .setTimestamp();

    message.channel.send({ embed: embed });
    return;
}

module.exports.help = {
    name: 'userinfo'
}

