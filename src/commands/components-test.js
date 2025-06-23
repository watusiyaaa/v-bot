// just for making bot text (will surely be editable more often lol)

const {
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
  name: "veri",
  description: "verification",

  execute(msg) {
    // put codes here
    const header = new MediaGalleryBuilder().addItems([
      {
        media: {
          url: "https://media.discordapp.net/attachments/1341215784327843980/1386614688208388207/6.png?ex=685a590f&is=6859078f&hm=99514f86616fabf9e3ae7948132356f60649353dcaee0fbb1e7bef8a862ca35c&=&format=webp&quality=lossless&width=1730&height=443",
        },
      },
    ]);

    const reqM1 = new MediaGalleryBuilder().addItems([
      {
        media: {
          url: "https://media.discordapp.net/attachments/1341215784327843980/1386614688544063489/photo_6136534962426462483_y.jpg?ex=685a590f&is=6859078f&hm=fe86fd75cfa1d872edc90c7c008bcd8c8300f517e29e4c990a09a2bd0417602c&=&format=webp&width=1600&height=720",
        },
      },
    ]);

    const reqM2 = new MediaGalleryBuilder().addItems([
      {
        media: {
          url: "https://media.discordapp.net/attachments/1341215784327843980/1386614688871088179/rank.png?ex=685a590f&is=6859078f&hm=b49e2791b24f9b78ee64f58cc39f7215d673d2897f4dc216042ffc3058138347&=&format=webp&quality=lossless&width=925&height=325",
        },
      },
    ]);

    const rulesButton = new ButtonBuilder()
      .setLabel("Rules")
      .setURL(
        "https://discord.com/channels/1335164983662739517/1335169467424178266"
      )
      .setStyle(ButtonStyle.Link);

    const rhInvite = new ButtonBuilder()
      .setLabel("RH Discord")
      .setURL("https://discord.gg/MQdvHVpjca")
      .setStyle(ButtonStyle.Link);

    const text = new TextDisplayBuilder().setContent(
      `# Welcome to ᴄᴏᴢʏ ʀʜ ᴄᴀꜰᴇ :strawberry:! \n### You got in here because you got an invite from one of our members right? **Well we're happy to have you!**\n\nAlthough you're not completely in. Due to a past incident regarding the leaks, you must undergo through verification process to completely join. This is to prevent unwanted users entering in the server. Obviously if you passed the verification process, that means you can be trusted that you will not share Rhythm Hive leaks that's posted from this server.`
    );

    const rules = new TextDisplayBuilder().setContent(
      "Before we proceed to requirements, please take your time to read our Rules by clicking the Rules button here ➡️"
    );

    const reqsHeader = new TextDisplayBuilder().setContent(
      `- Please do the following requirements:`
    );

    const req1 = new TextDisplayBuilder().setContent(
      `> You play Rhythm Hive. Please provide a Screenshot of your RH Profile with your username visible (as shown below).`
    );

    const req2 = new TextDisplayBuilder().setContent(
      `> You must be a member of the Rhythm Hive discord server. You can join the server by clicking the button here ➡️. Now your current level role there must **STRICTLY** be __A Class and above__ (as shown below). To get this pic, type \`t!rank\` under the bot-commands channel in the server.`
    );

    const Done = new TextDisplayBuilder().setContent(
      `- Once you have ALL the requirements, proceed to https://discord.com/channels/1335164983662739517/1335167409358897214 and submit both requirements.\n- Once you submitted, wait for an <@&1335173852686450708> to review it and let you in. Please be patient as it may take a while to verify you, because the Admins might be busy at the time you got in.\n-# For any questions or concerns, please dm the Admins.`
    );

    const separatorS = new SeparatorBuilder()
      .setSpacing(SeparatorSpacingSize.Small)
      .setDivider(true);

    const separatorL = new SeparatorBuilder()
      .setSpacing(SeparatorSpacingSize.Large)
      .setDivider(true);

    const section1 = new SectionBuilder()
      .addTextDisplayComponents(rules)
      .setButtonAccessory(rulesButton);

    const section2 = new SectionBuilder()
      .addTextDisplayComponents(req2)
      .setButtonAccessory(rhInvite);

    msg.channel.send({
      flags: MessageFlags.IsComponentsV2,
      components: [
        header,
        text,
        section1,
        separatorL,
        reqsHeader,
        req1,
        reqM1,
        section2,
        reqM2,
        separatorS,
        Done,
      ],
    });
  },
};

// function code blocks goes here
