const Discord = requier("discord.js")
exports.run = async(bot, message, args) =>


let memberToUse = message.mentions.members.first() || message.author

let playerembed = new Discord.RichEmbed()
.setFooter('ID :', memberToUse.id)
.setAuthor(memberToUse.user.tag, memberToUse.user.displayAvatar)
.setThumbnail(memberToUse.user.displayAvatar)
.addField('Статус', memberToUse.presence.status, true)
.addField('Играет в: ', 'none', true)
.addField('Роли', memberToUse.roles.map(r => `${r}`).join(' '))
.setTimestamp();

message.channel.send(playerembed);

}
exports.help = {
  name: "playerinfo"
}

