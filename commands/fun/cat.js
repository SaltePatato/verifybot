const Base = require("../../base/Command.js");

module.exports = class Meow extends Base {
    constructor(client) {
        super(client, {
            name: "cat",
            description: "Sends a random cat image.",
            usage: "<cat>",
            category: "fun",
            permLevel: 0 
        });
    }

    run(message, args) {
        // Ignore if sent in dfchat
        if (message.channel.name === "dfchat") return super.error("You can't use that here!");

        const meowStorage = [
            "Cat 1.",
            "Cat 2."
        ];

        // Send a response
        message.channel.send(`[**Cat**] ${meowStorage[Math.floor(Math.random() * meowStorage.length)]}`);
    }
};
