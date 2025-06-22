// testing greet embed
const {
  EmbedBuilder,
  SlashCommandBuilder,
  PermissionsBitField,
  MessageFlags,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("greet-old")
    .setDescription("old greet embed"),
  name: "greet-old",
  description: "old greet embed",
  async execute(pmsg) {
    const user = pmsg.author;
    const member = pmsg.guild.members.cache.get(user.id);

    if (!member.permissions.has(PermissionsBitField.Flags.Administrator)) {
      return pmsg.reply({
        content: "You're not an admin!",
        flags: [MessageFlags.Ephemeral],
      });
    }

    // test greet embed
    const tembed = new EmbedBuilder()
      .setColor("#CDF7F6")
      .setAuthor({
        name: "✅ Verification Successful!",
        iconURL: pmsg.guild?.iconURL({ size: 512 }) ?? "",
      })
      .setTitle("**ᴄᴏᴢʏ ʀʜ ᴄᴀꜰᴇ 🍓 server**")
      .setDescription(
        `**Welcome to the server ${user}!**
                \n\nMake sure to read the <#1335169467424178266> and get your <#1335169556594823198> in these respective channels.
                \nHope you enjoy your stay in the server!`
      )
      .setThumbnail(user.avatarURL({ extension: "png", size: 512 }))
      .setImage(
        "https://media.discordapp.net/attachments/1335172660182646927/1339065138589732915/greet_gif.gif?ex=67ad5d17&is=67ac0b97&hm=cd7e5417333194473cfb73a1eb087f2016d6867a5253241d3981c1b04982e936&=&width=622&height=346"
      )
      .setFooter({
        text: `You're our ${
          pmsg.guild ? getOrdinalSuffix(pmsg.guild.memberCount) : "unknown"
        } member!`,
      })
      .setTimestamp(new Date());

    await pmsg.channel.send({ embeds: [tembed] });
  },

  async executeSlash(interaction) {
    const user = interaction.user;
    const member = interaction.guild.members.cache.get(user.id);

    if (!member.permissions.has(PermissionsBitField.Flags.Administrator)) {
      return interaction.reply({
        content: "You're not an admin!",
        flags: [MessageFlags.Ephemeral],
      });
    }

    // test greet embed
    const tembed = new EmbedBuilder()
      .setColor("#CDF7F6")
      .setAuthor({
        name: "✅ Verification Successful!",
        iconURL: interaction.guild?.iconURL({ size: 512 }) ?? "",
      })
      .setTitle("**ᴄᴏᴢʏ ʀʜ ᴄᴀꜰᴇ 🍓 server**")
      .setDescription(
        `**Welcome to the server ${user}!**
                \n\nMake sure to read the <#1335169467424178266> and get your <#1335169556594823198> in these respective channels.
                \nHope you enjoy your stay in the server!`
      )
      .setThumbnail(user.avatarURL({ extension: "png", size: 512 }))
      .setImage(
        "https://media.discordapp.net/attachments/1335172660182646927/1339065138589732915/greet_gif.gif?ex=67ad5d17&is=67ac0b97&hm=cd7e5417333194473cfb73a1eb087f2016d6867a5253241d3981c1b04982e936&=&width=622&height=346"
      )
      .setFooter({
        text: `You're our ${
          interaction.guild
            ? getOrdinalSuffix(interaction.guild.memberCount)
            : "unknown"
        } member!`,
      })
      .setTimestamp(new Date());

    await interaction.reply({ embeds: [tembed] });
  },
};

function getOrdinalSuffix(n) {
  const s = ["th", "st", "nd", "rd"],
    v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}
