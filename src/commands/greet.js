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

        // change the image URL to the image or gif you want (actually feel free to edit this whole embed lol just make sure you do the same in the actual greet embed)
        const embed = new EmbedBuilder()
            .setColor('#CDF7F6')
            .setAuthor({ 
                name: '✅ Verification Successful!',
                iconURL: interactionOrMessage.guild?.iconURL({ size: 512 }) ?? '' 
            })
            .setTitle('**ᴄᴏᴢʏ ʀʜ ᴄᴀꜰᴇ 🍓 server**')
            .setDescription(`Welcome ${user}!\n\nMake sure to read the <#1335169467424178266> and get your <#1335169556594823198> in these respective channels.\nHope you enjoy your stay in the server!`)
            .setThumbnail(user.avatarURL({ extension: 'png', size: 512 }))
            .setImage('https://media.discordapp.net/attachments/1335172660182646927/1339065138589732915/greet_gif.gif?ex=67ad5d17&is=67ac0b97&hm=cd7e5417333194473cfb73a1eb087f2016d6867a5253241d3981c1b04982e936&=&width=622&height=346')
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