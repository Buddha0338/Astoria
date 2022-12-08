const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: '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'
             
});
const openai = new OpenAIApi(configuration);
var messagesPromt = " "

module.exports = {
    name: 'ai',
    description: "This is the ai response",
    execute(message, args){
    console.log("Message  " + args.join(" "))
    message.channel.messages.fetch({limit:100}).then((messages) => {
      console.log("Message from channel: " + messages)
      messages.forEach(element => {
        messagesPromt = messagesPromt + " " + element.content
      });
      console.log("Message prompt " + messagesPromt)
    })
    console.log(messagesPromt)
   
const response = openai.createCompletion({
  model: "text-davinci-002",
  prompt: messagesPromt + "\n\nHuman:" + args.join(" ") + "\nAI:",
  temperature: 0.9,
  max_tokens: 5000,
  top_p: 1,
  frequency_penalty: 0.6,
  presence_penalty: 1.0,
  stop: [" Human:", " Ai:"],
});
response.then(response => message.channel.send(response.data.choices[0].text))
;
}}

