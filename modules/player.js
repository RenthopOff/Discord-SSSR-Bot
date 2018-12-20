const Discord = module.require('discord.js');


module.exports.run = async (bot, message, args) => {

    let user = message.mentions.users.first() || message.author;
    let embed = new Discord.RichEmbed()
        .setAuthor(user.username + '#' + user.discriminator, user.displayAvatarURL)
        .setDescription(`${user}`)
        .setColor(`RANDOM`)
        .setThumbnail(`${user.displayAvatarURL}`)
        .addField('Cтатус:', user.presence.status, true)
        .addField("ТЕГ", user.discrim, true)
        .addField("Играет в:", `${user.presence.game ? user.presence.game.name: "Тупо флексит"}`, true)
        .setFooter(`ID: ${user.id}`)
        .setTimestamp();

    message.channel.send({ embed: embed });
    return;
}

module.exports.help = {
    name: 'userinfo'
}

