// illit song notes info file

const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const { description, execute } = require('./lesserafim');

module.exports = {
name: 'illit',
description: 'Shows Illit song information',

async execute(msg, args) {
    const pages=[
        {
            title: '**SUPER REAL ME**',
            thumbnail: 'https://media.discordapp.net/attachments/1341215784327843980/1342053901058310144/196922879227_Cover.png?ex=67b83c98&is=67b6eb18&hm=271ee08fb7d91aaf2cf521ba677708b6a5bcbed9cd432e68887e69f68c681403&=&format=webp&quality=lossless&width=662&height=662',
            footer: 'Page 1/3',
            fields:[
                {
                    name: '**Magnetic | `lvl.13`**',
                    value: '__Short notes:__ `374` __Short length:__ `0:58`\n__Full notes:__ `1057` __Full length:__ `2:40`'
                },
                {
                    name: '**Lucky Girl Syndrome | `lvl.15`**',
                    value: '__Short notes:__ `375` __Short length:__ `0:57`\n__Full notes:__ `1062` __Full length:__ `2:20`'
                }
            ]
        },
        {
            title: '**I\'LL LIKE YOU**',
            thumbnail: 'https://media.discordapp.net/attachments/1341215784327843980/1342053903159791667/198704136962_Cover.png?ex=67b83c98&is=67b6eb18&hm=cf427f934bfa40d282996908bcb9c9942b44e15df6f712c9a0e50745ccf82a91&=&format=webp&quality=lossless&width=662&height=662',
            footer: 'Page 2/3',
            fields:[
                {
                    name: '**Cherish (My Love) | `lvl.13`**',
                    value: '__Short notes:__ `345` __Short length:__ `1:14`\n__Full notes:__ `994` __Full length:__ `2:56`'
                }
            ]
        },
        {
            title: '**Magnetic (Remixes)**',
            thumbnail: 'https://media.discordapp.net/attachments/1341215784327843980/1342053902295498833/196922938214_Cover.png?ex=67b83c98&is=67b6eb18&hm=dd8f6e34caaf377be818bf3818f01d574084e0cfcde8811200d79f90d1f81833&=&format=webp&quality=lossless&width=662&height=662',
            footer: 'Page 1/4',
            fields:[
                {
                    name: '**Magnetic (R&B Remix) | `lvl.13`**',
                    value: '__Short notes:__ `399` __Short length:__ `1:01`\n__Full notes:__ `1421` __Full length:__ `2:51`'
                }
            ]
        }
    ];

    let currentPage = 0;
    const iltembed = new EmbedBuilder()
    .setTitle(pages[currentPage].title)
    .addFields(pages[currentPage].fields)
    .setColor('#CDF7f6')
    .setThumbnail(pages[currentPage].thumbnail)
    .setFooter({ text: `Page ${currentPage + 1} of ${pages.length}` });

    const row=new ActionRowBuilder()
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

    const iltmsg = await msg.channel.send({
        embeds: [iltembed],
        components: [row]
    });

    const filter = i=>i.user.id === msg.author.id;
    const collector = iltmsg.createMessageComponentCollector({ time: 60000 });
    collector.on('collect', async i => {
        try {
            if (i.customId === 'previous') {
                currentPage--;
            } else if (i.customId === 'next') {
                currentPage++;
            }

            row.components[0].setDisabled(currentPage===0);
            row.components[1].setDisabled(currentPage===pages.length-1);

            iltembed
                .setTitle(pages[currentPage].title)
                .setFields(pages[currentPage].fields)
                .setThumbnail(pages[currentPage].thumbnail)
                .setFooter({ text: `Page ${currentPage+1}/${pages.length}` });

                await i.update({
                    embeds: [iltembed],
                    components: [row]
                });
        } catch (error) {
            if (error.code !== 10062 && error.code !== 40060) {
                console.error('Button interaction error:', error);
            }
        }
    });

        collector.on('end', ()=>{
            try {
                iltmsg.edit({ components: [] }).catch(()=>{});
            } catch (error) {
                console.error('Error cleaning up components:', error);
            }
        });
    }
};