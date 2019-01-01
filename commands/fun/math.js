const Base = require("../../base/Command.js");
const math = require('math-expression-evaluator');

module.exports = class Math extends Base {
    constructor(client) {
        super(client, {
            name: "math",
            description: "Evaulates mathematical expressions.",
            usage: "<expression>",
            category: "fun",
            permLevel: 0 
        });
    }

    async run(message, args) {
        // Ignore if sent in dfchat
        if (message.channel.name === "dfchat") return super.error("You can't use that here!");
        let output;
        try {
        output = math.eval(args.join(" "));
        } catch(e) {
          output = "Error: \"Invalid input!\""
        } finally {
          let mEmbed = new Discord.MessageEmbed()
          .setTitle("Math Evaluation")
          .addField("Input", `\`\`\`JavaScript\n${args.join(" ")}\`\`\``, true)
          .addField("Output", `\`\`\`JavaScript\n${output}\`\`\``, true)
          .setColor(config.color)
          .setFooter("VerifyBot Math Eval - By LittleWhole")
          .setTimestamp();
          super.respond("Your answer:");
          message.channel.send({embed: mEmbed})
        }
    }
};
