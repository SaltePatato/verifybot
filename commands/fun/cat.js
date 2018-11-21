const Base = require("../../base/Command.js");

module.exports = class Meow extends Base {
    constructor(client) {
        super(client, {
            name: "cat",
            description: "Sends a random cat image.",
            usage: "",
            category: "fun",
            permLevel: 0,
            cooldown: 60000
        });
var https = require('https');

//Tomoli's fancy cat command
//Runs on external server
var options = {
  host: 'verifybot.tomoli.cf',
  path: '/cat.php'
};

callback = function(response) {
  var str = '';

  //another chunk of data has been recieved, so append it to `str`
  response.on('data', function (chunk) {
    str += chunk;
  });

  //the whole response has been recieved, so we just print it out here
  response.on('end', function () {
    this.chosen = str;
  });
}

https.request(options, callback).end();
    }

    run(message) {
        // Ignore if sent in dfchat
        if (message.channel.name === "dfchat") return super.error("You can't use that here!");

        // Send a response
        message.channel.send(`[**Cat**] ${this.chosen}`);
        // New cat is received when command run
    }
};
