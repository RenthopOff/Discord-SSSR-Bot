const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(message.member.hasPermission("ADMINISTRATOR")) {
      let rulesembed = new Discord.RichEmbed()
      .setColor("#8000ff")
      .addField("[**Чаты для Общения**]", `<#503219260278046721> - обещение о новых собратьев\n <#503230996057948180> - все правила нашего **Discord сервера**\n <#508952025640206338> - чат для просмотра изменения нашего сервера\n <#503212885925691422> - сам чатик для общения с другими людьми\n <#503601140936474624> - чат для спама командами нашего/другого бота\n <#503230895432663040> - чат для разминки своей руки (*главное что бы мама не увидела*)`)
      .addField("[**Чаты для Администрации**]", `<#503505995851628554> - чат для обовещения о *Репортах* на гражданинов\n <#503506099824099349> - чат для обовещения о *Банов*\n <#503441165123715082> - чат где сидят вся модерация и администрация сервера`);
      
      message.channel.send(rulesembed)
    }

}

module.exports.help = {
  name:"inf"
}


