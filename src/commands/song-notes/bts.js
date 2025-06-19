//bts song notes info file

const {
  EmbedBuilder,
  ActionRowBuilder,
  StringSelectMenuBuilder,
  ComponentType,
} = require("discord.js");

module.exports = {
  name: "bts",
  description: "Shows BTS song information.",

  async execute(msg, args) {
    // Content function
    const fs = require("fs");
    const data = JSON.parse(
      fs.readFileSync(
        "./src/commands/song-notes/contents/btspgdata.json",
        "utf8"
      )
    );
    const pages = data.alpage;
    const solopages = data.solopage;

    let currentSection = null;
    let filteredPages = [];
    let currentPageIndex = null;
    let initialResponse = null; // To handle initial message deletion

    // Function to filter pages based on the selected section
    const filterPagesBySection = (section) => {
      switch (section) {
        case "solo":
          return Array.isArray(solopages) ? solopages : [];
        case "albums":
          return Array.isArray(pages)
            ? pages.filter(
                (page) =>
                  !page.title.includes("Unit") && !page.title.includes("Solo")
              )
            : [];
        default: // 'all'
          return Array.isArray(pages) && Array.isArray(solopages)
            ? [...pages, ...solopages]
            : Array.isArray(pages)
            ? pages
            : Array.isArray(solopages)
            ? solopages
            : [];
      }
    };

    // 1. Prompt for Section and then immediately for Page
    const promptForSection = async () => {
      const sectionMenu = new StringSelectMenuBuilder()
        .setCustomId("section_select")
        .setPlaceholder("Select a section...")
        .addOptions(
          {
            label: "🎧 All Songs (Both Albums and Solo Release)",
            value: "all",
          },
          {
            label: "🎶 Solo Release",
            value: "solo",
          },
          {
            label: "💿Albums Only",
            value: "albums",
          }
        );

      const row = new ActionRowBuilder().addComponents(sectionMenu);

      const response = await msg.channel.send({
        content: "Choose a section:",
        components: [row],
      });
      initialResponse = response; // Store the initial response for potential deletion

      const collector = response.createMessageComponentCollector({
        componentType: ComponentType.StringSelect,
        time: 60000,
      });

      collector.on("collect", async (interaction) => {
        if (interaction.customId === "section_select") {
          currentSection = interaction.values[0];
          filteredPages = filterPagesBySection(currentSection);
          currentPageIndex = null; // Reset page index
          await interaction.update({
            content: "Choose a page:",
            components: [],
          }); // Modified content
          collector.stop();
          promptForPage(filteredPages, response); // Pass the response
        }
      });

      collector.on("end", (collected) => {
        if (collected.size === 0 && initialResponse) {
          msg.channel.send("❌ Command time out");
        }
      });
    };

    // 2. Prompt for Page
    const promptForPage = async (currentPages, sectionResponse) => {
      // Added sectionResponse parameter
      if (currentPages.length === 0) {
        return msg.channel.send(
          "❌ No songs have been found for this section."
        );
      }

      const pageOptions = currentPages.map((page, idx) => ({
        label: `➡️ Releases no. ${idx + 1}`,
        description: page.title.replace(/\*\*/g, "").slice(0, 50),
        value: idx.toString(),
      }));

      const pageMenu = new StringSelectMenuBuilder()
        .setCustomId("page_select")
        .setPlaceholder("Select a release...")
        .addOptions(...pageOptions, { label: "↪️ Go Back", value: "back" });

      const row = new ActionRowBuilder().addComponents(pageMenu);

      await sectionResponse.edit({
        content: "Choose a page:",
        components: [row],
      }); // Edit existing message
      initialResponse = sectionResponse; // Update initial response

      const collector = sectionResponse.createMessageComponentCollector({
        // Use sectionResponse
        componentType: ComponentType.StringSelect,
        time: 60000,
      });

      collector.on("collect", async (interaction) => {
        if (interaction.customId === "page_select") {
          if (interaction.values[0] === "back") {
            currentSection = null;
            filteredPages = [];
            currentPageIndex = null;
            await interaction.update({
              content: "↪️ Go back to section selection",
              components: [],
            });
            collector.stop();
            promptForSection();
          } else {
            currentPageIndex = parseInt(interaction.values[0]);
            await interaction.update({
              content: `➡️ Now displaying page ${currentPageIndex + 1}`,
              components: [],
            });
            collector.stop();
            displayPage(currentPages, currentPageIndex);
          }
        }
      });

      collector.on("end", (collected) => {
        if (collected.size === 0 && initialResponse) {
          msg.channel.send("❌ Command time out.");
        }
      });
    };

    // 3. Display Page
    const displayPage = async (currentPages, index) => {
      const page = currentPages[index];
      const embed = new EmbedBuilder()
        .setColor("#CDF7F6")
        .setTitle(page.title)
        .setThumbnail(page.thumbnail)
        .addFields(page.fields)
        .setFooter({
          text: `Page ${index + 1}/${currentPages.length}`,
        }); // Adjust footer

      const pageOptions = currentPages.map((p, idx) => ({
        label: `➡️ Releases no. ${idx + 1}`,
        description: p.title.replace(/\*\*/g, "").slice(0, 50),
        value: idx.toString(),
      }));

      const changePageMenu = new StringSelectMenuBuilder()
        .setCustomId("change_page")
        .setPlaceholder("Want to see another release?")
        .addOptions(
          ...pageOptions,
          { label: "↪️ Go Back to Sections", value: "back_to_sections" } // Changed value
        );

      const row = new ActionRowBuilder().addComponents(changePageMenu);

      const response = await msg.channel.send({
        embeds: [embed],
        components: [row],
      });
      initialResponse = response; // Update initial response

      const collector = response.createMessageComponentCollector({
        componentType: ComponentType.StringSelect,
        time: 60000,
      });

      collector.on("collect", async (interaction) => {
        if (interaction.customId === "change_page") {
          if (interaction.values[0] === "back_to_sections") {
            // Changed check
            currentSection = null;
            filteredPages = [];
            currentPageIndex = null;
            await interaction.update({
              content: "You're currently viewing the section selection",
              embeds: [],
              components: [],
            });
            collector.stop();
            promptForSection();
          } else {
            currentPageIndex = parseInt(interaction.values[0]);
            await interaction.update({
              content: `Displaying page ${currentPageIndex + 1}`,
              embeds: [],
              components: [],
            });
            collector.stop();
            displayPage(currentPages, currentPageIndex);
          }
        }
      });

      collector.on("end", (collected) => {
        if (collected.size === 0 && initialResponse) {
          msg.channel.send("❌ Command time out.");
        }
      });
    };

    // Start the process
    promptForSection();
  },
};
