const Base = require("../../base/Command.js");
const { inspect } = require("util");
const { post } = require("snekfetch");

module.exports = class Eval extends Base {
    constructor(client) {
        super(client, {
            name: "eval",
            description: "Evaluate arbitrary JavaScript code.",
            usage: "<code>",
            category: "system",
            permLevel: 10
        });
    }

    run(message) {
        // Fetch time started
        const start = Date.now();
        // Creates a promise containing the result of the evaluation
        const result = new Promise((r) => r(eval(message.content.split(" ").slice(1).join(" "))));

        // When evaluation is complete...
        result.then(output => {
            // Turn the output into a string
            const out = inspect(output);
            // Respond with the stringified output
            super.respond(`Evaluated successfully (${Date.now() - start}ms)\`\`\`js\n${out}\`\`\``).catch(async () => {
                const { body } = await post("https://hastebin.com/document").send(out);

                super.respond(`https://hastebin.com/${body.key}`);
            });
            // If an error occurs...
        }).catch(err => {
            // Turn the error into a string
            const error = inspect(err);
            // Respond with the stringified error
            super.error(`Errored (${Date.now() - start}ms)\`\`\`js\n${error.split("\n")[0]}\`\`\``).catch(() => super.error("Output too long to send"));
        });
    }
};
