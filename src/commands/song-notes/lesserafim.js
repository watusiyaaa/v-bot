//lsf song notes info file

const {
  EmbedBuilder,
  ActionRowBuilder,
  StringSelectMenuBuilder,
} = require("discord.js");

module.exports = {
  name: "lesserafim",
  description: "Shows Le Sserafim song information",

  async execute(msg, args) {
    const pages = [
      {
        title: "**ANTIFRAGILE**",
        thumbnail:
          "https://media.discordapp.net/attachments/1341215784327843980/1342031476803239990/192641874413_Cover.png?ex=67b827b5&is=67b6d635&hm=6c52a41d3e3f35ef60c2b6effacec10d821abc0895a75defd920e72550915ed3&=&format=webp&quality=lossless&width=662&height=662",
        footer: "Page 2/6",
        fields: [
          {
            name: "**ANTIFRAGILE | `lvl.12`**",
            value:
              "__Short notes:__ `340` __Short length:__ `1:12`\n__Full notes:__ `977` __Full length:__ `3:04`",
          },
          {
            name: "**Impurities | `lvl.13`**",
            value:
              "__Short notes:__ `351` __Short length:__ `1:13`\n__Full notes:__ `1093` __Full length:__ `3:16`",
          },
          {
            name: "**Good Parts | `lvl.11`**",
            value:
              "__Short notes:__ `256` __Short length:__ `0:58`\n__Full notes:__ `832` __Full length:__ `2:36`",
          },
          {
            name: "**No Celestial | `lvl.12`**",
            value:
              "__Short notes:__ `387` __Short length:__ `1:09`\n__Full notes:__ `1021` __Full length:__ `2:47`",
          },
          {
            name: "**ANTIFRAGILE (2nd ver.) | `lvl.15`**",
            value:
              "__Short notes:__ `502` __Short length:__ `1:12`\n__Full notes:__ `1400` __Full length:__ `3:04`",
          },
        ],
      },
      {
        title: "**UNFORGIVEN**",
        thumbnail:
          "https://media.discordapp.net/attachments/1341215784327843980/1342031509154037824/196922444470_Cover.png?ex=67b827bd&is=67b6d63d&hm=7cb7657288512870a707e78a509ea1c1983523bb8370977de4e67c66d6c0ccb0&=&format=webp&quality=lossless&width=662&height=662",
        footer: "Page 3/6",
        fields: [
          {
            name: "**FEARLESS (2023 ver.) | `lvl.11`**",
            value:
              "__Short notes:__ `340` __Short length:__ `1:11`\n__Full notes:__ `818` __Full length:__ `2:48`",
          },
          {
            name: "**UNFORGIVEN | `lvl.12`**",
            value:
              "__Short notes:__ `275` __Short length:__ `0:54`\n__Full notes:__ `1001` __Full length:__ `3:02`",
          },
          {
            name: "**Eve, Pysche & the Bluebeard's Wife | `lvl.11`**",
            value:
              "__Short notes:__ `382` __Short length:__ `1:20`\n__Full notes:__ `982` __Full length:__ `3:06`",
          },
          {
            name: "**Between you, me and the Lamppost | `lvl.12`**",
            value:
              "__Short notes:__ `336` __Short length:__ `1:02`\n__Full notes:__ `1170` __Full length:__ `3:27`",
          },
          {
            name: "**Blue Flame (2023 ver.) | `lvl.15`**",
            value:
              "__Short notes:__ `391` __Short length:__ `1:24`\n__Full notes:__ `1061` __Full length:__ `3:22`",
          },
          {
            name: "**Fire in the Belly | `lvl.15`**",
            value:
              "__Short notes:__ `526` __Short length:__ `1:12`\n__Full notes:__ `1426` __Full length:__ `3:18`",
          },
          {
            name: "**No Return (Into the unknown) | `lvl.14`**",
            value:
              "__Short notes:__ `522` __Short length:__ `1:28`\n__Full notes:__ `1546` __Full length:__ `3:04`",
          },
          {
            name: "**Flash Forward | `lvl.11`**",
            value:
              "__Short notes:__ `257` __Short length:__ `1:06`\n__Full notes:__ `956` __Full length:__ `3:15`",
          },
          {
            name: "**FEARLESS (2023 ver.) (2nd ver.) | `lvl.14`**",
            value:
              "__Short notes:__ `389` __Short length:__ `1:11`\n__Full notes:__ `1043` __Full length:__ `2:48`",
          },
          {
            name: "**UNFORGIVEN (2nd ver.) | `lvl.16`**",
            value:
              "__Short notes:__ `327` __Short length:__ `0:54`\n__Full notes:__ `1335` __Full length:__ `3:02`",
          },
          {
            name: "**Blue Flame (2023 ver.) (2nd ver.) | `lvl.13`**",
            value:
              "__Short notes:__ `525` __Short length:__ `1:24`\n__Full notes:__ `1386` __Full length:__ `3:22`",
          },
        ],
      },
      {
        title: "**Easy**",
        thumbnail:
          "https://media.discordapp.net/attachments/1341215784327843980/1342036660732563538/196922796531_Cover.png?ex=67b82c89&is=67b6db09&hm=6e518cd1fcd9e8147081da78acc34f5aad9b0d31269dffa8a181b6ce877f65db&=&format=webp&quality=lossless&width=662&height=662",
        footer: "Page 4/6",
        fields: [
          {
            name: "**EASY | `lvl.12`**",
            value:
              "__Short notes:__ `341` __Short length:__ `1:05`\n__Full notes:__ `916` __Full length:__ `2:45`",
          },
          {
            name: "**Good Bones | `lvl.13`**",
            value:
              "__Short notes:__ `385` __Short length:__ `1:16`\n__Full notes:__ `930` __Full length:__ `2:40`",
          },
          {
            name: "**Swan Song | `lvl.13`**",
            value:
              "__Short notes:__ `318` __Short length:__ `1:09`\n__Full notes:__ `879` __Full length:__ `2:37`",
          },
          {
            name: "**Smart | `lvl.13`**",
            value:
              "__Short notes:__ `341` __Short length:__ `1:06`\n__Full notes:__ `1017` __Full length:__ `2:46`",
          },
          {
            name: "**We got so much | `lvl.13`**",
            value:
              "__Short notes:__ `286` __Short length:__ `0:53`\n__Full notes:__ `1004` __Full length:__ `2:45`",
          },
        ],
      },
      {
        title: "**Crazy**",
        thumbnail:
          "https://media.discordapp.net/attachments/1341215784327843980/1342036660338036828/198704101359_Cover.png?ex=67b82c89&is=67b6db09&hm=5fcdac8bc6950a55a539ffe1e938de84434881912327b433da2f7c44a0dbbfc4&=&format=webp&quality=lossless&width=662&height=662",
        footer: "Page 5/6",
        fields: [
          {
            name: "**CRAZY | `lvl.15`**",
            value:
              "__Short notes:__ `507` __Short length:__ `1:04`\n__Full notes:__ `1400` __Full length:__ `2:44`",
          },
          {
            name: "**Chasing Lightning | `lvl.15`**",
            value:
              "__Short notes:__ `403` __Short length:__ `1:12`\n__Full notes:__ `1461` __Full length:__ `3:25`",
          },
          {
            name: "**1-800-hot-n-fun | `lvl.15`**",
            value:
              "__Short notes:__ `371` __Short length:__ `1:03`\n__Full notes:__ `1300` __Full length:__ `2:46`",
          },
          {
            name: "**Crazier | `lvl.10`**",
            value:
              "__Short notes:__ `341` __Short length:__ `1:06`\n__Full notes:__ `1017` __Full length:__ `2:53`",
          },
          {
            name: "**Pierrot | `lvl.14`**",
            value:
              "__Short notes:__ `272` __Short length:__ `1:12`\n__Full notes:__ `715` __Full length:__ `2:58`",
          },
        ],
      },
      {
        title: "**Solo: `Yunjin`**",
        thumbnail:
          "https://media.discordapp.net/attachments/1341215784327843980/1342033049428295690/ss.png?ex=67b8292c&is=67b6d7ac&hm=64e8b6b8a8110ef7bd0204c5b38f28e074b61be6c0addcf8cdbeacf7e542cac2&=&format=webp&quality=lossless&width=437&height=437",
        footer: "Page 1/6",
        fields: [
          {
            name: "**Raise y_our glass | `lvl.11`**",
            value:
              "__Short notes:__ `282` __Short length:__ `1:18`\n__Full notes:__ `875` __Full length:__ `3:32`",
          },
          {
            name: "**I ≠ DOLL | `lvl.15`**",
            value:
              "__Short notes:__ `358` __Short length:__ `0:56`\n__Full notes:__ `1200` __Full length:__ `2:30`",
          },
        ],
      },
      {
        title: "**Other songs**",
        thumbnail:
          "https://media.discordapp.net/attachments/1341215784327843980/1342042131379912725/198704128325_Cover.png?ex=67b831a2&is=67b6e022&hm=ca741f4144b2555eb5f9889586192baafba7374136c886a547e23d0b16d3a7db&=&format=webp&quality=lossless&width=437&height=437",
        footer: "Page 6/6",
        fields: [
          {
            name: "**Eve, Pysche & the Bluebeard's Wife (Rina Sawayama Remix) | `lvl.15`**",
            value:
              "__Short notes:__ `484` __Short length:__ `1:04`\n__Full notes:__ `1370` __Full length:__ `2:54`",
          },
          {
            name: "**Perfect Night | `lvl.13`**",
            value:
              "__Short notes:__ `327` __Short length:__ `0:57`\n__Full notes:__ `1016` __Full length:__ `2:39`",
          },
          {
            name: "**EASY (Drum & Bass Remix) | `lvl.16`**",
            value:
              "__Short notes:__ `459` __Short length:__ `1:06`\n__Full notes:__ `1219` __Full length:__ `2:45`",
          },
          {
            name: "**CRAZY (David Guetta Remix) | `lvl.17`**",
            value:
              "__Short notes:__ `746` __Short length:__ `1:14`\n__Full notes:__ `1900` __Full length:__ `2:54`",
          },
          {
            name: "**Perfect Night (for FEARNOT) | `lvl.14`**",
            value:
              "__Short notes:__ `505` __Short length:__ `1:06`\n__Full notes:__ `1321` __Full length:__ `2:41`",
          },
        ],
      },
    ];

    let currentPage = 0;
    // Embed
    const lsfembed = new EmbedBuilder()
      .setTitle(pages[currentPage].title)
      .addFields(pages[currentPage].fields)
      .setColor("#CDF7F6")
      .setThumbnail(pages[currentPage].thumbnail)
      .setFooter({ text: `Page ${currentPage + 1}/${pages.length}` });

    // Select Component
    const selectMenu = new StringSelectMenuBuilder()
      .setCustomId("page-select")
      .setPlaceholder("Select an album...")
      .addOptions(
        pages.map((page, index) => ({
          label: `➡️ Releases no. ${index + 1}`,
          description: page.title.replace("**", "").replace("**", ""),
          value: index.toString(),
        }))
      );

    const selectRow = new ActionRowBuilder().addComponents(selectMenu);

    // Executes the command
    const lsfmsg = await msg.channel.send({
      embeds: [lsfembed],
      components: [selectRow],
    });

    // Select menu interaction collector
    const filter = (i) => i.user.id === msg.author.id;
    const collector = lsfmsg.createMessageComponentCollector({
      filter,
      time: 60000,
    });

    collector.on("collect", async (i) => {
      try {
        if (i.isStringSelectMenu()) {
          currentPage = parseInt(i.values[0]);

          // Updates the embed with the selected page
          lsfembed
            .setTitle(pages[currentPage].title)
            .setFields(pages[currentPage].fields)
            .setThumbnail(pages[currentPage].thumbnail)
            .setFooter({ text: `Page ${currentPage + 1}/${pages.length}` });

          await i.update({
            embeds: [lsfembed],
            components: [selectRow],
          });
        }
      } catch (error) {
        console.error("Select menu interaction error:", error);
        collector.stop();
      }
    });

    collector.on("end", () => {
      try {
        lsfmsg.edit({ components: [] }).catch(() => {});
      } catch (error) {
        console.error("Error cleaning up components:", error);
      }
    });
  },
};
