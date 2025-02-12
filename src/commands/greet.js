const { EmbedBuilder, SlashCommandBuilder, PermissionsBitField } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('greet')
        .setDescription('Sends a greeting message'),
    name: 'greet',
    description: 'Sends a greeting message',
    async execute(interactionOrMessage, args) {
        let user;
        if (interactionOrMessage.isCommand) {
            // Slash command
            user = interactionOrMessage.user;
            member = interactionOrMessage.guild.members.cache.get(user.id);
        } else {
            // Prefix command
            user = interactionOrMessage.author;
            member = interactionOrMessage.guild.members.cache.get(user.id);
        }

        if (!member.permissions.has(PermissionsBitField.Flags.Administrator)) {
            return interactionOrMessage.reply({ content: 'You are not an admin!', ephemeral: true });
        }

        const embed = new EmbedBuilder()
            .setColor('#CDF7F6')
            .setAuthor({ 
                name: '✅ Verification Successful!',
                iconURL: interactionOrMessage.guild?.iconURL({ size: 512 }) ?? '' 
            })
            .setTitle('**ᴄᴏᴢʏ ʀʜ ᴄᴀꜰᴇ 🍓 server**')
            .setDescription(`Welcome ${user}!\n\nMake sure to read the <#1335169467424178266> and get your <#1335169556594823198> in these respective channels.\nHope you enjoy your stay in the server!`)
            .setThumbnail(user.avatarURL({ extension: 'png', size: 512 }))
            .setImage('https://media.discordapp.net/attachments/1288865167320416266/1298934742720450571/Apartamento_Qualquer_Banner_GIF_-_Apartamento_Qualquer_Banner_Banner_-_Discover__Share_GIFs.gif?ex=67a0863f&is=679f34bf&hm=4540cc4c26dc0e4be5da8158f40f482f7fbb12ae64843e74ea98fd7333d3ae68&=&width=622&height=346')
            .setFooter({ text: `You're our ${interactionOrMessage.guild ? getOrdinalSuffix(interactionOrMessage.guild.memberCount) : 'unknown'} member!` })
            .setTimestamp(new Date());

        if (interactionOrMessage.isCommand) {
            await interactionOrMessage.reply({ embeds: [embed] });
        } else {
            await interactionOrMessage.reply({ embeds: [embed] });
        }
    },
};

function getOrdinalSuffix(n) {
    const s = ["th", "st", "nd", "rd"],
          v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
}