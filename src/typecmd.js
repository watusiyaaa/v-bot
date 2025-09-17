// i want to put the type only cmd's here
const {
  EmbedBuilder,
  SeparatorBuilder,
  SeparatorSpacingSize,
  ButtonBuilder,
  ButtonStyle,
  TextDisplayBuilder,
  SectionBuilder,
  MessageFlags,
  MediaGalleryBuilder,
} = require("discord.js");

const path = require("path");
const fs = require("fs");
// console.log("Typeonly command loaded");

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

      // actual content
      try {
        msg.channel.send({
          content:
            "# Verification Requirements\n- You play Rhythm Hive. Please provide a Screenshot of your RH Profile with your username visible (as shown in the 1st picture below)\n- You must be a member of the Rhythm Hive discord server. You can join the server ➡️ [**by pressing here**](https://discord.gg/MQdvHVpjca) ⬅️, and your current level role there must **STRICTLY** be __A Class and above__ (as shown in the 2nd picture below). To get this pic, type `t!rank` under the bot-commands channel in the server.",
          files: [imagePath],

          allowedMentions: { repliedUser: false },
        });
        // console.log(`Verification requirements sent to ${msg.author.tag}`);
      } catch (error) {
        console.error(
          "Now im the dum dum. There has been a error when sending this command: ",
          error
        );
        msg.channel.send(
          "<:rizzcri:1339527910414880778> Sorry an error occured"
        );
      }
    }
  },
  ping: async function (msg, user) {
    const sent = await msg.channel.send("__*Pinging...*__");

    // --latencies--
    const latency = sent.createdTimestamp - msg.createdTimestamp;
    const apiLatency = Math.round(user.ws.ping);
    const latencyColor = (latency) => {
      if (latency < 150) return "#99EDCC";
      if (latency < 300) return "#FED766";
      return "#FE4A49";
    };

    // --uptimes--
    const uptime = user.uptime;
    const d = Math.floor(uptime / 86400000);
    const h = Math.floor(uptime / 3600000) % 24;
    const m = Math.floor(uptime / 60000) % 60;
    const s = Math.floor(uptime / 1000) % 60;
    const utString = `${d}d : ${h}h : ${m}m : ${s}s`;

    // embed
    const pingEmbed = new EmbedBuilder()
      .setColor(latencyColor(latency))
      .setTitle("V-bot Latency and Uptime")
      .addFields(
        {
          name: "🌐 Latency",
          value: `\`${latency}ms\``,
          inline: true,
        },
        {
          name: "🤖 API Latency",
          value: `\`${apiLatency}ms\``,
          inline: true,
        },
        {
          name: "⏳ Uptime",
          value: `\`${utString}\``,
          inline: false,
        }
      )
      .setTimestamp()
      .setFooter({
        text: `ping requested by: ${msg.author.tag}`,
        iconURL: msg.author.displayAvatarURL(),
      });

    // actual embed/content
    try {
      sent.edit({
        content: `**Pong!** 🏓`,
        embeds: [pingEmbed],
      });
      // console.log(`Ping cmd succesfully executed`);
    } catch (error) {
      console.error(
        "Now im the dum dum. There has been a error when sending this command: ",
        error
      );
      msg.channel.send("<:rizzcri:1339527910414880778> Sorry an error occured");
    }
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

    // actual component
    try {
      msg.channel.send({
        flags: MessageFlags.IsComponentsV2,
        components: [guideTitle, separator, s1, s2, s3, s4],
      });
      // console.log(`guides cmd succesfully executed`);
    } catch (error) {
      console.error(
        "Now im the dum dum. There has been a error when sending this command: ",
        error
      );
      msg.channel.send("<:rizzcri:1339527910414880778> Sorry an error occured");
    }
  },
  tws: async function (msg) {
    const header = new TextDisplayBuilder().setContent(`# TWS IS COMING`);
    const time = new TextDisplayBuilder().setContent(
      `> TWS will be available <t:1758160800:R>`
    );
    const pic = new MediaGalleryBuilder().addItems([
      {
        media: {
          url: "https://media.discordapp.net/attachments/1335172660182646927/1417861779316543569/50bc81cc-37ca-4e66-bac6-e5add122d74d.jpg?ex=68cc062e&is=68cab4ae&hm=1fe1565f54310b23c6a45e0a45920450824ff8d226e4550902843b49b3d269b3&=&format=webp&width=919&height=306",
        },
      },
    ]);

    try {
      msg.channel.send({
        flags: MessageFlags.IsComponentsV2,
        components: [pic, header, time],
      });
    } catch (error) {
      console.error(
        "Now im the dum dum. There has been a error when sending this command: ",
        error
      );
      msg.channel.send("<:rizzcri:1339527910414880778> Sorry an error occured");
    }
  },
  // add more here in the future...
};

module.exports = {
  run: function (msg, user) {
    const cmd = tcmd[msg.content];
    if (cmd) {
      cmd(msg, user);
    }
  },
};
