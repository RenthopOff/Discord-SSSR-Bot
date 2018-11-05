const Discord = require('discord.js')

exports.run = (bot, message, args, tools) => {

    var images = ["https://i.imgur.com/3aX4Qq2.gif", "https://i.imgur.com/eKcWCgS.gif", "https://i.imgur.com/MzAjNdv.gif", "https://i.imgur.com/aypxaOB.gif", "https://i.imgur.com/JZLaOA2.gif", "https://i.imgur.com/2QwD7M0.gif", "https://i.imgur.com/JnheKgG.gif", "https://i.imgur.com/AGfaBJD.gif", "https://i.imgur.com/BUJZGzg.gif", "https://i.imgur.com/w1AmQF7.gif", "https://i.imgur.com/PKOsDVW.gif", ];
    var rand = Math.floor(Math.random() * images.length);
    var randomImage = images[rand];

    const patEmb = new Discord.RichEmbed()
        .setColor(0xA901DB)
        .setImage(randomImage);
    if (!args[0]) {
        message.channel.send(`<@${message.author.id}> выбери кого-нибудь что бы поцеловать`, {
        });
        return;
    }

    if (!message.mentions.users.first()) return message.channel.send(`выбери кого-нибудь!`).then(msg => {
        msg.delete(3000)
    });
    message.channel.send(`<@${message.author.id}> поцеловал ${args[0]}`, {
        embed: patEmb
    });


}

module.exports.help = {
    name: "kiss"
}

