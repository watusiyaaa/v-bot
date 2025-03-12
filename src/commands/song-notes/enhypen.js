//enhypen song notes info file
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports={
    name: 'enhypen',
    description: 'Shows enha song information.',

    async execute(msg, args) {
        const pages=[
            {
                title: '**BORDER: DAY ONE**',
                thumbnail: 'https://media.discordapp.net/attachments/1341215784327843980/1349311911547764747/dj.png?ex=67d2a424&is=67d152a4&hm=aae9acfcbdd99ab748f00d7e9e6319d5d1d921b2b00c2096b944fdc083f3a663&=&format=webp&quality=lossless&width=800&height=800',
                footer: 'Page 1/10',
                fields: [
                {
                    name: '**Given-Taken | `lvl.11`**',
                    value: '__Short notes:__ `362` __Short length:__ `1:28`\n__Full notes:__ `828` __Full length:__ `3:03`'
                },

                {
                    name: '**10 Months | `lvl.11`**',
                    value: '__Short notes:__ `506` __Short length:__ `1:15`\n__Full notes:__ `920` __Full length:__ `3:14`'
                },

                {
                    name: '**Let Me In | `lvl.12`**',
                    value: '__Short notes:__ `453` __Short length:__ `1:25`\n__Full notes:__ `1036` __Full length:__ `3:10`'
                },

                {
                    name: '**Flicker | `lvl.13`**',
                    value: '__Short notes:__ `400` __Short length:__ `1:15`\n__Full notes:__ `796` __Full length:__ `2:24`'
                },
           
            ]
        },  
        {
            title: '**BORDER: CARNIVAL**',
            thumbnail: 'https://media.discordapp.net/attachments/1341215784327843980/1349311912050950144/192641603273_Cover.png?ex=67d2a424&is=67d152a4&hm=11b461c9e6d27d2da988f43d69e950b5030f171e98f9073a7bb90ca50b956e9a&=&format=webp&quality=lossless&width=800&height=800',
            footer: 'Page 2/10',
            fields: [
                {
                    name: '**Drunk-Dazed | `lvl.11`**',
                    value: '__Short notes:__ `386` __Short length:__ `1:19`\n__Full notes:__ `1021` __Full length:__ `3:13`'
                },

                {
                    name: '**Not For Sale | `lvl.13`**',
                    value: '__Short notes:__ `565` __Short length:__ `1:36`\n__Full notes:__ `1116` __Full length:__ `3:01`'
                },

                {
                    name: '**FEVER | `lvl.9`**',
                    value: '__Short notes:__ `389` __Short length:__ `1:18`\n__Full notes:__ `705` __Full length:__ `2:52`'
                },

                {
                    name: '**Mixed Up | `lvl.14`**',
                    value: '__Short notes:__ `425` __Short length:__ `1:15`\n__Full notes:__ `1115` __Full length:__ `3:03`'
                },

            ]
        },
        {
            title: '**DIMENSION: DILEMMA**',
            thumbnail: 'https://media.discordapp.net/attachments/1341215784327843980/1349311912449671200/192641841651_Cover.png?ex=67d2a424&is=67d152a4&hm=4065b9c16ca1919f237f3b905f41127378118b55776703279e77a2ca96963cad&=&format=webp&quality=lossless&width=800&height=800',
            footer: 'Page 3/10',
            fields: [
                {
                    name: '**Tamed-Dashed | `lvl.11`**',
                    value: '__Short notes:__ `461` __Short length:__ `1:23`\n__Full notes:__ `1183` __Full length:__ `3:16`'
                },

                {
                    name: '**Upper Side Dreamin\' | `lvl.12`**',
                    value: '__Short notes:__ `387` __Short length:__ `1:22`\n__Full notes:__ `959` __Full length:__ `3:09`'
                },

                {
                    name: '**Go Big or Go Home | `lvl.11`**',
                    value: '__Short notes:__ `432` __Short length:__ `1:26`\n__Full notes:__ `1077` __Full length:__ `3:20`'
                },

                {
                    name: '**Just A Little Bit | `lvl.13`**',
                    value: '__Short notes:__ `403` __Short length:__ `1:19`\n__Full notes:__ `952` __Full length:__ `2:48`'
                },

                {
                    name: '**Attention Please! | `lvl.11`**',
                    value: '__Short notes:__ `396` __Short length:__ `1:18`\n__Full notes:__ `930` __Full length:__ `2:48`'
                },

                {
                    name: '**Blockbuster (ft. Yeonjun of TOMORROW X TOGETHER) | `lvl.16`**',
                    value: '__Short notes:__ `776` __Short length:__ `1:33`\n__Full notes:__ `1905` __Full length:__ `3:47`'
                },

            ]
        },
        {
            title: '**DIMENSION: ANSWER**',
            thumbnail: 'https://media.discordapp.net/attachments/1341215784327843980/1349311912768307302/192641819957_Cover.png?ex=67d2a425&is=67d152a5&hm=c2a3376ae657f233666f1ae36dff1058b3ae691505cf849e3444470d7b39dd2d&=&format=webp&quality=lossless&width=800&height=800',
            footer: 'Page 4/10',
            fields: [
                {
                    name: '**Blessed-Cursed | `lvl.12`**',
                    value: '__Short notes:__ `541` __Short length:__ `1:37`\n__Full notes:__ `1002` __Full length:__ `2:51`'
                },

                {
                    name: '**Polaroid Love | `lvl.11`**',
                    value: '__Short notes:__ `348` __Short length:__ `1:15`\n__Full notes:__ `951` __Full length:__ `3:05`'
                },
                
            ]
        },
        {
            title: '**MANIFESTO: DAY 1**',
            thumbnail: 'https://media.discordapp.net/attachments/1341215784327843980/1349312122307477534/196922083112_Cover.png?ex=67d2a456&is=67d152d6&hm=820fde23fe77b6568368a237f356b638acdcd24759ead48ca3a62e005e2a96cd&=&format=webp&quality=lossless&width=800&height=800',
            footer: 'Page 5/10',
            fields: [
                {
                    name: '**Future Perfect (Pass the MIC) | `lvl.11`**',
                    value: '__Short notes:__ `420` __Short length:__ `1:32`\n__Full notes:__ `835` __Full length:__ `3:01`'
                },

                {
                    name: '**ParadoXXX Invasion | `lvl.11`**',
                    value: '__Short notes:__ `394` __Short length:__ `1:16`\n__Full notes:__ `1010` __Full length:__ `3:07`'
                },
                
                {
                    name: '**TFW (That Feeling When) | `lvl.13`**',
                    value: '__Short notes:__ `561` __Short length:__ `1:34`\n__Full notes:__ `1200` __Full length:__ `3:18`'
                },

                {
                    name: '**Shout Out | `lvl.12`**',
                    value: '__Short notes:__ `403` __Short length:__ `1:23`\n__Full notes:__ `1158` __Full length:__ `3:48`'
                },
            ]
        },
        {
            title: '**DARK BLOOD**',
            thumbnail: 'https://media.discordapp.net/attachments/1341215784327843980/1349312122923909150/196922402876_Cover.png?ex=67d2a457&is=67d152d7&hm=6999dc7b049f14db7ebc434113ffcfd8168e65aa0e3ca231ac531c6e0b4eea93&=&format=webp&quality=lossless&width=800&height=800',
            footer: 'Page 6/10',
            fields: [
                {
                    name: '**Bite Me | `lvl.12`**',
                    value: '__Short notes:__ `292` __Short length:__ `1:02`\n__Full notes:__ `849` __Full length:__ `2:38`'
                },

                {
                    name: '**Bills | `lvl.12`**',
                    value: '__Short notes:__ `353` __Short length:__ `1:14`\n__Full notes:__ `981` __Full length:__ `2:56`'
                },

                {
                    name: '**Karma | `lvl.14`**',
                    value: '__Short notes:__ `505` __Short length:__ `1:24`\n__Full notes:__ `1200` __Full length:__ `3:13`'
                },

                {
                    name: '**Sacrifice (Eat Me Up) | `lvl.14`**',
                    value: '__Short notes:__ `431` __Short length:__ `1:16`\n__Full notes:__ `1153` __Full length:__ `3:23`'
                },

                {
                    name: '**Chaconne | `lvl.15`**',
                    value: '__Short notes:__ `360` __Short length:__ `1:14`\n__Full notes:__ `1063` __Full length:__ `3:34`'
                },
                
            ]
        },
        {
            title: '**ORANGE BLOOD**',
            thumbnail: 'https://media.discordapp.net/attachments/1341215784327843980/1349312123800653874/196922723216_Cover.png?ex=67d2a457&is=67d152d7&hm=bbc919a464bf25ca274905c7b4f27a00abf7ee1ba971f60297a9b45664b1f3d2&=&format=webp&quality=lossless&width=800&height=800',
            footer: 'Page 7/10',
            fields: [
                {
                    name: '**Mortal | `lvl.10`**',
                    value: '__Short notes:__ `369` __Short length:__ `1:36`\n__Full notes:__ `1000` __Full length:__ `3:48`'
                },

                {
                    name: '**Sweet Venom | `lvl.12`**',
                    value: '__Short notes:__ `225` __Short length:__ `0:56`\n__Full notes:__ `700` __Full length:__ `2:29`'
                },

                {
                    name: '**Still Monster | `lvl.13`**',
                    value: '__Short notes:__ `359` __Short length:__ `1:09`\n__Full notes:__ `1100` __Full length:__ `3:06`'
                },

                {
                    name: '**Blind | `lvl.15`**',
                    value: '__Short notes:__ `521` __Short length:__ `1:17`\n__Full notes:__ `1418` __Full length:__ `3:18`'
                },

                {
                    name: '**Orange Flower (You Complete Me) | `lvl.12`**',
                    value: '__Short notes:__ `402` __Short length:__ `1:17`\n__Full notes:__ `1075` __Full length:__ `3:00`'
                },
                
            ]
        },
        {
            title: '**Memorabilia**',
            thumbnail: 'https://media.discordapp.net/attachments/1341215784327843980/1349312124597305405/196922921810_Cover.png?ex=67d2a457&is=67d152d7&hm=a31145a11b170439a1a142a3b4acfed71a22387974d946b8559a96d0a080efc2&=&format=webp&quality=lossless&width=800&height=800',
            footer: 'Page 8/10',
            fields: [
                {
                    name: '**Fatal Trouble | `lvl.13`**',
                    value: '__Short notes:__ `397` __Short length:__ `1:11`\n__Full notes:__ `1010` __Full length:__ `2:50`'
                },

                {
                    name: '**CRIMINAL LOVE | `lvl.15`**',
                    value: '__Short notes:__ `429` __Short length:__ `1:11`\n__Full notes:__ `1500` __Full length:__ `3:36`'
                },

                {
                    name: '**One In A Billion | `lvl.13`**',
                    value: '__Short notes:__ `360` __Short length:__ `1:04`\n__Full notes:__ `1300` __Full length:__ `3:16`'
                },

                {
                    name: '**Scream | `lvl.15`**',
                    value: '__Short notes:__ `435` __Short length:__ `1:02`\n__Full notes:__ `1500` __Full length:__ `3:07`'
                },
                
            ]
        },
        {
            title: '**ROMANCE: UNTOLD**',
            thumbnail: 'https://media.discordapp.net/attachments/1341215784327843980/1349312236111527946/198704025143_Cover.png?ex=67d2a472&is=67d152f2&hm=cae235eb4310351372d6c9db2c07a5d1c3374e4a6e4e6f8a83012e2ee09409d8&=&format=webp&quality=lossless&width=800&height=800',
            footer: 'Page 9/10',
            fields: [
                {
                    name: '**XO (Only If You Say Yes) | `lvl.14`**',
                    value: '__Short notes:__ `439` __Short length:__ `1:15`\n__Full notes:__ `1300` __Full length:__ `3:09`'
                },

                {
                    name: '**Hundred Broken Hearts | `lvl.13`**',
                    value: '__Short notes:__ `442` __Short length:__ `1:23`\n__Full notes:__ `1269` __Full length:__ `3:22`'
                },

                {
                    name: '**Highway 1009 | `lvl.12`**',
                    value: '__Short notes:__ `331` __Short length:__ `1:01`\n__Full notes:__ `1009` __Full length:__ `2:55`'
                },

                {
                    name: '**Brought The Heat Back | `lvl.15`**',
                    value: '__Short notes:__ `383` __Short length:__ `0:56`\n__Full notes:__ `1329` __Full length:__ `2:57`'
                },

                {
                    name: '**Moonstruck | `lvl.12`**',
                    value: '__Short notes:__ `213` __Short length:__ `0:51`\n__Full notes:__ `824` __Full length:__ `2:39`'
                },
                
            ]
        },
        {
            title: '**ROMANCE: UNTOLD -daydream-**',
            thumbnail: 'https://media.discordapp.net/attachments/1341215784327843980/1349312236945932348/198704187797_Cover.png?ex=67d2a472&is=67d152f2&hm=bbdb6ee08f1446322bc6f8e5bcca2f43d21ab8aa8bd05c3edadac77d92da5b47&=&format=webp&quality=lossless&width=800&height=800',
            footer: 'Page 10/10',
            fields: [
                {
                    name: '**No Doubt) | `lvl.14`**',
                    value: '__Short notes:__ `525` __Short length:__ `1:19`\n__Full notes:__ `1300` __Full length:__ `2:46`'
                },
            ]                
        }
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
                .setCustomId('first')
                .setLabel('⏮️')
                .setStyle(ButtonStyle.Secondary)
                .setDisabled(true),
                new ButtonBuilder()
                .setCustomId('previous')
                .setLabel('◀️')
                .setStyle(ButtonStyle.Secondary)
                .setDisabled(true),
                new ButtonBuilder()
                .setCustomId('next')
                .setLabel('▶️')
                .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                .setCustomId('last')
                .setLabel('⏭️')
                .setStyle(ButtonStyle.Secondary)
            );
    
    const enhamsg = await msg.channel.send({
        embeds: [enhaembed],
        components: [row]
    });

    const filter = i=>i.user.id === msg.author.id;
    const collector = enhamsg.createMessageComponentCollector({ time: 360000, filter });

    collector.on('collect', async i => {
        try {
            if (i.customId === 'first') {
                currentPage = 0;
            } else if (i.customId === 'previous') {
                currentPage--;
            } else if (i.customId === 'next') {
                currentPage++;
            } else if (i.customId === 'last') {
                currentPage = pages.length-1;
            }

            row.components[0].setDisabled(currentPage===0);
            row.components[1].setDisabled(currentPage===0);
            row.components[2].setDisabled(currentPage===pages.length-1);
            row.components[3].setDisabled(currentPage===pages.length-1);

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