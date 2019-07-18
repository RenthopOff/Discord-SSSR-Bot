const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");
module.exports.run = async (bot,message,args) => {
    try{

    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("У вас нет прав");
    let rUser = bot.rUser;
    if(!args[0]) return message.guild.channels.find("Вы не указали пользователя");
    if(!rUser) return message.guild.channels.find("Пользователь не найден");
    if(!profile[rUser.id])return message.guild.channels.find("Пользователя нету в profile.json");
    if(profile[rUser.id]<=0) return message.guild.channels.find("У пользователя 0 предупреждений");
    profile[rUser.id].warns--;
    fs.writeFile('./profile.json',JSON.stringify(profile),(err)=>{
        if(err) console.log(err);
    });
    let embed = new Discord.RichEmbed()
    .setDescription("Предупреждение")
    .setColor('#25ca85')
    .addField("Администратор",message.author.username)
    .addField("Снял предупреждение",`${rUser.user.username}`)
    .addField("Количество предупрежденией",`${profile[rUser.id].warns}/3`);

    message.channel.send(embed);
    }catch(err){
        console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
    }

};
module.exports.help = {
    name: "unwarn"
};
