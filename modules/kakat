const Discord = require('discord.js')

exports.run = (bot, message, args, tools) => {

    var images = ["https://i.ytimg.com/vi/LRIrnhmIMVs/maxresdefault.jpg", "https://pbs.twimg.com/media/Dzwi4F3XgAA_pFu.jpg:large" ];
    var rand = Math.floor(Math.random() * images.length);
    var randomImage = images[rand];

    const patEmb = new Discord.RichEmbed()
        .setColor(0xA901DB)
        .setImage(randomImage);
    if (!args[0]) {
        message.channel.send(`<@${message.author.id}> вот так`, {
        });
        return;
    }

    if (!message.mentions.users.first()) return message.channel.send(`выбери кого-нибудь!`).then(msg => {
        msg.delete(3000)
    });
    message.channel.send(`<@${message.author.id}> вот так вот ${args[0]}`, {
        embed: patEmb
    });


}

module.exports.help = {
    name: "kakat"
}
