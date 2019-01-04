const Discord = require('discord.js');

module.exports.run = async (bot, message, args, ops) => {

	if (!message.member.roles.find("name", "👑 Маршал Российской Федерации 👑")) {
		message.channel.send('У вас недостаточно прав');
		return;
	}
  
      if (!args[0]) return message.channel.send('')
      const embed = new Discord.RichEmbed()
        .setColor("#560319") 
        .setFooter('Правила сервера')
        .addBlankField()
        .addFiled("1.1 Запрещён спам, флуд, злоупотребление капсом в чате кроме")
        .setTitle(`Голосавние создал ${message.author.username}`);
        
        return message.channel.send(embed);
};

module.exports.help = {
    name: "gay"
};
