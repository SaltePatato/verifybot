const { MessageEmbed } = require("discord.js");

MessageEmbed.prototype.send = function (content = "") {
    return this.channel.send({ content, embed: this });
};
