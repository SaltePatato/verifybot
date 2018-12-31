const Base = require("../../base/Command.js");
const request = require('snekfetch');

module.exports = class Upload extends Base {
    constructor(client) {
        super(client, {
            name: "upload",
            description: "Upload your own cat/dog pictures!",
            usage: "",
            category: "fun",
            permLevel: 0,
            aliases: ["uploadmyanimal"]
        });
    }

    run() {
        //Get the attachment
        var Attachment = (message.attachments).array();
        //Get how long the attachment object is (This is to check if there is an attachment)
        var count = Object.keys(Attachment).length;

      if(count == 1) { //If there is an attachment send it.        
        request.get('https://verifybot.tomoli.cf/addurl.php?link='+ Attachment[0].url) //Add the attachment to the api
        message.channel.send("**Upload** » Animal upload successful. Our robo hamsters are currently verifying its actually a animal, if approved you should soon see it in !cat or !dog").then(msg => {
            msg.delete(10000) 
          })
      }else{ //If there is no attachment send an error.
          message.channel.send("**Upload** » Hey uh, where's the animal? Is the invisible hamster back again? (You forgot to attach your image with your command)").then(msg => {
            msg.delete(8000)
          })
      }
    }
};
