module.exports = {
    name: 'support',
    description: "This command leads to the support Discord",
    execute(message, args){
        message.channel.send('Get help at the support server https://discord.gg/jUYjFpxp');
    }
}
