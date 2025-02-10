const { SlashCommandBuilder } = require('discord.js');

module.exports = (client) => {
    const commands = [
        new SlashCommandBuilder()
            .setName('ping')
            .setDescription('Replies with Pong!'),
        new SlashCommandBuilder()
            .setName('beep')
            .setDescription('Replies with Boop!'),
        // Add more commands as needed
    ].map(command => command.toJSON());

    client.on('ready', async () => {
        const guilds = client.guilds.cache.map(guild => guild.id);
        for (const guildId of guilds) {
            const guild = client.guilds.cache.get(guildId);
            await guild.commands.set(commands);
            console.log(`Commands registered for ${guild.name}`);
        }
    });
};