const Base = require("../../base/Command.js");
const { get } = require("snekfetch");

module.exports = class Upload extends Base {
    constructor(client) {
        super(client, {
            name: "upload",
            description: "Upload your own cat/dog pictures!",
            usage: "[attachment with message]",
            category: "fun",
            permLevel: 1
        });
    }

    run(message) {
        // Get the attachment
        const attachment = message.attachments.first();

      if(attachment) {
          // Upload
        get(`https://verifybot.tomoli.cf/addurl.php?link={attachment.url}`);
        return super.respond("Your image has been uploaded! Your image will appear in !cat or !dog once our moderators have accepted it.");
      }
      return super.error("Please attach your dog or cat image to your message.");
    }
};
