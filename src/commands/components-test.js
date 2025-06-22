const {
  SlashCommandBuilder,
  SectionBuilder,
  ButtonBuilder,
  ButtonStyle,
  TextDisplayBuilder,
  SeparatorBuilder,
  SeparatorSpacingSize,
  MessageFlags,
  MediaGalleryBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("components-test")
    .setDescription("Testing components v2"),
  name: "components-test",
  description: "Testing components v2",

  async execute(interaction) {
    // put codes here
  },

  async executeSlash(interaction) {
    // also put codes here
  },
};

// function code blocks goes here
