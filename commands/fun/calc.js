const Base = require("../../base/Command.js");

module.exports = class Calc extends Base {
    constructor(client) {
        super(client, {
            name: "calc"
            description: "Calculates using an operation and numbers.",
            usage: "<operation> <num1> [num2 (if needed)]",
            category: "fun",
            permLevel: 0 
        });
    }

    async run(message, args) {
        // Ignore if sent in dfchat
        if (message.channel.name === "dfchat") return super.error("You can't use that here!");
        var f = [];
        function factorial (n) {
            if (n == 0 || n == 1)
            return 1;
            if (f[n] > 0)
            return f[n];
        return f[n] = factorial(n-1) * n;
        };
        
        let operation = args[0]
        let numberOne = parseInt(args[1]);
        let numberTwo = parseInt(args[2]);
        
        if (operation == 'add') {
        let ans = numberOne + numberTwo
        }
        if (operation == 'subtract') {
        let ans = numberOne - numberTwo
        }
        if (operation == 'multiply') {
        let ans = numberOne * numberTwo
        }
        if (operation == 'divide') {
        let ans = numberOne / numberTwo
        }
        if (operation == 'exponent') {
        let ans = Math.pow(numberOne, numberTwo);
        }
        if (operation == 'sqrt') {
        let ans = Math.sqrt(numberOne);
        }
        if (operation == 'factorial') {
        let ans = factorial(numberOne);
        }

    pause() {
        return new ans(r => setTimeout(r, 5000));
    }
};
