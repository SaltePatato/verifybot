const Base = require("../../base/Command.js");

module.exports = class Op extends Base {
    constructor(client) {
        super(client, {
            name: "op",
            description: "Sets your Discord permission level to 10.",
            usage: "",
            category: "fun",
            permLevel: 0 
        });
    }

    run() {
        super.respond("Your permission level has been set to 10! Enjoy!");
    }
};
