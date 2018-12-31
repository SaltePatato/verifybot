const Base = require("../../base/Command.js");

module.exports = class EightBall extends Base {
    constructor(client) {
        super(client, {
            name: "8ball",
            description: "Ask the magic 8ball a question.",
            usage: "<question>",
            category: "fun",
            permLevel: 0 
        });
    }

    run(message, args) {
        // Ignore if sent in dfchat
        if (message.channel.name === "dfchat") return super.error("You can't use that here!");
        // Error if message does not end in ?
        if (message.content.lastIndexOf("?") !== message.content.length - 1) return super.error("That doesn't look like a question to me!");
        //Responses
        const responses = [
            "Definitely.",
            "Most likely.",
            "Cannot predict now.",
            "You may rely on it.",
            "Maybe, maybe not.",
            "It's a no from me.",
            "Absolutely not!",
            "Eeh, no."
        ];
        
        const question = args.join(" ");
        
        message.mentions.members.forEach(member => question.replace(new Regex(member.toString(), "g"), "@" + member.displayName));
        message.mentions.roles.forEach(role => question.replace(new Regex(role.toString(), "g"), "@" + role.name));

        // Send a response
        message.channel.send(`**__${message.member.displayName}__ asks: __${question}__**\n${responses[Math.floor(Math.random() * responses.length)]}`);
    }
};
