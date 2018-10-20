const Discord = require('discord.js');
const botconfig = require('./botconfig.json');
const Languages = require('./Languages.json');
const warnings = require('./warnings.json');
const mongoose = require('mongoose');
const prefixes = require('./prefixes.json');
const Attachment = require('discord.js');
const RichEmbed = require('discord.js');
const fs = require('fs');
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
    let channel = member.guild.channels.find('name', '📊заход_и_уход');
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
    let channel = member.guild.channels.find('name', '📊заход_и_уход');
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

  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: botconfig.prefix
    };
  }
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
  if(!message.content.startsWith(prefix)) return;

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

bot.login(process.env.BOT_TOKEN);
