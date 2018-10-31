const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const verificationLevel = message.guild.verificationLevel;
  const verificationLevels = ['Нету', 'Легкий', 'Средний', 'Высокий', 'Высочайший']

  let serverembed = new Discord.RichEmbed()
  .setTitle("Информация")
  .setColor("#240935")
  .setFooter(message.guild.owner.user.tag, message.guild.owner.user.avatarURL)
  .setTimestamp()
  .setThumbnail(message.guild.iconURL)
  .addField('**Название**', `${message.guild.name}`, true)
  .addField('**Владелец**', message.guild.owner.user.tag, true)
  .addField('**ID**', message.guild.id, true)
  .addField('**Кол-во Каналов**', `${message.guild.channels.filter(channel => channel.type === 'voice').size} *голосовых*/ ${message.guild.channels.filter(channel => channel.type === 'text').size} *текстовых*`, true)
  .addField("**Дата создания cервера**", "06.11.2017 17:43", true)
  .addField("**Участников**", `${message.guild.members.filter(member => member.user.bot).size} *ботов* / ${message.guild.memberCount} *участников*`, true)
  .addField("**Регион**", message.guild.region, true)
  .addField("**Уровень Проверки**", `${verificationLevels[message.guild.verificationLevel]}`, true)
  .addField("**Кол-во Ролей**", message.guild.roles.size, true);
  return message.channel.send(serverembed);
}


module.exports.help = {
  name: "serverinfo"
}
