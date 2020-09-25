const Discord = require('discord.js');
const client = new Discord.Client();
const google = require("boxhock_google-finance-data");

const prefix = '$';

const fs = require('fs');

client.commands = new Discord.Collection();


const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}
client.once('ready', () => {console.log('StonkBot is online!') });
client.on('message', message => { 
     if(!message.content.startsWith(prefix) || message.author.bot) 
       return;

     const args = message.content.slice(prefix.length).split(" ");
     const command = args.shift().toLowerCase();
     
     if (command === 'stock')
     {
         client.commands.get('stock').execute(message, args);
         
     }
     
});



client.login('NzU4NTUzODU1OTgxMzg3ODA2.X2woVA.nuY3qwkuJ2RpWcD3f-pk4E4-vE0');