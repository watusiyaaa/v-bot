const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('avatar')
        .setDescription('Gets the avatar of the user')
        .addUserOption(option => 
            option.setName('user')
                .setDescription('Which user you want to get their avatar on?')
                .setRequired(false)), // false - optional, true - required
    name: 'avatar',
    description: 'Gets the avatar of the user',
    async execute(interactionOrMessage, args) {
        let user;
        if (interactionOrMessage.isCommand) {
            // Slash command
            user = interactionOrMessage.options.getUser('target') || interactionOrMessage.user;
        } else {
            // Prefix command
            user = interactionOrMessage.mentions.users.first() || interactionOrMessage.author;
        }

        const embed = new EmbedBuilder()
            .setColor('#CDF7F6')
            .setTitle(`${user.username}'s Avatar`)
            .setImage(user.displayAvatarURL({ dynamic: true, size: 512 }))
            .setFooter({ text: `Execute` })
            .setTimestamp();

        if (interactionOrMessage.isCommand) {
            await interactionOrMessage.reply({ embeds: [embed] });
        } else {
            await interactionOrMessage.reply({ embeds: [embed] });
        }
    },
};