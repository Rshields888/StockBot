const Discord = require('discord.js');
const google = require("boxhock_google-finance-data");


module.exports = {
    name: 'stock',
    description: "sends stock ticker info",
    execute(message, args){
        

        google.getSymbol(args[0]).then(data => {  
              message.channel.send(JSON.stringify(data.symbol, null, 2))
                .catch(err => message.channel.send("Invalid Stock Symbol"));
        
            const embed = new Discord.MessageEmbed()
                .setAuthor(data.companyName)
                .setColor(0x11cd00)
                .setDescription(`**Current Price: $${data.ticker}**`)
                .addField('Open', `$${data.open}`, true)
                .addField('High', `$${data.high}`, true)
                .addField('Low', `$${data.low}`, true)
                .addField('52 Week High',`$${data.high52week}`, true)
                .addField('52 Week Low',`$${data.low52week}`, true)
                .addField('Marketcap',`$${data.marketCap}`, true)
                .addField('PE Ratio',data.peRatio, true)
                .addField('Yield', data.yield, true)
                
        message.channel.send({embed}); 
       

       
        });
    }
}
        

    

