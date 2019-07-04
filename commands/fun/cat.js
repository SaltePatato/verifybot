const { get } = require("snekfetch");
const { MessageEmbed } = require("discord.js");
const Base = require("../../base/Command.js");

module.exports = class Cat extends Base {
    constructor(client) {
        super(client, {
            name: "cat",
            description: "Shows a random cat.",
            usage: "",
            category: "fun",
            permLevel: 0,
            cooldown: 60000
        });
        
        Object.defineProperty(this, "cache", { value: [] });
        this.fillCache();
    }

    async run(message) {
        // Ignore if sent in dfchat
        if (message.channel.name === "dfchat") return super.error("You can't use that here!");
        
        // Send a cat
        const embed = new MessageEmbed()
            .setImage(this.cache.shift())
            .setColor(0x00AE86);
            .setFooter("Upload your cat with !upload, remembering to attach an image!")
        
        // Respond with the cat
        message.channel.send("[**Cat**]", embed);
        // Refile cache
        this.fillCache(1);
    }

    async fillCache(amount = 5) {
        for (let i = 0; i < amount; i++) {
            const { text } = await get("https://verifybot.tomoli.cf/cat.php");
            this.cache.push(`${text}`);
        }
    }
};
