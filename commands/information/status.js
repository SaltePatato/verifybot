const { get } = require("snekfetch");
const { MessageEmbed } = require("discord.js");
const Base = require("../../base/Command.js");

module.exports = class Status extends Base {
    constructor(client) {
        super(client, {
            name: "status",
            description: "Shows what's up with VerifyBot at the moment.",
            category: "information",
            permLevel: 0,
        });
    }

    async run(message) {
        // Ignore if sent in dfchat
        if (message.channel.name === "dfchat") return super.error("You can't use that here!");
        
        // Respond with the cat
        message.channel.send("[**Status**]");
        var text = await get("https://verifybot.tomoli.cf/status.php?verifybot");
        var obj = JSON.parse(text)
        if(obj.type === "embed") {
        message.channel.send({embed: {
          color: 3447003,
          description: obj.text
        }});
        }
        if(obj.type = "text") {
        message.channel.send(obj.text);
        }
    }
};
