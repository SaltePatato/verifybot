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
            "http://random.cat/i/068_-_6vuLGR1.gif",
            "http://random.cat/i/uUi0a.jpg",
            "http://random.cat/i/mFC8oVK.jpg",
            "http://random.cat/i/YTgRq.jpg",
            "http://random.cat/i/o7pjQLT.jpg",
            "http://random.cat/i/iVpaM.jpg",
            "http://random.cat/i/249053_10151615620946211_1427883182_n.jpg",
            "http://random.cat/i/Nmn7a.jpg",
            "http://random.cat/i/VjIboF2.jpg",
            "http://random.cat/i/img_20161017_122411.jpg",
            "http://random.cat/i/GQXOl.png",
            "http://random.cat/i/t3nMb.jpg"
        ];

        // Send a response
        message.channel.send(`[**Cat**] ${meowStorage[Math.floor(Math.random() * meowStorage.length)]}`);
    }
};
