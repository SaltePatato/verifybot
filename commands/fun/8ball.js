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
        if (message.content.indexOf("?") !== message.content.length - 1) return super.error("That doesn't look like a question to me!");
        //Responses
        const responses = [
            "Yeah, why not?",
            "Definitely.",
            "Most likely.",
            "I'd say yes.",
            "My sources say yes."
            "Cannot predict now.",
            "I can't tell",
            "I don't know what to answer...",
            "Try asking again later...",
            "I'm not sure... Try asking again.",
            "You may rely on it.",
            "Maybe, maybe not.",
            "Yes! Wait... No.",
            "It's a no from me.",
            "Absolutely not!",
            "Eeh, no.",
            "Yeah... No.",
            "Sounds like a no to me."
        ];

        // Send a response
        message.channel.send(`**__${message.member.displayName}__ asks: __${args.join(" ")}__**\n${responses[Math.floor(Math.random() * responses.length)]}`);
    }
};
