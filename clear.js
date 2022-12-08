module.exports = {
    name: 'clear',
    description: "This command clears the last designated amount of messages",
    execute(message, args) {
        if(!args[0]) return message.reply("Enter number of messages to clear.");
        if(isNaN(args[0])) return message.reply("Enter a real numer.");
        if(args[0] > 100) return message.reply("You cannot delete more than 100 messages.");
        if(args[0] < 1) return message.reply("You must delete at least 1 message.");
        message.channel.messages.fetch({limit: args[0]}).then(messages =>{
        message.channel.bulkDelete(messages);
        });
    }
}
