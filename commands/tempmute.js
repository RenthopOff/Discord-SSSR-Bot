const Discord = require("discord.js");
const ms = require("ms");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {


  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("no no no");
  if(args[0] == "help"){
    message.reply("Usage: !tempmute <user> <1s/m/h/d> <reason>");
    return;
  }
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Я его не нашел в базе данных!");
  if(tomute.hasPermission("MANAGE_GUILD")) return message.reply("No no no");
  let reason = args.slice(2).join(" ");
  if(!reason) return message.reply("Пожалуйста выдай причину мута.");

  let muterole = message.guild.roles.find(`name`, "muted");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("ты не выставил время!");

  message.delete().catch(O_o=>{});

  try{
    await tomute.send(`Привет! Тебе был выдан мут на ${mutetime}. Прости!`)
 }catch(e){
   message.channel.send(`A user has been muted... but their DMs are locked. They will be muted for ${mutetime}`)
 }

 let muteembed = new Discord.RichEmbed()
 .setDescription(`Mute executed by ${message.author}`)
 .setColor("#00edff")
 .addField("Кому выдал мут", tomute)
 .addField("В каком канале", message.channel)
 .addField("Время мута", mutetime)
 .addField("Причина", reason);

 let incidentschannel = message.guild.channels.find(`name`, "logs");
 if(!incidentschannel) return message.reply("Создайте канал для логов мута!");
 incidentschannel.send(muteembed);

 await(tomute.addRole(muterole.id));

 setTimeout(function(){
   tomute.removeRole(muterole.id);
   message.channel.send(`<@${tomute.id}> размучен!`);
 }, ms(mutetime));


//end of module
}

module.exports.help = {
 name: "mute"
}
