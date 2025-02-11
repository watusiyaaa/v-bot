const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('avatarget')
        .setDescription('Displays the avatar of the specified user')
        .addUserOption(option => 
            option.setName('user')
                .setDescription('The user to get the avatar of')
                .setRequired(false)),
    async execute(interaction) {
        const user = interaction.options.getUser('user') ?? interaction.user;
        const embed = new EmbedBuilder()
        .setColor('#CDF7F6')
        .setAuthor({ name: user.tag, iconURL: user.avatarURL({ size: 512 }) ?? '' })
        .setTitle(`This is the profile of ${user.tag}`)
        .setImage(user.displayAvatarURL({ size: 512 })); 

    await interaction.reply({ embeds: [embed] });
    },
};