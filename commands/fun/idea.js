const Base = require("../../base/Command.js");

module.exports = class Meow extends Base {
    constructor(client) {
        super(client, {
            name: "idea",
            description: "Generates a plot idea.",
            usage: "",
            category: "fun",
            permLevel: 0,
            cooldown: 60000
        });

        Object.defineProperty(this, "gameType", {
            value: [
                "A Escapist Game",
                "A PvP Game",
                "A RPG Game",
                "A Parkour Game",
                "A Puzzle Game",
                "A Clicker Game",
                "A Tycoon Game",
                "A Survival Game",
                "A Horror Game",
                "A Magic Game",
                "A KitPvP",
                "A Trivia Game"
            ]
        });
        
        Object.defineProperty(this, "gameObjective", {
            value: [
                "where you parkour",
                "where you escape",
                "where you run",
                "where you collect items",
                "where you shoot lasers",
                "where you mirror movement",
                "where you rebuild structures"
            ]
        });
        
        Object.defineProperty(this, "gameReward", {
            value: [
                "to get points.",
                "to get escapes.",
                "to get win.",
                "and kill everything.",
                "and have to beat all levels",
                "with friends"
            ]
        });

        Object.defineProperty(this, "type", { value: this.gameType[Math.floor(Math.random() * this.gameType.length)], writable: true });
        Object.defineProperty(this, "objective", { value: this.gameObjective[Math.floor(Math.random() * this.gameObjective.length)], writable: true });
        Object.defineProperty(this, "reward", { value: this.gameReward[Math.floor(Math.random() * this.gameReward.length)], writable: true });
    }

    run(message) {
        // Ignore if sent in dfchat
        if (message.channel.name === "dfchat") return super.error("You can't use that here!");

        // Send a response
        message.channel.send(`[**Game**] ${this.type} ${this.objective} ${this.reward} `);
        // NEW GAME
        
        Object.defineProperty(this, "type", { value: this.gameType[Math.floor(Math.random() * this.gameType.length)], writable: true });
        Object.defineProperty(this, "objective", { value: this.gameObjective[Math.floor(Math.random() * this.gameObjective.length)], writable: true });
        Object.defineProperty(this, "reward", { value: this.gameReward[Math.floor(Math.random() * this.gameReward.length)], writable: true });
    }
};
