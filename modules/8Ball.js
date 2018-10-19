const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  if(!args[2]) return message.reply("Задай полный вопрос!");
  let replies = ["Да.", "Нет", "Не знаю", "Задай еще раз вопрос", "50/50", "Согласен", "Да нее"];

  let result = Math.floor((Math.random() * replies.length))
  let question = args.slince(1).join(" ");

  let ballembed = new Discord.RichEmbed()
  .setAuthor(message.author.tag)
  .setColor("#FF9900")
  .addField("Вопрос", question)
  .addField("Ответ", replies[result])

  message.channel.send(ballembed)

}

module.exports.help = {
  name: "ball"
}
