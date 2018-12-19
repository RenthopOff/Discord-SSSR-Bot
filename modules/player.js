const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

  let member = message.guild.member(message.mentions.users.first() || message.guild.member.get(args[0]))
  let argsUser = member.user || message.author

  let status = {
    online: 'В сети',
    idle: 'Нет на месте',
    dnd: 'Не беспокоить',
    offline: 'Не в сети'
  }
  let game
  if(!argsUser.presence.game) game = `Имеет статус **${statuses[argsUser.presence.status]}**`
  else if (argsUser.presence.game.type == 0) game = `Играет в **${argsUser.presence.game.name}**`
  else if (argsUser.presence.game.type == 1) game = `Стримит **${argsUser.presence.game.name}**`
  else if (argsUser.presence.game.type == 2) game = `Cлушает **${argsUser.presence.game.name}**`
  else if (argsUser.presence.game.type == 3) game = `Смотрит **${argsUser.presence.game.name}**`

  let day = 1000 * 60 * 60 * 24
  let date1 = new Date(message.createdTimestamp)
  let date2 = new Date(argsUser.createdTimestamp)
  let date3 = new Date(message.guild.member(argsUser).joinedTimestamp)

  const embed = new Discord.RichEmbed()
  .setTitle(argsUser.username)
  .setDescription(game)
  .addField('Роли', message.guild.member(argsUser).roles.map(role => role.name).join(', ') || 'не имеет')
  .setColor(message.guild.member(argsUser).displayHexColor)
  .setTimestamp()
  .setThumbnail(argsUser.avatarURL)
  .setFooter(`ID: ${argsUser.id}`)

  await message.channel.send(embed)

}
module.exports.help = {
  name: "playerinfo"
}
