const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //!addrole @andrew Dog Person
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Нит.");
  if(args[0] == "help"){
    message.reply("Usage: !addrole <имя> <роль>");
    return;
  }
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Не моуг найти гражданина");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Выбери рроль!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Не могу найти ее.");

  if(rMember.roles.has(gRole.id)) return message.reply("❌ он ее уже имеет.");
  await(rMember.addRole(gRole.id));

  try{
    await rMember.send(`Congrats, you have been given the role ${gRole.name}`)
  }catch(e){
    console.log(e.stack);
    message.channel.send(`Congrats to <@${rMember.id}>, была выдана роль ${gRole.name}.`)
  }
}

module.exports.help = {
  name: "addrole"
}
