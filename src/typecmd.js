// i want to put the type only cmd's here
const {
  SeparatorBuilder,
  SeparatorSpacingSize,
  ButtonBuilder,
  ButtonStyle,
  TextDisplayBuilder,
  SectionBuilder,
  MessageFlags,
} = require("discord.js");

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
  guides: async function (msg) {
    // text
    const guideTitle = new TextDisplayBuilder().setContent(`# Guides`);
    const g1 = new TextDisplayBuilder().setContent(`### New Bonus Themes`);
    const g2 = new TextDisplayBuilder().setContent(`### Catch Live Lessons`);
    const g3 = new TextDisplayBuilder().setContent(
      `### Rhythm Hive Collection Ticket Guide`
    );
    const g4 = new TextDisplayBuilder().setContent(`### Song List`);

    // button
    const btLink = new ButtonBuilder()
      .setLabel("👆")
      .setURL(
        "https://docs.google.com/spreadsheets/d/1w5eFyR8lU4166ogNGl4mK_dHZC854HVhY6UbSPdZN28/edit?usp=sharing"
      )
      .setStyle(ButtonStyle.Link);

    const clLink = new ButtonBuilder()
      .setLabel("👆")
      .setURL(
        "https://docs.google.com/spreadsheets/d/1yiRy6xu3AfTxir6RW-r9gHgoR1Mu8e99-A-w24wgLKM/edit?usp=sharing"
      )
      .setStyle(ButtonStyle.Link);

    const ctlink = new ButtonBuilder()
      .setLabel("👆")
      .setURL("https://rentry.co/rh-ct-guide")
      .setStyle(ButtonStyle.Link);

    const slLink = new ButtonBuilder()
      .setLabel("👆")
      .setURL("https://rhythmhive.fandom.com/wiki/Song_List")
      .setStyle(ButtonStyle.Link);

    //separator
    const separator = new SeparatorBuilder().setSpacing(
      SeparatorSpacingSize.Large
    );

    //section
    const s1 = new SectionBuilder()
      .addTextDisplayComponents(g1)
      .setButtonAccessory(btLink);

    const s2 = new SectionBuilder()
      .addTextDisplayComponents(g2)
      .setButtonAccessory(clLink);

    const s3 = new SectionBuilder()
      .addTextDisplayComponents(g3)
      .setButtonAccessory(ctlink);

    const s4 = new SectionBuilder()
      .addTextDisplayComponents(g4)
      .setButtonAccessory(slLink);

    msg.channel.send({
      flags: MessageFlags.IsComponentsV2,
      components: [guideTitle, separator, s1, s2, s3, s4],
    });
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
