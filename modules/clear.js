const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Недостаточно прав на использование команды!')
  if(!args[0]) return message.channel.send("Упс...");
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`Убрано ${args[0]} сообщений.`).then(msg => msg.delete(3000));
  });
}

module.exports.help = {
  name: "clear"
}
