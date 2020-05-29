const Command = require("../../base/Command.js");

module.exports = class IP extends Command {
    constructor(client) {
        super(client, {
            name: "ips",
            description: "Server IP addresses.",
            category: "information",
            permLevel: 0,
            clean: false,
            aliases: ["ip"]
        });
    }

    run(message) {
         message.channel.send("**__DiamondFire IP Addresses__**\n**Main IP:** `mcdiamondfire.com`\n\n**Node IPs:**\n`node1.mcdiamondfire.com`, `node2.mcdiamondfire.com`, `node3.mcdiamondfire.com`, `node4.mcdiamondfire.com`\n`beta.mcdiamondfire.com` (Overlord exclusive)");
    }
};
