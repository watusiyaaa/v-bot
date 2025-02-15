//reaction role maker cmd (prefix only)
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, Colors, AllowedMentionsTypes } = require('discord.js');

// Color name to hex mapping
const colorMap = {
    'white': Colors.White,
    'black': Colors.Black,
    'red': Colors.Red,
    'green': Colors.Green,
    'blue': Colors.Blue,
    'yellow': Colors.Yellow,
    'purple': Colors.Purple,
    'pink': Colors.Fuchsia,
    'orange': Colors.Orange
};

function resolveColor(color) {
    if (color.startsWith('#')) {
        return parseInt(color.slice(1), 16);
    }
    return colorMap[color.toLowerCase()] || Colors.Default;
}

module.exports = {
    name: 'rr',
    description: 'Reaction role command',
    async execute(message, args) {
        if (args[0] !== 'make') return;

        // Step 1: Ask for channel
        const channelPrompt = await message.channel.send('Which channel should the reaction role message be sent to?');
        const channelFilter = m => m.author.id === message.author.id;
        
        try {
            const channelResponse = await message.channel.awaitMessages({
                filter: channelFilter,
                max: 1,
                time: 30000,
                errors: ['time']
            });

            const channel = channelResponse.first().mentions.channels.first();
            if (!channel) {
                return message.channel.send('That isn\'t a valid channel dum dum. Try again.');
            }

            // Step 2: Ask for message content
            const messagePrompt = await message.channel.send('The custom message. **Strictly follow the following format:**\n\n```Title | Message Description```\n\nYou can use **[ROLES]** if you want the role to appear in the message.');
            
            const messageResponse = await message.channel.awaitMessages({
                filter: channelFilter,
                max: 1,
                time: 30000,
                errors: ['time']
            });

            let [title, description] = messageResponse.first().content.split('|').map(s => s.trim());

            // Step 3: Ask for message type
            const typePrompt = await message.channel.send('Do you want your custom message to be __"text"__ or __"embed"__?');
            
            const typeResponse = await message.channel.awaitMessages({
                filter: channelFilter,
                max: 1,
                time: 30000,
                errors: ['time']
            });

            const messageType = typeResponse.first().content.toLowerCase();
            let embedColor = null;

            if (messageType === 'embed') {
                const colorPrompt = await message.channel.send('Provide the embed\'s color (can be a color name or a hex code)\n\n-# Example color names: **white, black, red, green, blue, yellow, purple, pink, orange**\n-# Example hex code: **#ff0000**');
                
                const colorResponse = await message.channel.awaitMessages({
                    filter: channelFilter,
                    max: 1,
                    time: 30000,
                    errors: ['time']
                });

                embedColor = colorResponse.first().content;
            }

            // Step 4: Role assignment
            const rolePrompt = await message.channel.send('Add the roles. **Strictly follow the following format:**\n```:emoji: @role```\nType **"done"** when finished:');
            
            const roles = [];
            const roleCollector = message.channel.createMessageCollector({
                filter: channelFilter,
                time: 60000
            });

            roleCollector.on('collect', async m => {
                if (m.content.toLowerCase() === 'done') {
                    roleCollector.stop();
                    return;
                }

                const [emoji, role] = m.content.split(' ').map(s => s.trim());
                const mentionedRole = m.mentions.roles.first();
                
                if (!emoji || !mentionedRole) {
                    return message.channel.send('Not the right format dum dum. **Strictly follow the following format:** \n```:emoji: @role```');
                }

                roles.push({ emoji, role: mentionedRole });
                await m.react('✅');
            });

            roleCollector.on('end', async () => {
                if (roles.length === 0) {
                    return message.channel.send('You haven\'t added any roles dum dum. Im shutting the command...');
                }

                // Create buttons
                const buttons = roles.map(r => 
                    new ButtonBuilder()
                        .setCustomId(r.role.id)
                        .setLabel(r.role.name)
                        .setStyle(ButtonStyle.Primary)
                        .setEmoji(r.emoji)
                );

                const row = new ActionRowBuilder().addComponents(buttons);

                // Create message content
                let content;
                if (messageType === 'embed') {
                    const embed = new EmbedBuilder()
                        .setTitle(title)
                        .setDescription(description.replace('[ROLES]', roles.map(r => `${r.emoji} ${r.role}`).join('\n')))
                        .setColor(resolveColor(embedColor || 'white'));

                    content = { embeds: [embed], components: [row] };
                } else {
                    content = {
                        content: `**${title}**\n${description.replace('[ROLES]', roles.map(r => `${r.emoji} ${r.role}`).join('\n'))}`,
                        components: [row]
                    };
                }

                // Send message
                try {
                    await channel.send(content);
                    message.reply({
                        content: 'Reaction role added. Not bad admin <:hannmew:1339530761807855669>',
                        allowedMentions: { repliedUser: false },
                        components: [row]
                    });
                } catch (error) {
                    console.error('Error sending reaction role message:', error);
                    message.channel.send('Now im the dum dum. I couldn\'t send the message. Please try again (unfortunately).');
                }
            });
        } catch (error) {
            console.error('Error in reaction role command:', error);
            message.channel.send('Now im the dum dum. I got timed out or have encountered an error. Please try again (unfortunately).');
        }
    },
    async executeSlash(interaction) {
        await interaction.reply({ content: 'Its only available as a prefix command.', ephemeral: true });
    }
};
