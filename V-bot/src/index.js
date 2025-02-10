// filepath: /V-bot/V-bot/src/index.js
/* the main file, things to remember:
  - all of the js files under src folder will be imported on this file, so that i will only be executing this file
  - the only logic function on this file will only be the verification protocol. */

const { Client, Events, GatewayIntentBits, EmbedBuilder } = require('discord.js');
require('./cmdregister');
const { registerCommands } = require('./scmd');
const dotenv = require('dotenv');

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

// Telling if the bot's online
client.once(Events.ClientReady, async (c) => {
    console.log(`${c.user?.tag} is now online!`);
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

    const embed = new EmbedBuilder()
        .setColor('#CDF7F6')
        .setTitle('A NEW MEMBER HAS JOINED!')
        .setDescription(`${message.author.tag} has joined the server and is waiting to be verified!
            React with <a:loading:1336976196365451296> to accept the new member!`)
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

client.on(Events.MessageReactionAdd, async (reaction, user) => {
    if (user.bot) return;

    if (reaction.message.channel.id !== process.env.VERIFY_CHANNEL) return;

    const customEmojiId = process.env.EMOJI;
    if (!customEmojiId) return;

    if (reaction.emoji.id !== customEmojiId) return;

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

    const embed = new EmbedBuilder()
        .setColor('#CDF7F6')
        .setAuthor({ 
            name: '✅ Verification Successful!',
            iconURL: reaction.message.guild?.iconURL({ size: 512 }) ?? '' 
            })
        .setTitle('**ᴄᴏᴢʏ ʀʜ ᴄᴀꜱᴇ 🍓 server**')
        .setDescription(`**Welcome <@${targetUser.id}>!**\n\nMake sure to read the <#1335169467424178266> and get your <#1335169556594823198> in these respective channels.\nHope you enjoy your stay in the server!`)
        .setThumbnail(user.displayAvatarURL({ extension: 'png', size: 512 }))
        .setImage('https://media.discordapp.net/attachments/1288865167320416266/1298934742720450571/Apartamento_Qualquer_Banner_GIF_-_Apartamento_Qualquer_Banner_Banner_-_Discover__Share_GIFs.gif?ex=67a0863f&is=679f34bf&hm=4540cc4c26dc0e4be5da8158f40f482f7fbb12ae64843e74ea98fd7333d3ae68&=&width=622&height=346')
        .setFooter({ text: `You're our ${reaction.message.guild ? getOrdinalSuffix(reaction.message.guild.memberCount) : 'unknown'} member!` })
        .setTimestamp(new Date());

    try {
        await generalChannel.send({ embeds: [embed] });
    } catch (error) {
        return;
    }
    console.log('Greet message sent');
});

registerCommands(client);
client.login(process.env.V_BOT_TOKEN);

function getOrdinalSuffix(n) {
    const s = ["th", "st", "nd", "rd"],
          v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
}