const Discord = require('discord.js');

module.exports.run = async (bot, message, args, ops) => {

	if (!message.member.roles.find("name", "👑 Маршал Российской Федерации 👑")) {
		message.channel.send('Invalid permissions.');
		return;
	}


    if (!args[0]) return message.channel.send('Proper usage: a.poll <question>');
    const embed = new Discord.RichEmbed()
        .setColor("#560319") 
        .setFooter('Реакции для голосавания')
        .setDescription(args.join(' '))
        .setTitle(`Голосавние создал ${message.author.username}`);

    let msg = await message.channel.send(embed)
        .then(function (msg) {
            msg.react("❎");
            msg.react("✅"); 
            message.delete({timeout: 1000});
            }).catch(function(error) {
            console.log(error);
        });
};

exports.help = {
  name:"poll"
}
