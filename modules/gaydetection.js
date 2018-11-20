const Discord = require("discord.js");

module.exports.run = async (bot, message, args, prefix) => {

    let gay = Math.round(Math.random() * 100);

    let gayembed = new Discord.RichEmbed()
        .setColor("#f442d4")
        .setTitle(`:gay_pride_flag: **Я предполагаю что ${message.author.username} на ${gay}% гей!** :gay_pride_flag:`);
    return message.channel.send(gayembed);
};

module.exports.help = {
    name: "gay"
};
