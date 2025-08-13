/* the main file, things to remember:
  - all of the js files under src folder will be imported on this file, so that i will only be executing this file
  - index.js logic functions: verification protocol, maintenance finction and role function */

const {
  Client,
  Events,
  GatewayIntentBits,
  EmbedBuilder,
  Collection,
  MessageFlags,
  Message,
} = require("discord.js");
const env = require("dotenv");
const fs = require("fs");
const path = require("path");
const register = require("./commands/commands");
const newGreet = require("./greet1");
const status = require("./botstatus");
const config = require("./config");
const tcmd = require("./typecmd");

env.config();

//intents
const user = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.MessageContent,
  ],
});

/* The code snippet `user.commands = new Collection(); const prefix = "."; const cmdP =
path.join(__dirname, "commands"); console.log("Loading commands from:", cmdP);` is setting up the necessary variables and collections for handling commands in a Discord bot. */
user.commands = new Collection();
const prefix = ".";
const cmdP = path.join(__dirname, "commands");
// console.log("Loading commands from:", cmdP);

/* The `cmdF` constant is being assigned the result of reading the contents of a directory
synchronously using `fs.readdirSync`. The `{ withFileTypes: true }` option is used to include the file type information in the result. */
const cmdF = fs.readdirSync(cmdP, { withFileTypes: true }).flatMap((dirent) => {
  if (dirent.isDirectory()) {
    const subDir = path.join(cmdP, dirent.name);
    // console.log("Loading commands from subdirectory:", subDir);
    return fs
      .readdirSync(subDir)
      .filter((file) => file.endsWith(".js"))
      .map((file) => path.join(dirent.name, file));
  }
  return dirent.name.endsWith(".js") && dirent.name !== "commands.js"
    ? [dirent.name]
    : [];
});

// console.log("Found command files:", cmdF);

/* This block of code is iterating over each file in the `cmdF` array, which contains the list of command files found in the specified directory. For each file, it constructs the full path by
joining the base command path (`cmdP`) with the file name. */
for (const file of cmdF) {
  const fullPath = path.join(cmdP, file);
  // console.log("Loading command from:", fullPath);
  const cmd = require(fullPath);
  user.commands.set(cmd.name, cmd);
  // console.log(`Registered command: ${cmd.name}`);
}

status(user); //importing the status function

/* This block of code is handling the initialization and shutdown process of the Discord bot. */
user.once("ready", () => {
  console.log(`Loading... ${user.user.tag} is now online.`);
  register(user);
});

process.on("SIGINT", () => {
  console.log(`${user.user.tag} is shutting down...`);
  user.destroy();
  process.exit();
});

//slash cmd interactions
user.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isCommand()) return;

  if (
    config.getMaintenanceMode() &&
    interaction.commandName !== "maintenance"
  ) {
    const maintembed = new EmbedBuilder()
      .setColor("#CDF7F6")
      .setTitle("⚠️ Bot's under maintenance!")
      .setDescription(
        "V bot's currently under maintenance. Use the commands once finished."
      )
      .addFields({ name: "Reason", value: config.getMaintenanceReason() })
      .setTimestamp(new Date());

    return interaction.reply({
      embeds: [maintembed],
      allowedMentions: { repliedUser: false },
      ephemeral: true,
    });
  }

  const cmd = user.commands.get(interaction.commandName);
  if (!cmd) return;

  try {
    if (cmd.executeSlash) {
      await cmd.executeSlash(interaction);
    } else {
      await interaction.reply({
        content: "This command is prefix command only.",
        flags: [MessageFlags.Ephemeral],
      });
    }
  } catch (error) {
    console.error("There has been an error", error);
    await interaction.reply({
      content: "Now im the dum dum, i somehow failed to execute the command.",
      flags: [MessageFlags.Ephemeral],
    });
  }
});

//prefix and type-only cmd interactions
user.on(Events.MessageCreate, async (msg) => {
  if (msg.author.bot) return;

  if (
    config.getMaintenanceMode() &&
    !msg.content.startsWith(`${prefix}maintenance`)
  ) {
    const maintembed = new EmbedBuilder()
      .setColor("#CDF7F6")
      .setTitle("⚠️ Bot's under maintenance!")
      .setDescription(
        "V bot's currently under maintenance. Wait for a while before using the commands."
      )
      .addFields({ name: "Reason", value: config.getMaintenanceReason() })
      .setTimestamp(new Date());

    return msg.reply({
      embeds: [maintembed],
      allowedMentions: { repliedUser: false },
    });
  }

  //type only cmd
  tcmd.run(msg, user);

  //prefix cmd
  if (!msg.content.startsWith(prefix)) return;

  const arg = msg.content.slice(prefix.length).trim().split(/ +/);
  const cmdN = arg.shift().toLowerCase();
  const cmd =
    user.commands.get(cmdN) ||
    user.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(cmdN));

  if (!cmd) return;

  try {
    await cmd.execute(msg, arg);
  } catch (error) {
    console.error("There has been an error", error);
    await msg.reply({
      content: "Now im the dum dum, i somehow failed to execute the command.",
      flags: [MessageFlags.Ephemeral],
    });
  }
});

