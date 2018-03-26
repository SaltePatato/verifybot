const Base = require("../../base/Command.js");

module.exports = class Calc extends Base {
    constructor(client) {
        super(client, {
            name: "calc
            description: "Calculates using an operation and numbers.",
            usage: "<operation> <num1> [num2 (if needed]",
            category: "fun",
            permLevel: 0 
        });
    }

    async run(message, args) {
        // Ignore if sent in dfchat
        if (message.channel.name === "dfchat") return super.error("You can't use that here!");
        
        let operation = args[0]
        let numberOne = args[1]
        let numberTwo = args[2]
        
        if (operation =='add') {
        let ans = numberOne + numberTwo
        }
        if (operation =='subtract') {
        let ans = numberOne - numberTwo
        }
        if (operation =='multiply') {
        let ans = numberOne * numberTwo
        }
        if (operation =='divide') {
        let ans = numberOne / numberTwo
        }
        if (operation == 'exponent') {
        let ans = Math.pow(numberOne, numberTwo);
        }
        if (operation == 'sqrt') {
        let ans = Math.sqrt(numberOne);
        }

    pause() {
        return new ans(r => setTimeout(r, 5000));
    }
};
