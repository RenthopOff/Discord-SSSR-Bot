const Discord = require('discord.js');
const botconfig = require('../botconfig.json');

module.exports.run = async (bot, message, args) => {

  let helpembed = new Discord.RichEmbed()
  .setDescription("**:gear:Меню Помощи:gear:**")
  .setColor("#320b35")
  .addField("**Стандартные (1)**", "*botinfo*, *serverinfo*", true)
  .addField("**Стандартные(2)**", "*rwallpaper*, *roulette*")
  .addField("**NSFW(+18)**", "*boobs*, *cum*, *pussy*, *hentai*, *feet*", true)
  .setFooter(message.guild.owner.user.tag, message.guild.owner.user.avatarURL)
  .setTimestamp();

  message.channel.send(helpembed);
  if(message.member.hasPermission("MANAGE_MESSAGES")){
    let modembed = new Discord.RichEmbed()
    .setDescription("**Меню помощи Администрации**")
    .setColor("#320b35")
    .addField("**Админ Команды**", "*report*, *say*, *clear*, *ban*, *tmute*, *warn*, *kick*");

    try{
      await message.author.send(modembed);
    }catch(e){
      message.reply("**Ты не админ что бы получать этот список команд!**");
    }
  }



}

module.exports.help = {
  name: "HELP"
}
