const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, Colors } = require('discord.js');

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
        const channelPrompt = await message.channel.send('Please mention the channel where the reaction role should be sent:');
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
                return message.channel.send('That is not a valid channel. Please try again.');
            }

            // Step 2: Ask for message content
            const messagePrompt = await message.channel.send('Please provide the message content in the format:\nTitle | Message Description\nYou can use [ROLES] as a placeholder for roles:');
            
            const messageResponse = await message.channel.awaitMessages({
                filter: channelFilter,
                max: 1,
                time: 30000,
                errors: ['time']
            });

            let [title, description] = messageResponse.first().content.split('|').map(s => s.trim());

            // Step 3: Ask for message type
            const typePrompt = await message.channel.send('Should this be a text message or an embed? (text/embed)');
            
            const typeResponse = await message.channel.awaitMessages({
                filter: channelFilter,
                max: 1,
                time: 30000,
                errors: ['time']
            });

            const messageType = typeResponse.first().content.toLowerCase();
            let embedColor = null;

            if (messageType === 'embed') {
                const colorPrompt = await message.channel.send('Please provide the embed color (color name or hex code):');
                
                const colorResponse = await message.channel.awaitMessages({
                    filter: channelFilter,
                    max: 1,
                    time: 30000,
                    errors: ['time']
                });

                embedColor = colorResponse.first().content;
            }

            // Step 4: Role assignment
            const rolePrompt = await message.channel.send('Please add roles in the format:\n:emoji: @role\nType "done" when finished:');
            
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
                    return message.channel.send('Invalid format. Please use: :emoji: @role');
                }

                roles.push({ emoji, role: mentionedRole });
                await m.react('✅');
            });

            roleCollector.on('end', async () => {
                if (roles.length === 0) {
                    return message.channel.send('No roles were added. Command cancelled.');
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
                    message.channel.send('Reaction role message created successfully!');
                } catch (error) {
                    console.error('Error sending reaction role message:', error);
                    message.channel.send('There was an error creating the reaction role message.');
                }
            });
        } catch (error) {
            console.error('Error in reaction role command:', error);
            message.channel.send('The command timed out or encountered an error. Please try again.');
        }
    }
};
