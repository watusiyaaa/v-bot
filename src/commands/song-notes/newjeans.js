// nj song notes info file

const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    name: 'newjeans',
    description: 'Shows NewJeans song information',

    async execute(msg, args) {
        // Define pages of content
        const pages = [
            {
                title: '**NewJeans 1st EP "NewJeans"**',
                thumbnail: 'https://images-ext-1.discordapp.net/external/kmaIOhfJn9aEmSmY367bnsFHdcVWXD_I_xIUFPVP5Aw/https/i.scdn.co/image/ab67616d0000b2739d28fd01859073a3ae6ea209?format=webp&width=662&height=662',
                footer: 'Page 1/5',
                fields: [

                    { 
                        name: '**Attention | `lvl.14`**',
                        value: '__Short notes:__ `402` __Short length:__ `1:10`\n__Full notes:__ `1090` __Full length:__ `2:59`'
                    },
                    { 
                        name: '**Hype Boy | `lvl.13`**',
                        value: '__Short notes:__ `380` __Short length:__ `1:01`\n__Full notes:__ `1111` __Full length:__ `2:59`'
                    },
                    { 
                        name: '**Cookie | `lvl.14`**',
                        value: '__Short notes:__ `422` __Short length:__ `1:19`\n__Full notes:__ `1482` __Full length:__ `3:56`'
                    },
                    { 
                        name: '**Hurt | `lvl.11`**',
                        value: '__Short notes:__ `261` __Short length:__ `1:03`\n__Full notes:__ `842` __Full length:__ `2:58`'
                    },
                    { 
                        name: '**Hype Boy (2nd ver.) | `lvl.13`**',
                        value: '__Short notes:__ `339` __Short length:__ `1:01`\n__Full notes:__ `1038` __Full length:__ `2:59`'
                    }
                ]
            },
            {
                title: '**NewJeans 1st Single "OMG"**',
                thumbnail: 'https://images-ext-1.discordapp.net/external/inGPnswmWz2C9LgXMWQLxV5m6EViZ0EvL9rnKoswzYw/https/i.scdn.co/image/ab67616d0000b273d70036292d54f29e8b68ec01?format=webp&width=662&height=662',
                footer: 'Page 2/5',
                fields: [

                    { 
                        name: '**Ditto | `lvl.13`**',
                        value: '__Short notes:__ `253` __Short length:__ `1:01`\n__Full notes:__ `1010` __Full length:__ `3:06`'
                    },
                    { 
                        name: '**OMG | `lvl.14`**',
                        value: '__Short notes:__ `441` __Short length:__ `1:01`\n__Full notes:__ `1319` __Full length:__ `3:32`'
                    }
                ]
            },
            {
                title: '**NewJeans 2nd EP "Get Up"**',
                thumbnail: 'https://images-ext-1.discordapp.net/external/VTU8077GwNIRZGJpHhNCdaspP61h6FPmVEztn3kEYLI/https/i.scdn.co/image/ab67616d0000b2730744690248ef3ba7b776ea7b?format=webp&width=662&height=662',
                footer: 'Page 3/5',
                fields: [

                    { 
                        name: '**Super Shy | `lvl.13`**',
                        value: '__Short notes:__ `259` __Short length:__ `0:57`\n__Full notes:__ `967` __Full length:__ `2:34`'
                    },
                    { 
                        name: '**Cool With You | `lvl.14`**',
                        value: '__Short notes:__ `313` __Short length:__ `1:01`\n__Full notes:__ `796` __Full length:__ `2:28`'
                    },
                    { 
                        name: '**ETA | `lvl.13`**',
                        value: '__Short notes:__ `307` __Short length:__ `0:55`\n__Full notes:__ `983` __Full length:__ `2:31`'
                    },
                    { 
                        name: '**New Jeans | `lvl.12`**',
                        value: '__Short notes:__ `248` __Short length:__ `0:57`\n__Full notes:__ `582` __Full length:__ `1:48`'
                    },
                    { 
                        name: '**ASAP | `lvl.14`**',
                        value: '__Short notes:__ `254` __Short length:__ `0:58`\n__Full notes:__ `925` __Full length:__ `2:14`'
                    },
                    { 
                        name: '**Super Shy (2nd ver.) | `lvl.16`**',
                        value: '__Short notes:__ `454` __Short length:__ `0:57`\n__Full notes:__ `1372` __Full length:__ `2:34`'
                    },
                    { 
                        name: '**Cool With You (2nd ver.) | `lvl.14`**',
                        value: '__Short notes:__ `441` __Short length:__ `1:01`\n__Full notes:__ `1319`  __Full length:__ `2:28`'
                    }
                ]
            },
            {
                title: '**NJWMX**',
                thumbnail: 'https://media.discordapp.net/attachments/1156016633974890586/1186605520698753034/Uk08m3vAJdVxWVy2tSO4hJvCj_IagIqLJ93gRZC3UEd3Hj79cXOUbyjE7k6_VTJqaoSzeIiaS80Pp9Agw544-h544-l90-rj.jpg?ex=67b5a882&is=67b45702&hm=eb73c3589066ffe9e5e2771f4ecb45297c0e6905134875605251510619a0f5d4&=&format=webp&width=662&height=662',
                footer: 'Page 4/5',
                fields: [

                    { 
                        name: '**OMG (FRNK Remix) | `lvl.12`**',
                        value: '__Short notes:__ `400` __Short length:__ `1:21`\n__Full notes:__ `1246` __Full length:__ `3:30`'
                    },
                    { 
                        name: '**Ditto (250 Remix) | `lvl.13`**',
                        value: '__Short notes:__ `370` __Short length:__ `1:05`\n__Full notes:__ `1282` __Full length:__ `3:21`'
                    },
                    { 
                        name: '**Attention (250 Remix) | `lvl.13`**',
                        value: '__Short notes:__ `404` __Short length:__ `1:10`\n__Full notes:__ `1105` __Full length:__ `3:01`'
                    },
                    { 
                        name: '**Hype Boy (250 Remix) | `lvl.12`**',
                        value: '__Short notes:__ `350` __Short length:__ `1:21`\n__Full notes:__ `1232` __Full length:__ `4:11`'
                    },
                    { 
                        name: '**Cookie (FRNK Remix) | `lvl.13`**',
                        value: '__Short notes:__ `453` __Short length:__ `1:19`\n__Full notes:__ `1400` __Full length:__ `3:32`'
                    },
                    { 
                        name: '**Hurt (250 Remix) | `lvl.14`**',
                        value: '__Short notes:__ `427` __Short length:__ `1:19`\n__Full notes:__ `1480` __Full length:__ `3:44`'
                    }
                ]
            },
            {
                title: '**How Sweet**',
                thumbnail: 'https://media.discordapp.net/attachments/1153807568255340554/1243433669490642944/How_Sweet_album_cover.jpg?ex=67b56a58&is=67b418d8&hm=9e0dd533d394d33b7399f33c03913c3ded939d2733e26a874a392a2f1423ae66&=&format=webp&width=662&height=662',
                footer: 'Page 5/5',
                fields: [

                    { 
                        name: '**How Sweet | `lvl.15`**',
                        value: '__Short notes:__ `602` __Short length:__ `1:19`\n__Full notes:__ `1700` __Full length:__ `3:39`'
                    },
                    { 
                        name: '**Bubble Gum | `lvl.12`**',
                        value: '__Short notes:__ `302` __Short length:__ `1:09`\n__Full notes:__ `1039` __Full length:__ `3:20`'
                    }
                ]
            }
        ];




        let currentPage = 0;

        // Create embed with first page
        const njembed = new EmbedBuilder()
            .setTitle(pages[currentPage].title)
            .addFields(pages[currentPage].fields)
            .setColor('#CDF7F6')
            .setThumbnail(pages[currentPage].thumbnail)
            .setFooter({ text: `Page ${currentPage + 1}/${pages.length}` });


        // Create buttons
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

        // Send message with embed and buttons
        const njmsg = await msg.channel.send({ 
            embeds: [njembed], 
            components: [row] 
        });

        // Create collector for button interactions
        const filter = i => i.user.id === msg.author.id;
        const collector = njmsg.createMessageComponentCollector({ filter, time: 60000 });

        collector.on('collect', async i => {
            try {
                if (i.customId === 'previous') {
                    currentPage--;
                } else if (i.customId === 'next') {
                    currentPage++;
                }

                // Update button states
                row.components[0].setDisabled(currentPage === 0);
                row.components[1].setDisabled(currentPage === pages.length - 1);

                // Update embed with new page
                njembed
                    .setTitle(pages[currentPage].title)
                    .setFields(pages[currentPage].fields)
                    .setThumbnail(pages[currentPage].thumbnail)
                    .setFooter({ text: `Page ${currentPage + 1}/${pages.length}` });




                await i.update({ 
                    embeds: [njembed], 
                    components: [row] 
                });
            } catch (error) {
                if (error.code !== 10062 && error.code !== 40060) {
                    console.error('Button interaction error:', error);
                }
                collector.stop();
            }
        });

        collector.on('end', () => {
            try {
                njmsg.edit({ components: [] }).catch(() => {});
            } catch (error) {
                console.error('Error cleaning up components:', error);
            }
        });

    }
};
