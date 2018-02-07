const Base = require("../../base/ModerationCommand.js");

module.exports = class Ban extends Base {
    constructor(client) {
        super(client, {
            name: "kick",
            description: "Kicks the mentioned user.",
            usage: "<user> <reason>",
            permLevel: 4
        }, {
            actionName: "kick",
            color: 0xFFAA00
        });
    }

    async run(message) {
        try {
            await super.setData(message);
            const valid = super.check();
            if (!valid) return;
            await this.target.kick({ reason: this.reason ? `[${this.executor.tag}] ${this.reason}` : `Banned by ${this.executor.tag}` });

            super.send();
        } catch (e) {
            super.error("An unknown error occured whilst attempting to perform this action.");
            console.log(e);
        }
    }
};
