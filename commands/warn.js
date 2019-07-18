const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");
module.exports.run = async (bot,message,args) => {
    try{
        
    var canal = message.guild.channels.find('name', '📥доносы')
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("У вас нет прав");
    let rUser = message.mentions.members.first() || message.guild.members.get(args[0]);
        
    if(!args[0]) return message("Вы не указали пользователя");
    if(!rUser) return message("Пользователь не найден");
    if(!profile[rUser.id])return message("Пользователя нету в базе данных");
        
    profile[rUser.id].warns++;
    fs.writeFile('./profile.json',JSON.stringify(profile),(err)=>{
        if(err) console.log(err);
        
    });
    if(profile[rUser.id].warns >=3){
        message.guild.member(rUser).kick("3/3 Предупреждений");
    }
    let embed = new Discord.RichEmbed()
    .setDescription("Предупреждение")
    .setColor('#e22216')
    .addField("Администратор",message.author.username)
    .addField("Выдал предупреждение",`${rUser.user.username}`)
    .addField("Количество предупрежденией",`${profile[rUser.id].warns}/3`);

    canal.send(embed);
    }catch(err){
        console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
    }

};
module.exports.help = {
    name: "warn"
};
