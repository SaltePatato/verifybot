const Base = require("../../base/Command.js");
const math = require("math-expression-evaluator");

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
          if (output = "Error: \"Invalid input!\"") {             
            const operation = args[0]
            const one = parseInt(args[1]);
            const two = parseInt(args[2]);
              
            if (operation !== "floor" && operation !== "ceil" && operation !== "n-root" && operation !== "sec" && operation !== "csc" && operation !== "cot") return message.channel.send({embed: mEmbed});
                
            if (["exponent"].includes(operation) && isNaN(two)) return message.reply("This operation requires a second parameter.");

            const { pow, sqrt, floor, ceil, sin, cos, tan } = Math;
            if (operation === "floor") output = floor(one);
            else if (operation === "ceil") output = ceil(one);
            else if (operation === "n-root") output = pow(one, 1 / two);
            else if (operation === "sec") output = 1 / cos(one * Math.PI / 180.0);
            else if (operation === "csc") output = 1 / sin(one * Math.PI / 180.0);
            else if (operation === "cot") output = 1 / tan(one * Math.PI / 180.0);
              
            
          }
          message.channel.send({embed: mEmbed})
        }
    }
};
