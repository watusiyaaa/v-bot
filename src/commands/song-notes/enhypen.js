//enhypen song notes info file
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports={
    name: 'enhypen',
    description: 'Shows enha song information.',

    async execute(msg, args) {
        const pages=[
            // copy the whole album page bracket from the reference.js here
        ]

        // DO NOT TOUCH THIS PART!! just wanna make sure you know this part is here and that you know how the code works hehe
        let currentPage=0;
        const enhaembed = new EmbedBuilder()
        .setTitle(pages[currentPage].title)
        .addFields(pages[currentPage].fields)
        .setColor('#CDF7F6')
        .setThumbnail(pages[currentPage].thumbnail)
        .setFooter({ text: `Page ${currentPage+1}/${pages.length}` });

        const row = new ActionRowBuilder()
            .addComponents(
            new ButtonBuilder()
                    .setCustomId('previous')
                    .setLabel('◀️')
                    .setStyle(ButtonStyle.Secondary)
                    .setDisabled(true),
            new ButtonBuilder()
                    .setCustomId('next')
                    .setLabel('▶️')
                    .setStyle(ButtonStyle.Secondary)
            );
    
    const enhamsg = await msg.channel.send({
        embeds: [enhaembed],
        components: [row]
    });

    const filter = i => i.user.id === msg.author.id;
    const collector = enhamsg.createMessageComponentCollector({ time: 360000, filter });

    collector.on('collect', async i => {
        try {
            if (i.customId === 'previous') {
                currentPage--;
            } else if (i.customId === 'next') {
                currentPage++;
            }

            row.components[0].setDisabled(currentPage===0);
            row.components[1].setDisabled(currentPage===pages.length-1);

             enhaembed
                .setTitle(pages[currentPage].title)
                .setFields(pages[currentPage].fields)
                .setThumbnail(pages[currentPage].thumbnail)
                .setFooter({ text: `Page ${currentPage+1}/${pages.length}` });

            await i.update({
                embeds: [enhaembed],
                components: [row]
            });
        } catch (error) {
            if (error.code !== 10062 && error.code !== 40060) {
                console.error('Button interaction error:', error);
            }
            collector.stop();
        }
    });

    collector.on('end', ()=>{
        try {
            enhamsg.edit({ components: [] }).catch(()=>{});
        } catch (error) {
            console.error('Error cleaning up comonents:', error);
        }
    });
    }
};