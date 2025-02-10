const { SlashCommandBuilder } = require('discord.js');

function registerCommands(client) {
    const commands = [
        new SlashCommandBuilder()
            .setName('ping')
            .setDescription('Replies with Pong!'),
        new SlashCommandBuilder()
            .setName('beep')
            .setDescription('Replies with Boop!'),
        // Add more commands as needed
    ].map(command => command.toJSON());

    client.application.commands.set(commands)
        .then(() => console.log('Commands registered successfully'))
        .catch(console.error);
}

module.exports = { registerCommands };