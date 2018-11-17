const Discord = require('discord.js');

module.exports.run = async (bot, message, args, ops) => {
	if(!message.member.hasPermission("ADMINISTRATOR")){
		if (!message.member.roles.find("name", "@everyone")) {
			message.channel.send('Недостаточно прав у вас.');
			return;
		}
		
    if (!args[0]) return message.channel.send('Proper usage: a.poll <вопрос>');

    const embed = new Discord.RichEmbed()
        .setColor("#ffffff") //To change color do .setcolor("#fffff")
        .setFooter('Реакции для голосование')
        .setDescription(args.join(' '))
        .setTitle(`Голосование создал: ${message.author.username}`);

    let msg = await message.channel.send(embed)
        .then(function (msg) {
            msg.react("❎");
            msg.react("✅"); // You can only add two reacts
            message.delete({timeout: 1000});
            }).catch(function(error) {
            console.log(error);
        });
};

exports.help = {
  name:"poll"
}
