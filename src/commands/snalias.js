// alias
const { SlashCommandBuilder, EmbedBuilder, AllowedMentionsTypes } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('snalias')
        .setDescription('Alias list for song notes commands'),

    name: 'snalias',
    description: 'Alias list for song notes commands',

    async executeSlash(interaction) {
        const alembed = new EmbedBuilder()
            .setColor('#CDF7F6')
            .setTitle('**Song notes alias**')
            .setDescription('Song notes command structure: `.songnotes/.sn <group>`\n-# Legend: <:nonrn:1344330008486740049> - **Non-renewed Song**')
            .addFields(
                { name: '__BTS__', value: '`bangtan` or `bts`' },
                { name: '__Tomorrow X Together__', value: '`tubatu` or `txt`' },
                { name: '__Enhypen__', value: '`enhypen` or `enha`' },
                { name: '__Seventeen__', value: '`seventeen` or `svt`' },
                { name: '__Le Sserafim__', value: '`lesserafim` or `lsf`' },
                { name: '__Newjeans__', value: '`newjeans` or `nj`' },
                { name: '__Boynextdoor__', value: '`boynextdoor` or `bnd`' },
                { name: '__Illit__', value: '`illit` or `ilt`' }
            );

        await interaction.reply({ embeds: [alembed] });
    },

    async execute(alpr) {
        const alembed = new EmbedBuilder()
            .setColor('#CDF7F6')
            .setTitle('**Song notes alias**')
            .setDescription('**__Song notes command structure:__** \n`.songnotes/.sn <group> soloist (<= only works for bts)`\n-# Legend: <:nonrn:1344330008486740049> - **Non-renewed Song**')
            .addFields(
                { name: '__BTS__', value: '`bangtan` or `bts`' },
                { name: '__Tomorrow X Together__', value: '`tubatu` or `txt`' },
                { name: '__Enhypen__', value: '`enhypen` or `enha`' },
                { name: '__Seventeen__', value: '`seventeen` or `svt`' },
                { name: '__Le Sserafim__', value: '`lesserafim` or `lsf`' },
                { name: '__Newjeans__', value: '`newjeans`, `nj`, or `njz`' },
                { name: '__Boynextdoor__', value: '`boynextdoor` or `bnd`' },
                { name: '__Illit__', value: '`illit` or `ilt`' }
            );
        await alpr.reply({
            embeds: [alembed],
            allowedMentions: { repliedUser: false }
        });
    }
};
