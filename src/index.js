/* the main file, things to remember:
  - all of the js files under src folder will be imported on this file, so that i will only be executing this file
  - the only logic function on this file will only be the verification protocol. */

const { Client, Events, GatewayIntentBits, EmbedBuilder, Collection, MessageFlags } = require('discord.js');

const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');
const registerCommands = require('./commands/commands');
const status = require('./botstatus');



dotenv.config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent,
    ]
});

// for registering the commands.js (and its subcommands) to the bot
client.commands = new Collection();
const prefix = '.'; // Define your prefix here
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js') && file !== 'commands.js');

for (const file of commandFiles) {
    const command = require(path.join(commandsPath, file));
    client.commands.set(command.name, command);
}

status(client); // Pass the client object here



// the 2 codes are for telling the bot that it is online
client.once('ready', () => {
    console.log(`Logging in as ${client.user.tag}...`);
    registerCommands(client);  // Pass the client object here
});

client.once(Events.ClientReady, async (c) => {
    console.log(`${c.user?.tag} is now online!`);
});

// Handling interactions (slash cmd)
client.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
        if (command.executeSlash) {
            await command.executeSlash(interaction);
        } else {
            await interaction.reply({ content: 'Its only available as a prefix command.', flags: [MessageFlags.Ephemeral] });
        }
    } catch (error) {
        console.error(error);
        await interaction.reply({ content: 'There was an error while executing this command!', flags: [MessageFlags.Ephemeral] });
    }
});

// Handling prefix commands
client.on(Events.MessageCreate, async (message) => {
    // Handle type commands
    if (message.content === 'reqs' && !message.author.bot) {
        const tcmd = require('./typecmd');
        tcmd.run(message);
        return;
    }
    
    // Handle prefix commands
    if (!message.content.startsWith(prefix) || message.author.bot) return;


    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName) ||
                    client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if (!command) return;

    try {
        await command.execute(message, args);
    } catch (error) {
        console.error(error);
        await message.reply({ content: 'There was an error while executing this command!', ephemeral: true });
    }
});

// Logging the reaction added by the user
client.on(Events.MessageCreate, async (message) => {
    if (message.channel.id !== process.env.VERIFY_CHANNEL) return;

    const adminChannelId = process.env.ADMIN_CHANNEL;
    if (!adminChannelId) {
        console.log('Admin channel ID not found in environment variables');
        return;
    }

    const adminChannel = message.guild?.channels.cache.get(adminChannelId);
    if (!adminChannel || !adminChannel.isTextBased()) {
        console.log('Admin channel not found or not text-based');
        return;
    }

    // for notifying the admin on the proof of the user
    const embed = new EmbedBuilder()
        .setColor('#CDF7F6')
        .setTitle('A NEW MEMBER HAS JOINED!')
        .setDescription(`${message.author.tag} has joined the server and is waiting to be verified!
            React with <a:loading:1336976196365451296> or ✅ to accept the new member!`)
        .addFields(
            { name: 'Message Content', value: message.content },
            { name: 'Message Link', value: `[Do the honors of accepting it <a:SOWICKED:1337017979564458025>](${message.url})` }
        )
        .setTimestamp(new Date());

    try {
        await adminChannel.send({ embeds: [embed] });
        console.log('Admin notification sent');
    } catch (error) {
        console.error('Error sending admin notification:', error);
    }
});

// this is the verification protocol
client.on(Events.MessageReactionAdd, async (reaction, user) => {
    if (user.bot) return;

    if (reaction.message.channel.id !== process.env.VERIFY_CHANNEL) return;

    const cEID = process.env.EMOJI;
    const EID = '✅';
    if (!cEID) return;

    if (reaction.emoji.id !== cEID && reaction.emoji.name !== EID) return;

    const targetUser = reaction.message.author;
    if (!targetUser || targetUser.bot) return;

    let member = reaction.message.guild?.members.cache.get(targetUser.id);
    if (!member) {
        try {
            member = await reaction.message.guild?.members.fetch(targetUser.id);
        } catch (error) {
            return;
        }
    }

    if (!member) return;

    const verifyRoleId = process.env.VERIFIED_ROLE;
    if (!verifyRoleId) return;

    const role = reaction.message.guild?.roles.cache.get(verifyRoleId);
    if (!role) return;

    try {
        await member.roles.add(role);
    } catch (error) {
        return;
    }

    console.log(`User ${targetUser.tag} has been verified!`);

    const generalChannelId = process.env.GENCHAT_ID;
    if (!generalChannelId) return;

    const generalChannel = reaction.message.guild?.channels.cache.get(generalChannelId);
    if (!generalChannel || !generalChannel.isTextBased()) return;

    // your changes on greet.js must be the same here too
    const embed = new EmbedBuilder()
        .setColor('#CDF7F6')
        .setAuthor({ 
            name: '✅ Verification Successful!',
            iconURL: reaction.message.guild?.iconURL({ size: 512 }) ?? '' 
            })
        .setTitle('**ᴄᴏᴢʏ ʀʜ ᴄᴀꜰᴇ 🍓 server**')
        .setDescription(`**Welcome <@${targetUser.id}>!**\n\nMake sure to read the <#1335169467424178266> and get your <#1335169556594823198> in these respective channels.\nHope you enjoy your stay in the server!`)
        .setThumbnail(user.displayAvatarURL({ extension: 'png', size: 512 }))
        .setImage('https://media.discordapp.net/attachments/1335172660182646927/1339065138589732915/greet_gif.gif?ex=67ad5d17&is=67ac0b97&hm=cd7e5417333194473cfb73a1eb087f2016d6867a5253241d3981c1b04982e936&=&width=622&height=346')
        .setFooter({ text: `You're our ${reaction.message.guild ? getOrdinalSuffix(reaction.message.guild.memberCount) : 'unknown'} member!` })
        .setTimestamp(new Date());

    try {
        await generalChannel.send({ embeds: [embed] });
    } catch (error) {
        return;
    }
    console.log('Greet message sent');
});

// Button reaction role
client.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isButton()) return;

    try {
        const roleId = interaction.customId;
        const role = interaction.guild.roles.cache.get(roleId);
        const member = interaction.member;

        if (!role) {
            return interaction.reply({ content: 'Role not found dumbass!!', flags: [MessageFlags.Ephemeral] });
        }

        if (member.roles.cache.has(roleId)) {
            await member.roles.remove(role);
            return interaction.reply({ content: `<:rizz:1339527760711782431> I removed this role in your profile: **${role.name}**`, flags: [MessageFlags.Ephemeral] });
        } else {
            await member.roles.add(role);
            return interaction.reply({ content: `<:rizz:1339527760711782431> I added this role in your profile: **${role.name}**`, flags: [MessageFlags.Ephemeral] });
        }
    } catch (error) {
        console.error('Now im the dum dum. There has been a error when trying to add or remove a role:', error);
        return interaction.reply({ content: '<:rizzcri:1339527910414880778> Sorry im a dum dum. i failed to assign your role :((', flags: [MessageFlags.Ephemeral] });
    }
});

client.login(process.env.V_BOT_TOKEN);

function getOrdinalSuffix(n) {
    const s = ["th", "st", "nd", "rd"],
          v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
}
