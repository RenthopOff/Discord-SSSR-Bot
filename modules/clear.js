const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
  if(!args[0]) return message.channel.send("Упс...");
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`Убрано ${args[0]} сообщений.`).then(msg => msg.delete(3000));
  });
}

module.exports.help = {
  name: "clear"
}
