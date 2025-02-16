const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('avatar')
        .setDescription('Gets the avatar of the user')
        .addUserOption(option => 
            option.setName('user')
                .setDescription('The user whose avatar you want to get')
                .setRequired(false)),
    name: 'avatar',
    description: 'Gets the avatar of the user',
    async execute(message, args) {
        const user = message.mentions.users.first() || message.author;

        const embed = new EmbedBuilder()
            .setColor('#CDF7F6')
            .setAuthor({
                name: `${user.username}'s Avatar`,
                iconURL: user.displayAvatarURL(),
            })
            .setImage(user.displayAvatarURL({ dynamic: true, size: 512 }))
            .setFooter({ text: `Execute` })
            .setTimestamp();

        await message.reply({ embeds: [embed] });
    },
    
    async executeSlash(interaction) {
        const user = interaction.options.getUser('user') || interaction.user;
        
        const embed = new EmbedBuilder()
            .setColor('#CDF7F6')
            .setAuthor({
                name: `${user.username}'s Avatar`,
                iconURL: user.displayAvatarURL(),
            })
            .setImage(user.displayAvatarURL({ dynamic: true, size: 512 }))
            .setFooter({ text: `Execute` })
            .setTimestamp();

        await interaction.reply({ embeds: [embed] });
    }
};
