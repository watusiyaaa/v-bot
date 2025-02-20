// bnd song notes info file

const { EmbedBuilder, ActionRowBuilder,ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    name: 'boynextdoor',
    description: 'Shows Boynextdoor song information',

    async execute(msg, args) {
        const pages=[
            {
                title: '**WHO!**',
                thumbnail: 'https://media.discordapp.net/attachments/1341215784327843980/1341815500686233660/196922402067_Cover.jpg?ex=67b75e91&is=67b60d11&hm=e897c15a2bb614173220d5c5289cb5900700da546be5278c7bc9a94433c09e42&=&format=webp&width=662&height=662',
                footer: 'Page 1/4',
                fields: [
                    {
                        name: '**But I Like You | `lvl.12`**',
                        value: '__Short notes:__ `318` __Short length:__ `1:04`\n__Full notes:__ `761` __Full length:__ `2:17`'
                    },
                    {
                        name: '**One and Only | `lvl.15`**',
                        value: '__Short notes:__ `374` __Short length:__ `0:57`\n__Full notes:__ `1171` __Full length:__ `2:47`'
                    },
                    {
                        name: '**Serenade | `lvl.13`**',
                        value: '__Short notes:__ `427` __Short length:__ `1:03`\n__Full notes:__ `1234` __Full length:__ `3:03`'
                    },
                    {
                        name: '**But I Like You (2nd ver.) | `lvl.13`**',
                        value: '__Short notes:__ `431` __Short length:__ `1:04`\n__Full notes:__ `994` __Full length:__ `2:17`'
                    }
                ]
            },
            {
                title: '**WHY...**',
                thumbnail: 'https://media.discordapp.net/attachments/1341215784327843980/1341820012234805428/196922595776_Cover.jpg?ex=67b762c4&is=67b61144&hm=bb15e0d9207f268313e68711c4e5a28479a1af50e09e48ecdc601fb4ba0e071a&=&format=webp&width=662&height=662',
                footer: 'Page 2/4',
                fields: [
                    {
                        name: '**But Sometimes | `lvl.11`**',
                        value: '__Short notes:__ `238` __Short length:__ `1:03`\n__Full notes:__ `879` __Full length:__ `2:55`'
                    },
                    {
                        name: '**ABCDLOVE | `lvl.12`**',
                        value: '__Short notes:__ `307` __Short length:__ `0:59`\n__Full notes:__ `863` __Full length:__ `2:37`'
                    },
                    {
                        name: '**Crying | `lvl.11`**',
                        value: '__Short notes:__ `276` __Short length:__ `1:16`\n__Full notes:__ `776` __Full length:__ `3:03`'
                    }
                ]
            },
            {
                title: '**HOW?**',
                thumbnail: 'https://media.discordapp.net/attachments/1341215784327843980/1341820027602604032/196922852268_Cover.jpg?ex=67b762c8&is=67b61148&hm=fa166cf1e840c7e1dff60ad20f80bc2e9b48d66cc17ab2171313603e15f6b6b2&=&format=webp&width=662&height=662',
                footer: 'Page 3/4',
                fields: [
                    {
                        name: '**Earth, Wind and Fire | `lvl.17`**',
                        value: '__Short notes:__ `413` __Short length:__ `0:57`\n__Full notes:__ `1565` __Full length:__ `2:59`'
                    },
                    {
                        name: '**So let\'s go see the stars | `lvl.14`**',
                        value: '__Short notes:__ `459` __Short length:__ `1:19`\n__Full notes:__ `1352` __Full length:__ `3:22`'
                    },
                    {
                        name: '**OUR | `lvl.13`**',
                        value: '__Short notes:__ `367` __Short length:__ `0:56`\n__Full notes:__ `1100` __Full length:__ `2:36`'
                    },
                    {
                        name: '**Amnesia | `lvl.12`**',
                        value: '__Short notes:__ `425` __Short length:__ `1:19`\n__Full notes:__ `970` __Full length:__ `2:50`'
                    },
                    {
                        name: '**l i f e i s c o o l | `lvl.12`**',
                        value: '__Short notes:__ `367` __Short length:__ `1:19`\n__Full notes:__ `979` __Full length:__ `3:18`'
                    },
                    {
                        name: '**Dear. My Darling | `lvl.11`**',
                        value: '__Short notes:__ `177` __Short length:__ `0:38`\n__Full notes:__ `486` __Full length:__ `1:40`'
                    }
                ]
            },
            {
                title: '**19.99**',
                thumbnail: 'https://media.discordapp.net/attachments/1341215784327843980/1341820045940097167/198704113956_Cover.jpg?ex=67b762cc&is=67b6114c&hm=b44db8625db836a3c46ce009997d76b5e6252fbe3179947373ef162345904244&=&format=webp&width=662&height=662',
                footer: 'Page 4/4',
                fields: [
                    {
                        name: '**Nice Guy | `lvl.13`**',
                        value: '__Short notes:__ `299` __Short length:__ `0:56`\n__Full notes:__ `1100` __Full length:__ `2:44`'
                    },
                    {
                        name: '**Dangerous | `lvl.12`**',
                        value: '__Short notes:__ `381` __Short length:__ `1:07`\n__Full notes:__ `939` __Full length:__ `2:23`'
                    },
                    {
                        name: '**20 | `lvl.13`**',
                        value: '__Short notes:__ `369` __Short length:__ `0:59`\n__Full notes:__ `1065` __Full length:__ `2:48`'
                    },
                    {
                        name: '**Gonna Be A Rock | `lvl.14`**',
                        value: '__Short notes:__ `359` __Short length:__ `1:07`\n__Full notes:__ `1300` __Full length:__ `3:17`'
                    },
                    {
                        name: '**Call Me | `lvl.12`**',
                        value: '__Short notes:__ `[no data yet]` __Short length:__ `[no data yet]`\n__Full notes:__ `1018` __Full length:__ `2:58`'
                    }
                ]
            }
        ];

        let currentPage = 0;
        const bndembed = new EmbedBuilder()
        .setTitle(pages[currentPage].title)
        .addFields(pages[currentPage].fields)
        .setColor('#CDF7f6')
        .setThumbnail(pages[currentPage].thumbnail)
        .setFooter({ text: `Page ${currentPage + 1} of ${pages.length}`});

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

        const bndmsg = await msg.channel.send({
            embeds: [bndembed],
            components: [row]
        });

        const filter = i=>i.user.id === msg.author.id;
        const collector = bndmsg.createMessageComponentCollector({filter, time: 60000});
        collector.on('collect', async i => {
            try {
                if (i.customId === 'previous') {
                    currentPage--;
                } else if (i.customId === 'next') {
                    currentPage++;
                }

                row.components[0].setDisabled(currentPage===0);
                row.components[1].setDisabled(currentPage===pages.length-1);

                bndembed
                    .setTitle(pages[currentPage].title)
                    .setFields(pages[currentPage].fields)
                    .setThumbnail(pages[currentPage].thumbnail)
                    .setFooter({ text: `Page ${currentPage+1}/${pages.length}` });
                
                    await i.update({
                        embeds: [bndembed],
                        components: [row]
                    });
            } catch (error) {
                if (error.code !== 10062 && error.code !== 40060) {
                    console.error('Button interaction error:', error);
                }
                collector.stop();
            }
        });

        collector.on('end',()=>{
            try {
                bndmsg.edit({ components: [] }).catch(()=>{});
            } catch (error) {
                console.error('Error cleaning up components:', error);
            }
        });
    }
};