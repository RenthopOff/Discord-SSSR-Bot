const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //!addrole @andrew Dog Person
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Недостаточно прав на использование команды!");
  if(args[0] == "help"){
    message.reply("Usage: !addrole <имя> <роль>");
    return;
  }
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Не моуг найти гражданина");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Выбери рроль!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Не могу выдать ее!");

  if(rMember.roles.has(gRole.id)) return message.reply("❌ он ее уже имеет.");
  await(rMember.addRole(gRole.id));

  try{
    await rMember.send(`Поздравляю ты выдал роль уже: ${gRole.name}`)
  }catch(e){
    console.log(e.stack);
    message.channel.send(`Congrats to <@${rMember.id}>, была выдана роль ${gRole.name}.`)
  }
}

module.exports.help = {
  name: "addrole"
}
