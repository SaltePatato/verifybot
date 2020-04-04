const { readFileSync } = require("fs");
const ms = require("pretty-ms");

module.exports = class {
    constructor(client) {
        this.client = client;
    }

    async run() {
        // Check node version
        if (parseInt(process.version.split(".")[0]) < 8) throw new Error("Your node version is too low, meaning VerifyBot will not function. Please update node if possible.");
        // Inform user that connection to websocket has been made
        console.log(`Connected to Discord as ${this.client.user.tag}.`);

        try {
            // Fetch reboot info
            const reboot = JSON.parse(readFileSync("restart.json"));
            // Fetch reboot message
            const message = await this.client.channels.get(reboot.channel).messages.fetch(reboot.id);
            // Update reboot timestamp
            message.edit(`✅ | Successfully rebooted in ${Date.now() - reboot.time}ms.`);
        } catch (e) {
            return null;
        }

        const fetchData = require("../methods/restricted/fetchNodeData");

        let nodesOnline = [];

        // Start node data loop
        setInterval(async () => {
            // Fetch node data
            const { online, offline, list } = await fetchData(this.client);
            
            this.client.user.setPresence({
                activity: {
                    name: `for !help | ${list.reduce((out, data) => data.players + out, 0)} players`,
                    type: "WATCHING"
                }
            });
        }, 60000);

        // Fetch 12:00 PM
        // const dt = new Date();
        // const tomorrowNoon = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate() + 1, 12, 0, 0);

        // Fetch notify function
        // const notify = require("../methods/restricted/plotNotify");

        // setTimeout(() => {
        //    notify(this.client);
        //    setInterval(() => notify(this.client), 8.64e+7);
        // }, new Date() - tomorrowNoon);
    }
};
