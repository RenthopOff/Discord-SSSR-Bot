const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    let role = message.mentions.roles.first() || message.guild.roles.get(args[0]) || message.guild.roles.find(role => role.name === args[0]);

    if (!role) role = message.member.highestRole;

    let roleembed = new Discord.RichEmbed()
        .setColor(role.hexColor)
        .setTitle(`Роль: ${role.name}`)
        .addField('Владельцев Ролей', role.members.size, true)
        .addField('Цвет', role.hexColor, true)
        .addField('Когда создана', role.createdAt.toDateString(), true)
        .addField('ID', role.id, true);

        message.channel.send(roleembed);
}

module.exports.help = {
  name: "roleinfo"
}
