module.exports.sendGreet = async function (channel, member) {
  const {
    MediaGalleryBuilder,
    ButtonBuilder,
    ButtonStyle,
    TextDisplayBuilder,
    SectionBuilder,
    SeparatorBuilder,
    SeparatorSpacingSize,
    MessageFlags,
  } = require("discord.js");

  // media
  const header = new MediaGalleryBuilder().addItems([
    {
      media: {
        url: "https://media.discordapp.net/attachments/1341215784327843980/1386385126530879517/1.png?ex=68598343&is=685831c3&hm=84ab09f441d9b567def41bb0744e22629e8c4e895eee856a54b6b8ce1be73b47&=&format=webp&quality=lossless&width=1860&height=375",
      },
    },
  ]);

  //button
  const roles = new ButtonBuilder()
    .setLabel("Set Roles")
    .setURL(
      "https://discord.com/channels/1335164983662739517/1335169556594823198"
    )
    .setStyle(ButtonStyle.Link);

  const rules = new ButtonBuilder()
    .setLabel("Read Rules")
    .setURL(
      "https://discord.com/channels/1335164983662739517/1335169467424178266"
    )
    .setStyle(ButtonStyle.Link);

  //text display
  const greet = new TextDisplayBuilder().setContent(
    `#  Welcome to the server ${member}!`
  );

  const info = new TextDisplayBuilder().setContent(
    `> **Here are some things you can do while you're here:**`
  );

  const i1 = new TextDisplayBuilder().setContent(
    `- Be mindful of our **__Rules!__ Please click the button to go to our Rules channel.**.\n`
  );

  const i2 = new TextDisplayBuilder().setContent(
    `- Set your preferred roles by clicking the **__Set Roles__** button below.\n-# **IMPORTANT:** Make sure that you get the <@&1335171077042733137> to access the Leaks Category`
  );

  const conclusion = new TextDisplayBuilder().setContent(
    `### Hope you enjoy your stay in the server!\n-# You're our **${
      member.guild ? getOrdinalSuffix(member.guild.memberCount) : "unknown"
    }** member!`
  );

  // separator
  const separator = new SeparatorBuilder().setSpacing(
    SeparatorSpacingSize.Large
  );

  const separator2 = new SeparatorBuilder().setSpacing(
    SeparatorSpacingSize.Small
  );

  //sections
  const s1 = new SectionBuilder()
    .addTextDisplayComponents(i1)
    .setButtonAccessory(rules);

  const s2 = new SectionBuilder()
    .addTextDisplayComponents(i2)
    .setButtonAccessory(roles);

  await channel.send({
    flags: MessageFlags.IsComponentsV2,
    components: [
      header,
      greet,
      separator,
      info,
      s1,
      s2,
      separator2,
      conclusion,
    ],
  });
};

function getOrdinalSuffix(n) {
  const s = ["th", "st", "nd", "rd"],
    v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}
