const Base = require("../../base/Command.js");

module.exports = class Random extends Base {
    constructor(client) {
        super(client, {
            name: "random",
            description: "Generates a random number.",
            usage: "<min> <max>",
            category: "fun",
            permLevel: 0 
        });
    }

    async run(message, args) {
        // Ignore if sent in dfchat
        if (message.channel.name === "dfchat") return super.error("You can't use that here!");
        
        let numberOne = args[0]
        let numberTwo = args[1]
        let rnd = Math.floor(Math.random() * numberTwo) + numberOne
    }

    pause() {
        return new rnd(r => setTimeout(r, 5000));
    }
};
