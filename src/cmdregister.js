// for registering the slash cmds

const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { Client, GatewayIntentBits } = require('discord.js');
const dotenv = require('dotenv');

dotenv.config();

const commands = [
    new SlashCommandBuilder().setName('greet').setDescription('testing the greet embed'), //this is an admin only cmd
    new SlashCommandBuilder().setName('avatarget').setDescription('getting a user avatar or profile')
        .addUserOption(option => option.setName('user').setDescription('Who you want to get the avatar from')),
].map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(process.env.V_BOT_TOKEN);

(async () => {
    try {
        console.log('Registering slash cmds......');

        await rest.put(
            Routes.applicationGuildCommands(process.env.V_BOT_ID, process.env.CRC_ID),
            { body: commands },
        );

        console.log('It got in!');
    } catch (error) {
        console.error(error);
    }
})();

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', () => {
    console.log('Now online!');
});

client.login(process.env.V_BOT_TOKEN);