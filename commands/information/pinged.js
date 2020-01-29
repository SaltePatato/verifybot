const Command = require("../../base/Command.js");

module.exports = class Ping extends Command {
    constructor(client) {
        super(client, {
            name: "pinged",
            description: "Yes, someone pinged you. Get over it.",
            category: "information",
            permLevel: 2,
            clean: false
        });
    }

    run() {
        super.respond(`**Yes!** Someone pinged you! Instead of asking who it was, head over to the neat mentions button at the top right. This would have taken less time for you to do than complaining. Thanks :D`, { showCheck: false });
    }
};
