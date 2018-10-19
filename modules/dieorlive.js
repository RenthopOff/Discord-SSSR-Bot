const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    randomNumber = Math.floor(Math.random() * (4 - 1) + 1);
    console.log(randomNumber);
    if(randomNumber==2){
        message.reply("СМЭРТЬ! 💀");
    }else{
        message.reply("Выжил! 😃");
    }
}

module.exports.help = {
  name:"roulette"
}
