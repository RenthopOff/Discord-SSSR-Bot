const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(message.member.hasPermission("ADMINISTRATOR")) {
      let rulesembed = new Discord.RichEmbed()
      .setColor("8000ff")
      .addFiled("**Общение**", `1.1 Запрещён спам, флуд, злоупотребление капсом в чате кроме \n1.2 Запрещено ставить провокационные и оскорбительные никнеймы.\n1.3 Запрещено несоблюдение тематики чата.\n 1.4 Трансляция музыки/видео через микрофон.\n 1.5 Неадекватное поведение в текстовом или голосовом чате в любых проявлениях.`)
      .setDescription(args.join(" "));

      message.channel.send(rulesembed)
    }

}

module.exports.help = {
  name:"rules"
}
