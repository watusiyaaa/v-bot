// (RHYTHM HIVE) showing total gem count for one song, all easy to super hard
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { aliases } = require('./calc');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('gemcount')
        .setDescription('How many gems you can get from one song? (Like clearing all of them?)'),
        
    name: 'gemcount',
    aliases: ['gc'],
    description: 'How many gems you can get from one song? (Like clearing all of them?)',

        async executeSlash(interaction) {
            const Gembed = new EmbedBuilder()
            .setColor('#CDF7F6')
            .setThumbnail('https://media.discordapp.net/attachments/1341215784327843980/1357220209051832380/37363495234.png?ex=67ef6951&is=67ee17d1&hm=57542604231351153d0f046fd342a29838d93cd4f175490120811a8f5e98899b&=&format=webp&quality=lossless&width=1001&height=876')
            .setTitle('**RH Gem Count**')
            .setDescription('**How many gems you can get from one song?** `(Like clearing all of them?)`')
            .addFields(
                { name: 'Difficulty Clear', value: '*Easy = 2 | Normal = 2 | Hard = 2 | Super Hard = 3* **`Total:` 9**'},
                { name: 'Number of Clears', value: '*1 = 2 | 10 = 5 | 20 = 5 | 30 = 5 | 50 = 10* **`Total:` 27**'},
                { name: 'Score `(assuming your cards can clear until EX grade on each difficulty)`', value: '*Easy = 14 | Normal = 22 | Hard = 33 | Super Hard = 49* **`Total:` 118**'},
                { name: 'Combo', value: '*Easy = 10 | Normal = 17 | Hard = 35 | Super Hard = 54* **`Total:` 116**'},
                { name: '\u200B', value: '──────────────────────────────────────────────', inline: false },
                { name: 'Grand Total', value: 'If you\'ve been working hard and finished all of them...\n**`GrandTotal:` 270 Gems!**'},
                { name: '`For non-renewed song`', value: 'Will include this since it doesn\'t have Super Hard\n **`GrandTotal:` 164 Gems!**'}
            )
            .setFooter({ text: 'Note: Some non-renewed songs have Super Hard' })

            await interaction.reply({ embeds: [Gembed] });
        },

        async execute(gcpr) {
            const Gembed = new EmbedBuilder()
            .setColor('#CDF7F6')
            .setThumbnail('https://media.discordapp.net/attachments/1341215784327843980/1357220209051832380/37363495234.png?ex=67ef6951&is=67ee17d1&hm=57542604231351153d0f046fd342a29838d93cd4f175490120811a8f5e98899b&=&format=webp&quality=lossless&width=1001&height=876')
            .setTitle('**RH Gem Count**')
            .setDescription('**How many gems you can get from one song?** `(Like clearing all of them?)`')
            .addFields(
                { name: 'Difficulty Clear', value: '*Easy = 2 | Normal = 2 | Hard = 2 | Super Hard = 3* **`Total:` 9**'},
                { name: 'Number of Clears', value: '*1 = 2 | 10 = 5 | 20 = 5 | 30 = 5 | 50 = 10* **`Total:` 27**'},
                { name: 'Score `(assuming your cards can clear until EX grade on each difficulty)`', value: '*Easy = 14 | Normal = 22 | Hard = 33 | Super Hard = 49* **`Total:` 118**'},
                { name: 'Combo', value: '*Easy = 10 | Normal = 17 | Hard = 35 | Super Hard = 54* **`Total:` 116**'},
                { name: '\u200B', value: '──────────────────────────────────────────────', inline: false },
                { name: 'Grand Total', value: 'If you\'ve been working hard and finished all of them...\n **`GrandTotal:` 270 Gems!**'},
                { name: '`For non-renewed song`', value: 'Will include this since it doesn\'t have Super Hard\n **`GrandTotal:` 164 Gems!**'}
            )
            .setFooter({ text: 'Note: Some non-renewed songs have Super Hard' })

            await gcpr.reply({
                embeds: [Gembed],
                allowedMentions: { repliedUser: false }
            });
        }
};