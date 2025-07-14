/* This code snippet is a JavaScript function that registers commands for a Discord bot. Here's a
breakdown of what it does: */
const { REST, Routes } = require("discord.js");
const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();

module.exports = function registerCommands(client) {
  const commands = [];
  const commandsPath = path.join(__dirname); // Corrected path
  const commandFiles = fs
    .readdirSync(commandsPath)
    .filter((file) => file.endsWith(".js") && file !== "commands.js");

  /* This part of the code snippet is a loop that iterates over each file in the `commandFiles` array,
which contains the list of JavaScript files in the specified directory. For each file, it tries to
require the file as a module using `require(path.join(commandsPath, file))`. */
  for (const file of commandFiles) {
    try {
      const command = require(path.join(commandsPath, file));

      // Validate command structure
      if (!command.name) {
        console.error(`Command ${file} is missing required 'name' property`);
        continue;
      }

      // Register slash commands
      if (command.data) {
        if (typeof command.executeSlash !== "function") {
          console.error(
            `Slash command ${command.name} is missing executeSlash method`
          );
        } else {
          commands.push(command.data.toJSON());
        }
      }

      // Register prefix commands
      if (typeof command.execute === "function") {
        client.commands.set(command.name, command);
      } else {
        console.error(`Command ${command.name} is missing execute method`);
      }
    } catch (error) {
      console.error(`Error loading command ${file}:`, error);
    }
  }

  /* This part of the code snippet is responsible for registering slash commands for a Discord bot. */
  const rest = new REST({ version: "10" }).setToken(process.env.V_BOT_TOKEN);

  (async () => {
    try {
      // console.log(`Registering ${commands.length} slash commands...`);

      if (commands.length > 0) {
        const data = await rest.put(
          Routes.applicationGuildCommands(client.user.id, process.env.CRC_ID),
          { body: commands }
        );
        console.log(
          `${data.length} slash commands has been sucessfuly registered!😁`
        );
      } else {
        console.log("No slash commands to register");
      }
    } catch (error) {
      console.error("Failed to register commands:", error);
      if (error.code === 50001) {
        console.error(
          'Missing Access - Ensure the bot has the "application.commands" scope'
        );
      }
    }
  })();
};
