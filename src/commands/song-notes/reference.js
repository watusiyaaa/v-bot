/* Hi! This is your reference file
   1st: Put albums first. How you put the albums is oldest first until newest release.
   2nd: If there's units like BSS (except if they're part of the album track), or like remixes or versions
        (like that acoustic ver from txt) put it in a seperate page AFTER albums. (Units first before the remixes and stuff)
   3rd: if there's soloist songs, put it AFTER units or remixes */

// <group name> song notes info file
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports={
    name: '<Enter group name here>',
    description: 'Shows <group name> song information.',

    async execute(msg, args) {
        const pages=[
            // copy this whole bracket for the next album (or next page)
           {
               title: '**<Album name>**',
               thumbnail: '<no need to put anything here, ill do this part>',
               footer: '<no need to put anything here, ill do this part>',
               fields: [

                // copy this whole bracket to put another song
                   {
                       name: '**<Song Name> | `lvl.<lvl number>`**',
                       value: '__Short notes:__ `<change for the actual notes>` __Short length:__ `<change for the actual length>`\n__Full notes:__ `<change for the actual notes>` __Full length:__ `<change for the actual length>`'
                   },

                // if the song is non-renewed, copy this whole bracket
                   {
                       name: '**<:nonrn:1344330008486740049> <Song Name> | `lvl.<lvl number>`**',
                       value: '__Short notes:__ `<change for the actual notes>` __Short length:__ `<change for the actual length>`\n__Full notes:__ `<change for the actual notes>` __Full length:__ `<change for the actual length>`'
                   },
               ]
           }, // end of album bracket

        ]

        // DO NOT TOUCH THIS PART!! just wanna make sure you know this part is here and that you know how the code works hehe
        let currentPage=0;
        const rfembed = new EmbedBuilder()
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
    
    const rfmsg = await msg.channel.send({
        embeds: [rfembed],
        components: [row]
    });

    const filter = i => i.user.id === msg.author.id;
    const collector = rfmsg.createMessageComponentCollector({ time: 360000, filter });

    collector.on('collect', async i => {
        try {
            if (i.customId === 'previous') {
                currentPage--;
            } else if (i.customId === 'next') {
                currentPage++;
            }

            row.components[0].setDisabled(currentPage===0);
            row.components[1].setDisabled(currentPage===pages.length-1);

             rfembed
                .setTitle(pages[currentPage].title)
                .setFields(pages[currentPage].fields)
                .setThumbnail(pages[currentPage].thumbnail)
                .setFooter({ text: `Page ${currentPage+1}/${pages.length}` });

            await i.update({
                embeds: [rfembed],
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
            rfmsg.edit({ components: [] }).catch(()=>{});
        } catch (error) {
            console.error('Error cleaning up comonents:', error);
        }
    });
    }
};