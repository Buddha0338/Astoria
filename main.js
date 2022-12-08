const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '/';
const fs = require('fs');

/*
const gp3File = fs.readFileSync('/path/to/your/file.gp3', 'utf8');
const channel = client.channels.cache.get('1027391744251285514');
channel.send(gp3File);
*/

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Astaria is online!');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'support'){
        client.commands.get('support').execute(message, args);
    } 
    else if (command == 'clear'){
        client.commands.get('clear').execute(message, args);
    }
    else if (command == 'ai'){
        client.commands.get('ai').execute(message, args);

    }
})

client.login('MTAyNzM4Mzk4OTcyMTM3MDc2Ng.GK_5E7.j2VA_FVmMfGCK9ENY9egyGJ1a8bJGaCnZ_SyWQ');





