// i want to put the type only cmd's here

const path = require("path");
const fs = require("fs");
console.log("Typeonly command loaded");

const tcmd = {
  reqs: function (msg) {
    if (msg.content === "reqs") {
      const imagePath = path.join(__dirname, "../assets/verifyreq.png");

      // Verify image exists before sending
      if (!fs.existsSync(imagePath)) {
        return msg.channel.send(
          "Error: Verification requirements image not found."
        );
      }

      msg.channel.send({
        content:
          "# Verification Requirements\n- You play Rhythm Hive. Please provide a Screenshot of your RH Profile with your username visible (as shown in the 1st picture below)\n- You must be a member of the Rhythm Hive discord server. You can join the server ➡️ [**by pressing here**](https://discord.gg/MQdvHVpjca) ⬅️, and your current level role there must **STRICTLY** be __A Class and above__ (as shown in the 2nd picture below). To get this pic, type `t!rank` under the bot-commands channel in the server.",
        files: [imagePath],

        allowedMentions: { repliedUser: false },
      });
      console.log(`Verification requirements sent to ${msg.author.tag}`);
    }
  },
  ping: async function (msg) {
    const sent = await msg.channel.send("__*Pinging...*__");
    const latency = sent.createdTimestamp - msg.createdTimestamp;
    sent.edit(`**Pong!** Latency is ${latency}ms.`);
  },
  // add more here in the future...
};

module.exports = {
  run: function (msg) {
    const cmd = tcmd[msg.content];
    if (cmd) {
      cmd(msg);
    }
  },
};