// verification protocol PHASE 1: if user sent a message, bot will notify about it on the admin channel
user.on(Events.MessageCreate, async (ntfy) => {
  if (ntfy.channel.id !== process.env.VERIFY_CHANNEL) return;

  const IDa = process.env.ADMIN_CHANNEL;
  if (!IDa) {
    console.log(
      "The admin channel ID wasnt in the env. Please put it in the env."
    );
    return;
  }
  const AC = ntfy.guild?.channels.cache.get(IDa);
  if (!AC || !AC.isTextBased()) {
    console.log("The admin can't be found or isn't a text based channel.");
    return;
  }

  //embed notification
  const ntfyembed = new EmbedBuilder()
    .setColor("#CDF7F6")
    .setTitle("A NEW MEMBER HAS JOINED!")
    .setDescription(
      `${ntfy.author.tag} has joined the server and they\'re waiting to be verified!
          React with the following emojis to accept them in! (✅ or <a:loading:1336976196365451296>)`
    )
    .addFields({
      name: "Member",
      value: ntfy.author.tag,
      name: "Press the link to check the proof",
      value: `[Proceed to accepting the new member <a:SOWICKED:1337017979564458025>](${ntfy.url})`,
    })
    .setTimestamp(new Date());

  try {
    await AC.send({ embeds: [ntfyembed] });
  } catch (error) {
    console.error("There has been an error", error);
    Message.channel.send({
      content: "It has failed to send the notification to the admin.",
      flags: [MessageFlags.Ephemeral],
    });
  }
});

/* verification protocol PHASE 2: if the admin reacted to the message, the bot will gave the user the role, giving them access to the server */
user.on(Events.MessageReactionAdd, async (react, user) => {
  if (user.bot) return;
  if (react.message.channel.id !== process.env.VERIFY_CHANNEL) return;

  const cEmoji = process.env.EMOJI;
  const nEmoji = "✅";
  if (!cEmoji) return;
  if (react.emoji.id !== cEmoji && react.emoji.name !== nEmoji) return;

  const unvUser = react.message.author;
  if (!unvUser || unvUser.bot) return;

  let unvMember = react.message.guild?.members.cache.get(unvUser.id);
  if (!unvMember) {
    try {
      unvMember = await react.message.guild?.members.fetch(unvUser.id);
    } catch (error) {
      return;
    }
  }
  if (!unvMember) return;

  const verifiedRole = process.env.VERIFIED_ROLE;
  if (!verifiedRole) return;
  const getrole = react.message.guild?.roles.cache.get(verifiedRole);
  if (!getrole) return;

  try {
    await unvMember.roles.add(getrole);
  } catch (error) {
    return;
  }
  console.log(`${unvUser.tag} has been given the ${verifiedRole} role!`);

  const genID = process.env.GENCHAT_ID;
  if (!genID) return;
  const genchat = react.message.guild?.channels.cache.get(genID);
  if (!genchat || !genchat.isTextBased()) return;

  // greet message | new greet message to integrate components (greet1.js)
  try {
    await newGreet.sendGreet(genchat, unvMember);
  } catch (error) {
    return;
  }
  console.log("Message sent");
});

// button reaction role protocol
user.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isButton()) return;

  try {
    const rrID = interaction.customId;
    const rr = interaction.guild.roles.cache.get(rrID);
    const rrMember = interaction.member;

    if (!rr) {
      return interaction.reply({
        content: "Role not found dumbass!!",
        flags: [MessageFlags.Ephemeral],
      });
    }
    if (rrMember.roles.cache.has(rrID)) {
      await rrMember.roles.remove(rr);
      return interaction.reply({
        content: `<:rizz:1339527760711782431> <@${rrMember.id}>, I removed this role in your profile: **${rr.name}**`,
        flags: [MessageFlags.Ephemeral],
      });
    } else {
      await rrMember.roles.add(rr);
      return interaction.reply({
        content: `<:rizz:1339527760711782431> <@${rrMember.id}>, I added this role in your profile: **${rr.name}**`,
        flags: [MessageFlags.Ephemeral],
      });
    }
  } catch (error) {
    console.error(
      "Now im the dum dum. There has been a error when trying to add or remove a role:",
      error
    );
    return interaction.reply({
      content:
        "<:rizzcri:1339527910414880778> Sorry im a dum dum. i failed to assign your role :((",
      flags: [MessageFlags.Ephemeral],
    });
  }
});

user.login(process.env.V_BOT_TOKEN);
