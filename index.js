const Discord = require('discord.js');
const botconfig = require('./botconfig.json');
const config = require('./config.json');
const Languages = require('./Languages.json');
const warnings = require('./warnings.json');
const mongoose = require('mongoose');
const prefix = botconfig.prefix;
const YouTube = require('simple-youtube-api');
const prefixes = require('./prefixes.json');
const Attachment = require('discord.js');
const RichEmbed = require('discord.js');
const fs = require('fs');
const ytdl = require('ytdl-core');
var server = {};
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
bot.modules - new Discord.Collection();
bot.nsfw = new Discord.Collection();
bot.images = new Discord.Collection();
let purple = botconfig.purple;
let red = botconfig.red;
let orange = botconfig.orange;
let green = botconfig.green;
let black = botconfig.black;
let grey = botconfig.grey;
let cooldown = new Set();
let cdseconds = 5;

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);

    });

});
fs.readdir("./nsfw/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./nsfw/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);

    });

});
fs.readdir("./modules/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./modules/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);

    });

});
bot.on("ready", async () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);

  bot.user.setActivity("Use *help ", {type: "PLAYING"});
});
bot.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'welcome');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':bust_in_silhouette: | Имя : ', `${member}`)
        .addField(':id:', "**[" + `${member.id}` + "]**")
        .addField(':family_mwgb: | Теперь ты житель нашего государства', '*Будь как дома*')
        .addField("Имя", `<@` + `${member.id}` + `>`, true)
        .addField('Сервер', `${member.guild.name}`, true )
        .setFooter(`**${member.guild.name}**`)
        .setTimestamp()

        channel.sendEmbed(embed);
});

bot.on('guildMemberAdd', member => {

    console.log(`${member}`, "has joined" + `${member.guild.name}`)

});

bot.on('guildMemberRemove', member => {
    let channel = member.guild.channels.find('name', 'welcome');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField('Name:', `${member}`)
        .addField('Покинул наши замечательные земли!', ':weary:')
        .addField('Сейчас на сервере осталось', `${member.guild.memberCount}` + " учатсники")
        .setFooter(`**${member.guild.name}`)
        .setTimestamp()

        channel.sendEmbed(embed);
});
bot.on("message", async message => {
  if(message.content.startsWith("flex?")) {
    message.channel.send({files:["./images/flex.jpg"]});
  }
});
bot.on("message", async message => {
  if(message.content.startsWith("мопс?")) {
    message.channel.send({files:["./images/mops.jpg"]});
  }
});
bot.on("message", async message => {
  if(message.content.startsWith("макс?")) {
    message.channel.send({files:["./images/maks.jpeg"]});
  }
});
bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let sender = message.author;
  let msg = message.content.toUpperCase();
  let commandfile = bot.commands.get(cmd.slice(prefix.length));

  if(commandfile) commandfile.run(bot,message,args);

  if(cmd === `${prefix}botinfo`){

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("**Version bot 1.5**")
    .setColor("#7f4870")
    .setThumbnail(bicon)
    .addField("**Cоздатель**", message.guild.owner)
    .addField("Имя Бота", bot.user.username)
    .addField("Создан", "**27.09.2018 14:19**", true);

    return message.channel.send(botembed);
  }

  if(cmd === `${prefix}serverinfo`){
    const verificationLevel = message.guild.verificationLevel;
    const verificationLevels = ['Нету', 'Легкий', 'Средний', 'Высокий', 'Высочайший']

    let serverembed = new Discord.RichEmbed()
    .setTitle("Информация")
    .setColor("#240935")
    .setFooter(message.guild.owner.user.tag, message.guild.owner.user.avatarURL)
    .setTimestamp()
    .setThumbnail(message.guild.iconURL)
    .addField('**Название**', `${message.guild.name}`, true)
    .addField('**Владелец**', message.guild.owner.user.tag, true)
    .addField('**ID**', message.guild.id, true)
    .addField('**Кол-во Каналов**', `${message.guild.channels.filter(channel => channel.type === 'voice').size} *голосовых*/ ${message.guild.channels.filter(channel => channel.type === 'text').size} *текстовых*`, true)
    .addField("**Дата создания cервера**", "06.11.2017 17:43", true)
    .addField("**Участников**", `${message.guild.members.filter(member => member.user.bot).size} *ботов* / ${message.guild.memberCount} *участников*`, true)
    .addField("**Регион**", message.guild.region, true)
    .addField("**Уровень Проверки**", `${verificationLevels[message.guild.verificationLevel]}`, true)
    .addField("**Кол-во Ролей**", message.guild.roles.size, true);
    return message.channel.send(serverembed);
  }
});
bot.on("message", async message => {
  if(cooldown.has(message.author.id)){
    message.delete();
    return message.reply("Жди 5 секунд!.");
  }
  if(!message.member.hasPermission("ADMINISTRATOR")){
    cooldown.add(message.author.id);
    message.delete();

    setTimeout(() => {
      cooldown.delete(message.author.id)
    }, cdseconds * 1000)
  }
});

bot.login(config.token);
