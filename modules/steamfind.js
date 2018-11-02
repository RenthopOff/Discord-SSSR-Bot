const Discord = require('discord.js')

exports.run = (client, message, args) => {
    let game = args[0]
    let steampng = "https://cdn.discordapp.com/attachments/458004691402489856/470344660364034049/steam.png"
    if (!game) return message.reply('К примеру можно взять: `*steamstore portal 2`')
    provider.search(game).then(result => {
    provider.detail(result[0].id, "russia", "ru").then(results => {
        console.log(results)
    const embed = new Discord.RichEmbed()
    .setAuthor('Steam Store', steampng)
  .setColor("#36393F")
    .setTitle(result[0].name)
    .addField(`ID игры`, result[0].id)
    .setThumbnail(results.otherData.imageUrl)
    .addField('Категория', results.genres)
    .addField('Цена', `Обычная **${results.priceData.initialPrice}** рублей
Со скидкой цена **${results.priceData.finalPrice}** рублей`, true)
    .addField('ОС', results.otherData.platforms, true)
    .addField('Оценка игры', results.otherData.metacriticScore, true)
    .addField('Характеристики игры', results.otherData.features, true)
    .addField('Создатель', results.otherData.developer, true)
  .setColor("#36393F")
    message.channel.send(embed).catch(e => {
        console.log(e)
        message.reply('Hata Olustu Yada `' + game + '` Adlı Oyun Bulunamadı')
    })
})
})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'steamstore',
  description: 'steamstore',
  usage: 'steamstore'
};
