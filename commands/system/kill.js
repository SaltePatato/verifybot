const Base = require("../../base/Command");
const { writeFile } = require("fs");

module.exports = class Kill extends Base {
    constructor(client) {
        super(client, {
            name: "kill",
            description: "Kills the bot.",
            usage: "",
            category: "system",
            permLevel: 10
        });
    }

    async run(message) {
      await message.channel.send("**VerifyBot is now offline until further notice. Jeremaster will restart when it is needed.**");
      this.client.destroy();
    }
};
