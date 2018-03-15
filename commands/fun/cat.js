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
        //Cats from the internet
         //Images (PNG/JPG)
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
            "http://random.cat/i/t3nMb.jpg",
            "http://random.cat/i/iVpaM.jpg",
            "http://random.cat/i/riGL8.jpg",
            "http://random.cat/i/uWjbg.jpg",
            "https://purr.objects-us-west-1.dream.io/i/img_3499.jpg",
         //GIFs
            "http://random.cat/i/068_-_6vuLGR1.gif",
            "http://random.cat/i/054_-_o8Oe3pb.gif",
         //Cats from my discord
            "https://cdn.discordapp.com/attachments/423571873079492619/423573937251680258/9k.png",
            "https://cdn.discordapp.com/attachments/423571873079492619/423613906859196419/KILLER_CATZ.png",
            "https://cdn.discordapp.com/attachments/423571873079492619/423613942447734795/cat_3.jpg",
            "https://cdn.discordapp.com/attachments/423571873079492619/423613885711384576/hungry_cat.jpg"
        ];

        // Send a response
        message.channel.send(`[**Cat**] ${meowStorage[Math.floor(Math.random() * meowStorage.length)]}`);
    }
};
