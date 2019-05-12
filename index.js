const Discord = require('discord.js');
const botconfig = require('./botconfig.json');
const Languages = require('./Languages.json');
const ms = require("ms");
const prefix = botconfig.prefix;
const Attachment = require('discord.js');
const RichEmbed = require('discord.js');
const moment = require('moment');
const superagent = require('superagent');
const fs = require('fs');
const ytdl = require('ytdl-core');
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
bot.modules - new Discord.Collection();
bot.nsfw = new Discord.Collection();
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
bot.on('ready', () => {
    console.log(`${bot.user.username} online`);
    bot.user.setPresence({status: 'online', game:{name: 'My version is 3.0', type: 0}})
});
bot.on('channelCreate', async channel => {

  console.log(`${channel.name} был создан.`);

if (channel.type != 'text') return;
  let sChannel = channel.guild.channels.find('name', 'name channel here');
  sChannel.send(`Текстовый ${channel} был создан на сервере`);

});
bot.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', '👋welcome');
    let role = member.guild.roles.find('name', '👨 Иммигрант 👨');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':bust_in_silhouette: | Имя : ', `${member}`)
        .addField(':id:', "**[" + `${member.id}` + "]**")
        .addField(':family_mwgb: | Теперь ты житель нашего государства', '*Будь как дома*')
        .addField("Имя", `<@` + `${member.id}` + `>`, true)
        .setFooter(`**${member.guild.name}**`)
        .setTimestamp()
        
        member.addRole(role);
  
        channel.sendEmbed(embed);
});

bot.on('guildMemberAdd', member => {

    console.log(`${member}`, "has joined" + `${member.guild.name}`)

});
bot.on('guildMemberRemove', member => {
    let channel = member.guild.channels.find('name', '👋welcome');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField('Имя:', `${member}`)
        .addField('Покинул наше государство и походу на всегда!', ':weary:')
        .addField('Сейчас на сервере осталось', `${member.guild.memberCount}` + " учатсников")
        .setFooter(`**${member.guild.name}`)
        .setTimestamp()

        channel.sendEmbed(embed);
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
    .setDescription("**Version bot 3.0**")
    .setColor("#7f4870")
    .setThumbnail(bicon)
    .addField("**Cоздатель**", message.guild.owner)
    .addField("Имя Бота", bot.user.username)
    .addField("Создан", "**27.09.2018 14:19**", true);

    return message.channel.send(botembed);
  }
  if(cmd === `${prefix}serverinfo`){
    const verificationLevel = message.guild.verificationLevel;
    const verificationLevels = ['Отсутствует', 'Легкий', 'Средний', 'Высокий', 'Высочайший']

    let online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
    let day = message.guild.createdAt.getDate()
    let month = 1 + message.guild.createdAt.getMonth()
    let year = message.guild.createdAt.getFullYear()
    let serverembed = new Discord.RichEmbed()
    .setTitle("Информация")
    .setColor("#8000ff")
    .setFooter(`Сервер был создан • ${day}.${month}.${year}`)
    .setTimestamp()
    .setThumbnail(message.guild.iconURL)
    .addField('**Название**', `${message.guild.name}`, true)
    .addField('**Владелец**', message.guild.owner.user.tag, true)
    .addField('**ID**', message.guild.id, true)
    .addField('**Кол-во Каналов**', `${message.guild.channels.filter(channel => channel.type === 'voice').size} *голосовых*/ ${message.guild.channels.filter(channel => channel.type === 'text').size} *текстовых*`, true)
    .addField("**Кол-во EMOJI**", message.guild.emojis.size, true)
    .addField("**Участников**", `${message.guild.members.filter(member => member.user.bot).size} *ботов* / ${message.guild.memberCount} *участников*`, true)
    .addField("**Регион**", message.guild.region, true)
    .addField("Cейчас в онлайне", online.size, true)
    .addField("**Уровень Проверки**", `${verificationLevels[message.guild.verificationLevel]}`, true)
    .addField("**Кол-во Ролей**", message.guild.roles.size, true);
    return message.channel.send(serverembed);
  }
  if(cmd === `${prefix}kick`){
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Не могу найти пользователя!");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Недостаточно прав на использование команды!");
    if(kUser.hasPermission("ADMINISTRATOR")) return message.channel.send("*Он имеет привелегию выше твоей или он/она в команде Администрации*!");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("~Выгнан из государства~")
    .setColor("#8000ff")
    .addField("*Кому выдали*", `${kUser} with ID ${kUser.id}`)
    .addField("*Кем был выдан*", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("*Где был*", message.channel)
    .addField("*Время*", message.createdAt)
    .addField("*Причина*", kReason)
    .setFooter(message.guild.owner.user.tag, message.guild.owner.user.avatarURL)
    .setTimestamp();

    let kickChannel = message.guild.channels.find(`name`, '📥ссылки');
    if(!kickChannel) return message.channel.send("Где канал?");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);
  }
    if(cmd === `${prefix}help`){
      let prefix = botconfig.prefix;
      if (!message.content.startsWith(prefix)) return;
      let bicon = bot.user.displayAvatarURL;
      let botembed = new Discord.RichEmbed()
          .addField("Все команды Communistic Bot", `Prefix Bot: >`)
          .addField("Основные комнады", `**Server Info :** получить информацию об сервере\n<prefix><serverinfo> \n**User Info : **получить ифнормацию об гражданине\n<prefix><playerinfo> \n**Bot Info :** получить информацию об боте\n<prefix><botinfo> \n** gay :** узнать на сколько ты гей?!\n<prefix><gay> \n** kiss: ** поцеловать кого-нибудь \n<prefix><kiss><гражданин> \n** slap: ** шлепнуть кого нибудь \n<slap><гражданин> \n** roleinfo: ** узнать информацию об какой-ниюдуь роли.\n<prefix><roleinfo><название роли> \n** bugtracker:** если вдруг вы нанши баг в нашем боте,то можете описать его нам и мы его пофиксим.За просто использования этой команды выдатся мут и затем бан!`)
          .addField("NSFW комнады", `**boobs : ** получть немного хентайчика \n<prefix><boobs>\n**cum : ** получть немного хентайчика \n<prefix><cum> \n**feet :** получть немного хентайчика \n<prefix><feet> \n** hentai :** получть немного хентайчика\n<prefix><hentai> \n** pussy :** получть немного хентайчика \n<prefix><pussy> \n** randomhentai:** получть немного хентайчика \n<prefix><randomhentai> \n**solog:** получть немного хентайчика \n<prefix><solog> \n**wank:** получть немного хентайчика\n<prefix><wank>\n**tits:** получть немного хентайчика\n<prefix><tits>`)
          .setColor('#8000ff');

    return message.channel.send(botembed);
    }
});

bot.login(process.env.BOT_TOKEN);
