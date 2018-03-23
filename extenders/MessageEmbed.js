const { MessageEmbed } = require("discord.js");

MessageEmbed.prototype.send = function () {
    return this.channel.send(this);
};
