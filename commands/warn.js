const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

  //!warn @daeshan <reason>
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("No can do pal!");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply("Couldn't find them yo");
  if(wUser.hasPermission("MANAGE_MESSAGES")) return message.reply("They waaaay too kewl");
  let reason = args.join(" ").slice(22);

  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };

  warns[wUser.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });

  let warnEmbed = new Discord.RichEmbed()
  .setDescription("Предупреждения")
  .setFooter(message.guild.owner.user.tag, message.guild.owner.user.avatarURL)
  .setTimestamp()
  .setAuthor(message.author.username)
  .setColor("#a52019")
  .addField("**Выдан кому**", `<@${wUser.id}>`)
  .addField("**Где был выдал**", message.channel)
  .addField("**Кол-во Предупреждения**", warns[wUser.id].warns)
  .addField("**Причина**", reason);

  let warnchannel = message.guild.channels.find(`name`, "⚙report-list");
  if(!warnchannel) return message.reply("Не нашел канал!");

  warnchannel.send(warnEmbed);

  if(warns[wUser.id].warns == 2){
    let muterole = message.guild.roles.find(`name`, "muted");
    if(!muterole) return message.reply("Оу щит,данной роли не существует!");

    let mutetime = "5m";
    await(wUser.addRole(muterole.id));
    message.channel.send(`<@${wUser.id}> был выдан мут за нарушение 5 правил.`);

    setTimeout(function(){
      wUser.removeRole(muterole.id)
      message.reply(`<@${wUser.id}> был размучен.`)
    }, ms(mutetime))
  }

}

module.exports.help = {
  name: "warn"
}
