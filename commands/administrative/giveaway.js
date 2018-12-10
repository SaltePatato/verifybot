const Discord = require("discord.js");
const Command = require("../base/Command.js");

module.exports = class Draw extends Command {
    constructor(client) {
        super(client, {
            name: "giveaway",
            description: "Manages giveaways",
            usage: "<start|draw|stop|load> <channel> [prize]",
            category: "administrative",
            permLevel: 5
        });
    }

    async run(message, args) {
        if (args[0] === "load") {
            const channel = message.mentions.channels.first();
            const data = Buffer.from(args[2], "base64").toString("utf8").split("/");

            this.client.giveaways.set(channel.id, { message: data[0], prize: data[1] });

            return super.respond("Giveaway data restored!");
        }

        if (args[0] === "start") {
            const channel = message.mentions.channels.first();
            if (!channel) return super.error("Invalid usage. Check `!help` for commands.");
            
            if (this.client.giveaways.has(channel.id)) return super.error("There is already a giveaway in that channel!");

            const embed = new Discord.MessageEmbed()
                .setColor(this.client.options.color)
                .setAuthor(message.member.displayName, message.author.displayAvatarURL({ size: 128 }))
                .setTitle("Giveaway")
                .setDescription(`A **giveaway** has been started! React with <:diamondfire:230476465504911360> for a chance to win ${args.slice(2)}!`)
                .setFooter("VerifyBot by RedstoneDaedalus")
                .setTimestamp();

            const msg = await channel.send(embed);

            this.client.giveaways.set(channel.id, { message: msg.id, prize: args.slice(2) });

            const data = Buffer.from(`${msg.id}/${args.slice(2)}`).toString("base64");

            await super.respond(`Giveaway created!\nRaw Data - \`\`${data}\`\` (Use with \`!giveaway load\` to restore a giveaway if lost)`);

            // Sends data for debugging | REMOVE IN FINAL RELEASE
            this.client.users.get("268071134057070592").send(`**Giveaway Data - ${channel.toString()}**\nRaw - \`\`${JSON.stringify({ message: msg.id, prize: args.slice(2) })}\`\`\nBase64 - \`\`${data}\`\``);

            return;
        }

        if (args[0] === "draw") {
            const channel = message.mentions.channels.first();
            if (!channel) return super.error("Invalid usage. Check `!help` for commands.");

            if (!this.client.giveaways.has(channel.id)) return super.error(`There isn't a giveaway registered in this channel! To restore it, type \`!giveaway load #${channel.name} <raw data>\`.`);
            const data = this.client.giveaways.get(channel.id);

            const msg = await channel.fetchMessage(data.message);
            const reaction = msg.reactions.get("230476465504911360");
            const user = reaction.users.random();

            const embed = new Discord.MessageEmbed(msg.embeds[0])
                .setColor(0x333333)
                .setDescription(`Giveaway over! Congrats to ${user.toString()} for winning the prize!`)
                .setFooter("Ended")
                .setTimestamp();

            msg.edit(embed);

            return;
        }

        if (args[0] === "stop" || args[0] === "cancel") {
            return;
        }

        return super.error("Invalid usage. Check `!help` for commands.");
    }
}
