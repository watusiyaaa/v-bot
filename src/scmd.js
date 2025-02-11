const { Client, Events, EmbedBuilder, GatewayIntentBits } = require('discord.js');
   
const client = new Client(
    { intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages
        ] 
    });
 
    registerCommands(client);
    

function registerCommands(client) {
    client.on(Events.InteractionCreate, async interaction => {

        if (!interaction.isCommand()) return;

        const { commandName } = interaction;

        if (commandName === 'greet') {
            const embed = new EmbedBuilder()
                .setColor('#CDF7F6')
                .setAuthor({ 
                name: '✅ Verification Successful!',
                iconURL: interaction.guild?.iconURL({ size: 512 }) ?? '' 
                })
                .setTitle('**ᴄᴏᴢʏ ʀʜ ᴄᴀꜰᴇ 🍓 server**')
                .setDescription(`Welcome ${interaction.user}!\n\nMake sure to read the <#1335169467424178266> and get your <#1335169556594823198> in these respective channels.\nHope you enjoy your stay in the server!`)
                .setThumbnail(interaction.user.avatarURL({ extension: 'png', size: 512 }))
                .setImage('https://media.discordapp.net/attachments/1288865167320416266/1298934742720450571/Apartamento_Qualquer_Banner_GIF_-_Apartamento_Qualquer_Banner_Banner_-_Discover__Share_GIFs.gif?ex=67a0863f&is=679f34bf&hm=4540cc4c26dc0e4be5da8158f40f482f7fbb12ae64843e74ea98fd7333d3ae68&=&width=622&height=346')
                .setFooter({ text: `You're our ${interaction.guild ? getOrdinalSuffix(interaction.guild.memberCount) : 'unknown'} member!` })
                .setTimestamp(new Date());

            await interaction.reply({ embeds: [embed] });
        } else if (commandName === 'avatarget') {
            const user = interaction.options.getUser('user') ?? interaction.user;
            const embed = new EmbedBuilder()
                .setColor('#CDF7F6')
                .setAuthor({ name: user.tag, iconURL: user.avatarURL({ size: 512 }) ?? '' })
                .setTitle(`This is the profile of ${user.tag}`)
                .setImage(user.displayAvatarURL({ size: 512 })); 

            await interaction.reply({ embeds: [embed] });
        } 
    });
}

function getOrdinalSuffix(n) {
    const s = ["th", "st", "nd", "rd"],
          v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

module.exports = { registerCommands };