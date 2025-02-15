const { REST, Routes } = require('discord.js');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

module.exports = function registerCommands(client) {
    const commands = [];
    const commandsPath = path.join(__dirname); // Corrected path
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js') && file !== 'commands.js');

    for (const file of commandFiles) {
        const command = require(path.join(commandsPath, file));
        // Only push slash commands that have data property
        if (command.data) {
            commands.push(command.data.toJSON());
        }
        // Register prefix commands
        if (command.name) {
            client.commands.set(command.name, command);
        }
    }

    const rest = new REST({ version: '10' }).setToken(process.env.V_BOT_TOKEN);

    (async () => {
        try {
            console.log('Registering the commands...');

            await rest.put(
                Routes.applicationGuildCommands(client.user.id, process.env.CRC_ID),
                { body: commands },
            );

            console.log('Its now in!!');
        } catch (error) {
            console.error(error);
        }
    })();
};
