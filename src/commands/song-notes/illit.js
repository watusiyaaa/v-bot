// illit song notes info file

const {
  EmbedBuilder,
  ActionRowBuilder,
  StringSelectMenuBuilder,
} = require("discord.js");

module.exports = {
  name: "illit",
  description: "Shows Illit song information",

  async execute(msg, args) {
    // Content functions
    const fs = require("fs");
    const pages = JSON.parse(
      fs.readFileSync(
        "./src/commands/song-notes/contents/illitpages.json",
        "utf8"
      )
    );

    let currentPage = 0;
    // Embed
    const iltembed = new EmbedBuilder()
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
    const iltmsg = await msg.channel.send({
      embeds: [iltembed],
      components: [selectRow],
    });

    // Select menu interaction collector
    const filter = (i) => i.user.id === msg.author.id;
    const collector = iltmsg.createMessageComponentCollector({
      filter,
      time: 60000,
    });

    collector.on("collect", async (i) => {
      try {
        if (i.isStringSelectMenu()) {
          currentPage = parseInt(i.values[0]);

          // Updates the embed with the selected page
          iltembed
            .setTitle(pages[currentPage].title)
            .setFields(pages[currentPage].fields)
            .setThumbnail(pages[currentPage].thumbnail)
            .setFooter({ text: `Page ${currentPage + 1}/${pages.length}` });

          await i.update({
            embeds: [iltembed],
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
        iltmsg.edit({ components: [] }).catch(() => {});
      } catch (error) {
        console.error("Error cleaning up components:", error);
      }
    });
  },
};
