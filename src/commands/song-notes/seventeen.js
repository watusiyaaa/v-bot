//seventeen song notes info file
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports={
    name: 'seventeen',
    description: 'Shows svt song information.',

    async execute(msg, args) {
        const pages=[
            {
                title: '**Seventeen 1st Mini Album \'17 CARAT\'**',
                thumbnail: 'https://media.discordapp.net/attachments/1341215784327843980/1346084305943920732/ab67616d000082c183edaef854fd4a05016178e9.png?ex=67c6e633&is=67c594b3&hm=7e5e917e2c75f16021bb05028b8dee65d3ee9609f76fa8b15fb058f2cd1a5a14&=&format=webp&quality=lossless&width=663&height=663',
                footer: 'Page 1/23',
                fields: [
                    {
                        name: '**Shining Diamond | `lvl.13`**',
                        value: '__Short notes:__ `434` __Short length:__ `1:18`\n__Full notes:__ `1175` __Full length:__ `3:23`'
                    },
                    {
                        name: '**Adore U | `lvl.12`**',
                        value: '__Short notes:__ `385` __Short length:__ `1:23`\n__Full notes:__ `976` __Full length:__ `3:07`'
                    }
                ]
            },
            {
                title: '**Seventeen 2nd Mini Album \'BOYS BE\'**',
                thumbnail: 'https://media.discordapp.net/attachments/1341215784327843980/1346084306702831677/ab67616d000082c1f618df1d39bfabf3d8e9a042.png?ex=67c6e633&is=67c594b3&hm=83054ab28f589e19363336a172ad64038bb094dc093d4075c822c9ba6531a392&=&format=webp&quality=lossless&width=663&height=663',
                footer: 'Page 2/23',
                fields: [
                    {
                        name: '**<:nonrn:1344330008486740049> MANSAE | `lvl.15`**',
                        value: '__Short notes:__ `722` __Short length:__ `1:39`\n__Full notes:__ `1461` __Full length:__ `3:07`'
                    },
                    {
                        name: '**<:nonrn:1344330008486740049> ROCK | `lvl.6`**',
                        value: '__Short notes:__ `520` __Short length:__ `1:38`\n__Full notes:__ `1130` __Full length:__ `3:12`'
                    }
                ]
            },
            {
                title: '**Love&Letter Repackage**',
                thumbnail: 'https://media.discordapp.net/attachments/1341215784327843980/1346084307550339104/ab67616d000082c1eb366517758754ca13a4adf5.png?ex=67c6e633&is=67c594b3&hm=30e7abe903e1b868db8041cf0a058c7c9c2843c9768160a3a973a8bcea174412&=&format=webp&quality=lossless&width=663&height=663',
                footer: 'Page 3/23',
                fields: [
                    {
                        name: '**Pretty U | `lvl.12`**',
                        value: '__Short notes:__ `472` __Short length:__ `1:26`\n__Full notes:__ `1108` __Full length:__ `3:27`'
                    },
                    {
                        name: '**Healing | `lvl.14`**',
                        value: '__Short notes:__ `630` __Short length:__ `1:37`\n__Full notes:__ `1350` __Full length:__ `3:23`'
                    },
                    {
                        name: '**Very Nice | `lvl.13`**',
                        value: '__Short notes:__ `336` __Short length:__ `1:01`\n__Full notes:__ `1210` __Full length:__ `3:12`'
                    },
                    {
                        name: '**Chuck | `lvl.16`**',
                        value: '__Short notes:__ `438` __Short length:__ `1:04`\n__Full notes:__ `1300` __Full length:__ `2:58`'
                    },
                    {
                        name: '**Hit Song | `lvl.13`**',
                        value: '__Short notes:__ `431` __Short length:__ `1:25`\n__Full notes:__ `1285` __Full length:__ `3:26`'
                    },
                    {
                        name: '**Love Letter | `lvl.11`**',
                        value: '__Short notes:__ `268` __Short length:__ `1:06`\n__Full notes:__ `831` __Full length:__ `2:58`'
                    },
                    {
                        name: '**<:nonrn:1344330008486740049> Still Lonely | `lvl.6`**',
                        value: '__Short notes:__ `891` __Short length:__ `1:18`\n__Full notes:__ `1197` __Full length:__ `3:27`'
                    }
                ]
            }, 
            {
                title: '**Seventeen 3rd Mini Album \'Going Seventeen\'**',
                thumbnail: 'https://media.discordapp.net/attachments/1341215784327843980/1346084308217237645/ab67616d000082c1365a466edde82104003d7113.png?ex=67c6e634&is=67c594b4&hm=136b4ded93e8d0c996e941c6f0f6dab4fcfc0b60c51aa2c4b78d0eea5111e188&=&format=webp&quality=lossless&width=663&height=663',
                footer: 'Page 4/23',
                fields: [
                    {
                        name: '**BOOMBOOM | `lvl.13`**',
                        value: '__Short notes:__ `521` __Short length:__ `1:33`\n__Full notes:__ `1219` __Full length:__ `3:26`'
                    },
                    {
                        name: '**Smile Flower | `lvl.11`**',
                        value: '__Short notes:__ `480` __Short length:__ `1:35`\n__Full notes:__ `1280` __Full length:__ `3:52`'
                    },
                    {
                        name: '**Fast Pace | `lvl.12`**',
                        value: '__Short notes:__ `546` __Short length:__ `1:19`\n__Full notes:__ `1175` __Full length:__ `3:40`'
                    }
                ]
            },
            {
                title: '**Seventeen 2nd Album \'TEEN, AGE\'**',
                thumbnail: 'https://media.discordapp.net/attachments/1341215784327843980/1346085574255185930/ab67616d000082c146a157795d939b7a6868d207.png?ex=67c6e761&is=67c595e1&hm=4bd909301cd98e1510b5a49fc0ed4744085d4be813719ea57cafb5764a629f60&=&format=webp&quality=lossless&width=663&height=663',
                footer: 'Page 5/23',
                fields: [
                    {
                        name: '**CLAP | `lvl.11`**',
                        value: '__Short notes:__ `320` __Short length:__ `1:12`\n__Full notes:__ `823` __Full length:__ `2:48`'
                    },
                    {
                        name: '**Campfire | `lvl.12`**',
                        value: '__Short notes:__ `475` __Short length:__ `1:33`\n__Full notes:__ `1173` __Full length:__ `3:27`'
                    },
                    {
                        name: '**WITHOUT YOU | `lvl.12`**',
                        value: '__Short notes:__ `450` __Short length:__ `1:31`\n__Full notes:__ `1135` __Full length:__ `3:15`'
                    },
 
                    {
                        name: '**<:nonrn:1344330008486740049> Lilili Yabbay | `lvl.5`**',
                        value: '__Short notes:__ `417` __Short length:__ `1:32`\n__Full notes:__ `1119` __Full length:__ `3:31`'
                    },
                    {
                        name: '**<:nonrn:1344330008486740049> TRAUMA | `lvl.6`**',
                        value: '__Short notes:__ `477` __Short length:__ `1:20`\n__Full notes:__ `1304` __Full length:__ `3:33`'
                    },
                    {
                        name: '**<:nonrn:1344330008486740049> BRING IT | `lvl.6`**',
                        value: '__Short notes:__ `564` __Short length:__ `1:39`\n__Full notes:__ `1231` __Full length:__ `3:32`'
                    }
                ] 
            },
            {
                title: '**Seventeen Special Album \'DIRECTORS CUT\'**',
                thumbnail: 'https://media.discordapp.net/attachments/1341215784327843980/1346085575341637725/ab67616d000082c1c7bb27d0e4ab6f8cdf61c087.png?ex=67c6e762&is=67c595e2&hm=fb8fcdedc229333ff7d2c54b3986c10a5bd65e7c5a2fda90f283d2b9d5063fc8&=&format=webp&quality=lossless&width=663&height=663',
                footer: 'Page 6/23',
                fields: [
 
                    {
                        name: '**RUN TO YOU | `lvl.12`**',
                        value: '__Short notes:__ `459` __Short length:__ `1:17`\n__Full notes:__ `1192` __Full length:__ `3:14`'
                    },
                    {
                        name: '**THANKS | `lvl.12`**',
                        value: '__Short notes:__ `452` __Short length:__ `1:34`\n__Full notes:__ `1090` __Full length:__ `3:33`'
                    },
 

                    {
                        name: '**<:nonrn:1344330008486740049> Thinkin about you | `lvl.5`**',
                        value: '__Short notes:__ `397` __Short length:__ `1:27`\n__Full notes:__ `1116` __Full length:__ `3:42`'
                    }
                ]
            },
            {
                title: '**Seventeen 5th Mini Album \'YOU MAKE MY DAY\'**',
                thumbnail: 'https://media.discordapp.net/attachments/1341215784327843980/1346085575974719529/ab67616d000082c17c8b796098da718dfbbcd49a.png?ex=67c6e762&is=67c595e2&hm=186926d8dbc1ec5e523d9a9ff25354f8b96b4fc35f4fe3a19055657e5023398d&=&format=webp&quality=lossless&width=663&height=663',
                footer: 'Page 7/23',
                fields: [
                    { 
                        name: '**Come to me | `lvl.14`**',	
                        value: '__Short notes:__ `454` __Short length:__ `1:10`\n__Full notes:__ `1357` __Full length:__ `3:10`' 
                    },

                    { 
                        name: '**MOONWALKER | `lvl.13`**',	
                        value: '__Short notes:__ `366` __Short length:__ `1:10`\n__Full notes:__ `1084` __Full length:__ `3:00`' 
                    },
                    { 
                        name: '**Whats Good | `lvl.14`**',	
                        value: '__Short notes:__ `294` __Short length:__ `0:49`\n__Full notes:__ `1174` __Full length:__ `2:48`' 
                    },
                    { 
                        name: '**Holiday | `lvl.14`**',	
                        value: '__Short notes:__ `554` __Short length:__ `1:31`\n__Full notes:__ `1354` __Full length:__ `3:25`' 
                    },
                    { 
                        name: '**Our Dawn Is Hotter Than Day | `lvl.12`**',	
                        value: '__Short notes:__ `535` __Short length:__ `1:20`\n__Full notes:__ `1212` __Full length:__ `3:32`' 
                    },
                    { 
                        name: '**Oh My | `lvl.13`**',	
                        value: '__Short notes:__ `435` __Short length:__ `1:39`\n__Full notes:__ `1194` __Full length:__ `3:15`' 
                    }

                ]
            },
            {
                title: '**Seventeen 6th Mini Album \'YOU MADE MY DAWN\'**',
                thumbnail: 'https://media.discordapp.net/attachments/1341215784327843980/1346085576385892352/ab67616d000082c1428011fc6beff5e3637b2adf.png?ex=67c6e762&is=67c595e2&hm=c258eabd4219badce6389be6099eae76ac87213034ee62518ef3ffca8b2aaacd&=&format=webp&quality=lossless&width=663&height=663',
                footer: 'Page 8/23',
                fields: [
                    { 
                        name: '**Good to Me | `lvl.12`**',	
                        value: '__Short notes:__ `440` __Short length:__ `1:19`\n__Full notes:__ `1104` __Full length:__ `3:10`' 
                    },
                    { 
                        name: '**Getting Closer | `lvl.13`**',	
                        value: '__Short notes:__ `410` __Short length:__ `1:17`\n__Full notes:__ `1112` __Full length:__ `3:04`' 
                    },
                    { 
                        name: '**Home | `lvl.12`**',	
                        value: '__Short notes:__ `552` __Short length:__ `1:43`\n__Full notes:__ `1203` __Full length:__ `3:23`' 
                    }   
                ]
            }, 
            {
                title: '**An Ode**',
                thumbnail: 'https://media.discordapp.net/attachments/1341215784327843980/1346086205556654080/ab67616d000082c1595174aef621c2b6434ab343.png?ex=67c6e7f8&is=67c59678&hm=50fd25c7250d53e230765a48f884b5d431cec6e20882d9f6b1da6babd963fc04&=&format=webp&quality=lossless&width=663&height=663',
                footer: 'Page 9/23',
                fields: [
                    { 
                        name: '**Lucky | `lvl.14`**',	
                        value: '__Short notes:__ `343` __Short length:__ `0:57`\n__Full notes:__ `1318` __Full length:__ `3:17`' 
                    },
                    { 
                        name: '**Back it up | `lvl.14`**',	
                        value: '__Short notes:__ `369` __Short length:__ `1:03`\n__Full notes:__ `1300` __Full length:__ `3:07`' 
                    },
                    { 
                        name: '**Lie Again | `lvl.12`**',	
                        value: '__Short notes:__ `466` __Short length:__ `1:39`\n__Full notes:__ `1030` __Full length:__ `3:20`' 
                    },
                    { 
                        name: '**Happy Ending (Korean Ver.) | `lvl.14`**',	
                        value: '__Short notes:__ `614` __Short length:__ `1:30`\n__Full notes:__ `1490` __Full length:__ `3:31`' 
                    },
                    { 
                        name: '**HIT | `lvl.12`**',	
                        value: '__Short notes:__ `514` __Short length:__ `1:36`\n__Full notes:__ `1137` __Full length:__ `3:23`' 
                    },
                    { 
                        name: '**Fear | `lvl.15`**',	
                        value: '__Short notes:__ `485` __Short length:__ `1:13`\n__Full notes:__ `1255` __Full length:__ `2:55`' 
                    },
                    { 
                        name: '**Snap Shoot | `lvl.12`**',	
                        value: '__Short notes:__ `452` __Short length:__ `1:15`\n__Full notes:__ `1129` __Full length:__ `2:56`' 
                    }
                ]
            }, 
            {
                title: '**Heng:garæ**',
                thumbnail: 'https://media.discordapp.net/attachments/1341215784327843980/1346086205975957504/ab67616d000082c16f29a60db7b4479599fae56d.png?ex=67c6e7f8&is=67c59678&hm=ba3b48591d2bd03371b8378b951f4aa1c4bd234b775a4e09832623ccb84c305f&=&format=webp&quality=lossless&width=663&height=663',
                footer: 'Page 10/23',
                fields: [
                    { 
                        name: '**Together | `lvl.13`**',	
                        value: '__Short notes:__ `367` __Short length:__ `1:43`\n__Full notes:__ `1469` __Full length:__ `4:04`' 
                    },
                    { 
                        name: '**Kidult | `lvl.12`**',	
                        value: '__Short notes:__ `381` __Short length:__ `1:26`\n__Full notes:__ `996` __Full length:__ `3:12`' 
                    },
                    { 
                        name: '**I WISH | `lvl.10`**',	
                        value: '__Short notes:__ `367` __Short length:__ `1:46`\n__Full notes:__ `1116` __Full length:__ `3:53`' 
                    },
                    { 
                        name: '**Fearless | `lvl.14`**',	
                        value: '__Short notes:__ `367` __Short length:__ `1:12`\n__Full notes:__ `1104` __Full length:__ `3:14`' 
                    },
                    { 
                        name: '**Left & Right | `lvl.11`**',	
                        value: '__Short notes:__ `477` __Short length:__ `1:34`\n__Full notes:__ `1204` __Full length:__ `3:22`' 
                    },
                    { 
                        name: '**My My | `lvl.13`**',	
                        value: '__Short notes:__ `555` __Short length:__ `1:35`\n__Full notes:__ `1112` __Full length:__ `3:05`' 
                    }
 
                ]
            }, 
            {
                title: '**; [Semicolon]**',
                thumbnail: 'https://media.discordapp.net/attachments/1341215784327843980/1346086206672343100/ab67616d000082c1aa12f5b5b2ea88f26ab76846.png?ex=67c6e7f8&is=67c59678&hm=d655adb35537638bce8737fc0fdfa7db3e56e731ee965119c0bbb5d2f8b31cdd&=&format=webp&quality=lossless&width=663&height=663',
                footer: 'Page 11/23',
                fields: [
                    { 
                        name: '**DO RE MI `Maknae Unit` | `lvl.16`**',	
                        value: '__Short notes:__ `466` __Short length:__ `1:11`\n__Full notes:__ `1400` __Full length:__ `3:18`' 
                    },
                    { 
                        name: '**<:nonrn:1344330008486740049> HEY BUDDY | `lvl.6`**',	
                        value: '__Short notes:__ `395` __Short length:__ `1:22`\n__Full notes:__ `1115` __Full length:__ `3:18`' 
                    },
                    { 
                        name: '**HOME;RUN | `lvl.13`**',	
                        value: '__Short notes:__ `396` __Short length:__ `1:18`\n__Full notes:__ `1015` __Full length:__ `3:04`' 
                    }
                ]
            }, 
            {
                title: '**Seventeen 8th Mini Album \'Your Choice\'**',
                thumbnail: 'https://media.discordapp.net/attachments/1341215784327843980/1346086207062544394/ab67616d000082c1c1a20972c9a083d5cece9ce5.png?ex=67c6e7f8&is=67c59678&hm=68497a9d3946c62c5e4d254de51a4e0f7b3b27d481a61a81bfd0f2d34d771534&=&format=webp&quality=lossless&width=663&height=663',
                footer: 'Page 12/23',
                fields: [
                    { 
                        name: '**GAM3 BO1 | `lvl.14`**',	
                        value: '__Short notes:__ `597` __Short length:__ `1:16`\n__Full notes:__ `1414` __Full length:__ `3:09`' 
                    },
                    { 
                        name: '**Heavens Cloud | `lvl.14`**',	
                        value: '__Short notes:__ `437` __Short length:__ `1:16`\n__Full notes:__ `1497` __Full length:__ `3:52`' 
                    },
                    { 
                        name: '**Ready to love | `lvl.15`**',	
                        value: '__Short notes:__ `446` __Short length:__ `1:21`\n__Full notes:__ `1365` __Full length:__ `3:07`' 
                    },
                    { 
                        name: '**Anyone | `lvl.13`**',	
                        value: '__Short notes:__ `423` __Short length:__ `1:10`\n__Full notes:__ `1175` __Full length:__ `2:57`'
                    }
 
                ]
            }, 
            {
                title: '**Seventeen 9th Mini Album \'Attacca\'**',
                thumbnail: 'https://media.discordapp.net/attachments/1341215784327843980/1346087118589526057/ab67616d000082c15ac2a400576ac7f35aa7428b.png?ex=67c6e8d2&is=67c59752&hm=d7a3b0c5b09020b3c1e90fabcc3a1fab50669387aba6fe6d44944060ac29bb48&=&format=webp&quality=lossless&width=663&height=663',
                footer: 'Page 13/23',
                fields: [
                    { 
                        name: '**Rock with you | `lvl.10`**',	
                        value: '__Short notes:__ `361` __Short length:__ `1:16`\n__Full notes:__ `936` __Full length:__ `3:00`' 
                    },
                    { 
                        name: '**To You | `lvl.5`**',	
                        value: '__Short notes:__ `487` __Short length:__ `1:34`\n__Full notes:__ `1287` __Full length:__ `3:46`' 
                    },
                    { 
                        name: '**Crush | `lvl.14`**',	
                        value: '__Short notes:__ `461` __Short length:__ `1:08`\n__Full notes:__ `1237` __Full length:__ `2:50`' 
                    }
                ]
            }, 
            {
                title: '**Seventeen 4th Album \'Face the Sun\'**',
                thumbnail: 'https://media.discordapp.net/attachments/1341215784327843980/1346087119122206720/ab67616d000082c1decd839dd4fef3faf64c5fd5.png?ex=67c6e8d2&is=67c59752&hm=b2cdc1ea7bb23f75044891f0554331819a9dc6a501f5356e1ce63509fc33ada2&=&format=webp&quality=lossless&width=663&height=663',
                footer: 'Page 14/23',
                fields: [
                    { 
                        name: '**IF you leave me | `lvl.12`**',	
                        value: '__Short notes:__ `398` __Short length:__ `1:18`\n__Full notes:__ `1214` __Full length:__ `3:32`' 
                    },
                    { 
                        name: '**Domino | `lvl.14`**',	
                        value: '__Short notes:__ `447` __Short length:__ `1:15`\n__Full notes:__ `1600` __Full length:__ `3:34`' 
                    },
                    { 
                        name: '**Shadow | `lvl.14`**',	
                        value: '__Short notes:__ `516` __Short length:__ `1:23`\n__Full notes:__ `1444` __Full length:__ `3:32`' 
                    },
                    {
                         name: '**March | `lvl.14`**',	
                         value: '__Short notes:__ `487` __Short length:__ `1:12`\n__Full notes:__ `1400` __Full length:__ `3:16`' 
                        },
                    { 
                        name: '**DON QUIXOTE | `lvl.14`**',	
                        value: '__Short notes:__ `368` __Short length:__ `1:01`\n__Full notes:__ `1146` __Full length:__ `2:52`' 
                    },
                    { 
                        name: '**bout you | `lvl.11`**',	
                        value: '__Short notes:__ `357` __Short length:__ `1:00`\n__Full notes:__ `851` __Full length:__ `2:42`' 
                    },
                    { 
                        name: '**HOT | `lvl.14`**',	
                        value: '__Short notes:__ `588` __Short length:__ `1:37`\n__Full notes:__ `1259` __Full length:__ `3:17`' 
                    }
 
                ]
            }, 
            {
                title: '**Seventeen 4th Album Repackage \'SECTOR 17\'**',
                thumbnail: 'https://media.discordapp.net/attachments/1341215784327843980/1346087119491301446/ab67616d000082c1c31e3f3a15f96cfc4c8f7b7a.png?ex=67c6e8d2&is=67c59752&hm=b517740ba08a02db7ae9d456793ef0ef2317a2ba89b67d79f47bfffe597a9726&=&format=webp&quality=lossless&width=663&height=663',
                footer: 'Page 15/23',
                fields: [
                    { 
                        name: '**Fallin Flower (Korean Ver.) | `lvl.15`**',	
                        value: '__Short notes:__ `441` __Short length:__ `1:14`\n__Full notes:__ `1400` __Full length:__ `3:30`' 
                    },	
                    { 
                        name: '**Circles | `lvl.11`**',	
                        value: '__Short notes:__ `358` __Short length:__ `1:30`\n__Full notes:__ `1031` __Full length:__ `3:59`' 
                    },	
                    { 
                        name: '**<:nonrn:1344330008486740049> CHEERS | `lvl.7`**',	
                        value: '__Short notes:__ `478` __Short length:__ `1:12`\n__Full notes:__ `1331` __Full length:__ `3:01`' 
                    },	
                    { 
                        name: '**_WORLD | `lvl.11`**',	
                        value: '__Short notes:__ `339` __Short length:__ `1:11`\n__Full notes:__ `935` __Full length:__ `2:58`' 
                    }
 
                ]
            }, 
            {
                title: '**Seventeen 10th Mini Album \'FML\'**',
                thumbnail: 'https://media.discordapp.net/attachments/1341215784327843980/1346087119843754094/ab67616d000082c180e31ba0c05187e6310ef264.png?ex=67c6e8d2&is=67c59752&hm=0ec6973e5ffb80e6235d0275a90e29fd8e3d57cf0a30f103cadf4696dfcb0cf0&=&format=webp&quality=lossless&width=663&height=663',
                footer: 'Page 16/23',
                fields: [
                    { 
                        name: '**April Shower | `lvl.11`**',	
                        value: '__Short notes:__ `450` __Short length:__ `1:29`\n__Full notes:__ `1236` __Full length:__ `3:33`' 
                    },
                    { 
                        name: '**F*ck My Life | `lvl.13`**',	
                        value: '__Short notes:__ `442` __Short length:__ `1:27`\n__Full notes:__ `1159` __Full length:__ `3:22`' 
                    },
                    { 
                        name: '**Dust | `lvl.11`**',	
                        value: '__Short notes:__ `283` __Short length:__ `1:02`\n__Full notes:__ `837` __Full length:__ `2:45`' 
                    },
                    { 
                        name: '**Super | `lvl.12`**',	
                        value: '__Short notes:__ `283` __Short length:__ `1:03`\n__Full notes:__ `1077` __Full length:__ `3:20`'
                     }
 
                ]
            }, 
            {
                title: '**Seventeen 11th Mini Album \'Seventeenth Heaven\'**',
                thumbnail: 'https://media.discordapp.net/attachments/1341215784327843980/1346087725492600874/ab67616d000082c1d07a54abba4f5060c2486e3c.png?ex=67c6e962&is=67c597e2&hm=ed6fc1693077287f8a214e4c0c318e803f609b902c56c2147bd562e15e1d33d1&=&format=webp&quality=lossless&width=663&height=663',
                footer: 'Page 17/23',
                fields: [
                    { 
                        name: '**Yawn | `lvl.10`**',	
                        value: '__Short notes:__ `322` __Short length:__ `1:25`\n__Full notes:__ `1046` __Full length:__ `4:18`' 
                    },
                    { 
                        name: '**Diamond Days | `lvl.15`**',	
                        value: '__Short notes:__ `439` __Short length:__ `1:08`\n__Full notes:__ `1447` __Full length:__ `3:25`' 
                    },
                    {
                         name: '**Monster | `lvl.11`**',	
                         value: '__Short notes:__ `348` __Short length:__ `1:07`\n__Full notes:__ `867` __Full length:__ `2:39`' 
                        },
                    { 
                        name: '**Headliner | `lvl.12`**',	
                        value: '__Short notes:__ `405` __Short length:__ `1:23`\n__Full notes:__ `1032` __Full length:__ `3:09`' 
                    },
                    { 
                        name: '**Back 2 Back | `lvl.13`**',	
                        value: '__Short notes:__ `399` __Short length:__ `1:12`\n__Full notes:__ `1170` __Full length:__ `3:10`' 
                    },
                    { 
                        name: '**God of Music | `lvl.13`**',	
                        value: '__Short notes:__ `366` __Short length:__ `1:12`\n__Full notes:__ `1200` __Full length:__ `3:25`' 
                    }
                ]
            }, 
            {
                title: '**Seventeen Best Album \'17 Is Right Here\'**',
                thumbnail: 'https://media.discordapp.net/attachments/1341215784327843980/1346087725975080960/196922894992_Cover.png?ex=67c6e962&is=67c597e2&hm=3a3e3bc8d236e64f841cdd7fca9634d0970adb3194abd221f915d4c0c77a464a&=&format=webp&quality=lossless&width=663&height=663',
                footer: 'Page 18/23',
                fields: [
                    { 
                        name: '**Power of Love (Korean Ver.) | `lvl.10`**',	
                        value: '__Short notes:__ `418` __Short length:__ `1:35`\n__Full notes:__ `1082` __Full length:__ `3:49`' 
                    },
                    { 
                        name: '**Dream (Korean Ver.) | `lvl.12`**',	
                        value: '__Short notes:__ `289` __Short length:__ `1:02`\n__Full notes:__ `1025` __Full length:__ `3:06`' 
                    },
                    { 
                        name: '**24H (Korean Ver.) | `lvl.14`**',	
                        value: '__Short notes:__ `504` __Short length:__ `1:16`\n__Full notes:__ `1275` __Full length:__ `3:08`' 
                    },
                    { 
                        name: '**SPELL | `lvl.12`**',	
                        value: '__Short notes:__ `348` __Short length:__ `1:11`\n__Full notes:__ `1073` __Full length:__ `3:17`' 
                    },
                    { 
                        name: '**Ima -Even if the world ends tomorrow- (Korean Ver.) | `lvl.16`**',	
                        value: '__Short notes:__ `457` __Short length:__ `0:53`\n__Full notes:__ `1529` __Full length:__ `3:11`'
                     },
                    {
                        name: '**LALALI | `lvl.15`**',	
                        value: '__Short notes:__ `419` __Short length:__ `1:03`\n__Full notes:__ `1321` __Full length:__ `2:52`' 
                    },
                    { 
                        name: '**CALL CALL CALL! (Korean Ver.) | `lvl.15`**',	
                        value: '__Short notes:__ `416` __Short length:__ `1:08`\n__Full notes:__ `1383` __Full length:__ `3:20`' 
                    },
                    { 
                        name: '**Cheers to youth | `lvl.13`**',	
                        value: '__Short notes:__ `445` __Short length:__ `1:13`\n__Full notes:__ `1200` __Full length:__ `3:11`' 
                    },
                    { 
                        name: '**Not Alone (Korean Ver.) | `lvl.13`**',	
                        value: '__Short notes:__ `400` __Short length:__ `1:16`\n__Full notes:__ `1155` __Full length:__ `3:19`' 
                    },
                    { 
                        name: '**MAESTRO | `lvl.14`**',	
                        value: '__Short notes:__ `394` __Short length:__ `1:09`\n__Full notes:__ `1300` __Full length:__ `3:18`' 
                    }
 
                ]
            }, 
            {
                title: '**Seventeen 12th Mini Album \'Spill the Feels\'**',
                thumbnail: 'https://media.discordapp.net/attachments/1341215784327843980/1346087726650228810/198704184437_Cover.png?ex=67c6e963&is=67c597e3&hm=ad60391068231557ee708222fa97f39842e57a3d1684f07270065cea9222581d&=&format=webp&quality=lossless&width=663&height=663',
                footer: 'Page 19/23',
                fields: [
 
                    { 
                        name: '**Water | `lvl.15`**',	
                        value: '__Short notes:__ `423` __Short length:__ `0:58`\n__Full notes:__ `1159` __Full length:__ `2:31`' 
                    },
                    { 
                        name: '**Rain | `lvl.13`**',	
                        value: '__Short notes:__ `387` __Short length:__ `1:06`\n__Full notes:__ `1373` __Full length:__ `3:20`' 
                    },
                    { 
                        name: '**Candy | `lvl.9`**',	
                        value: '__Short notes:__ `200` __Short length:__ `1:04`\n__Full notes:__ `692` __Full length:__ `3:03`' 
                    },
                    { 
                        name: '**1 TO 13 | `lvl.13`**',	
                        value: '__Short notes:__ `454` __Short length:__ `1:11`\n__Full notes:__ `1113` __Full length:__ `2:37`' 
                    },
                    { 
                        name: '**LOVE, MONEY, FAME (Ft. DJ Khaled) | `lvl.13`**',	
                        value: '__Short notes:__ `513` __Short length:__ `1:14`\n__Full notes:__ `1358` __Full length:__ `3:06`' 
                    },
                ]
            }, 
            {
                title: '**Other Songs**',
                thumbnail: 'https://media.discordapp.net/attachments/1341215784327843980/1346087727275446282/ab67616d000082c17994bb03ec228dde677a37b3.png?ex=67c6e963&is=67c597e3&hm=5253a57efe9a63806607120995a6632f32700db901e497f6f61acabe59d4b085&=&format=webp&quality=lossless&width=663&height=663',
                footer: 'Page 20/23',
                fields:[
                    { 
                        name: '**Darl+ing | `lvl.10`**',	
                        value: '__Short notes:__ `340` __Short length:__ `1:19`\n__Full notes:__ `843` __Full length:__ `2:57`' 
                    },
                    { 
                        name: '**God of Music (Trot Remix) | `lvl.16`**',	
                        value: '__Short notes:__ `468` __Short length:__ `0:57`\n__Full notes:__ `1421` __Full length:__ `2:49`' 
                    }
                ]
            }
        ];

        const unitandsolo =[
            {
                title: 'Unit: `BSS`',
                thumbnail: 'https://media.discordapp.net/attachments/1341215784327843980/1346089946771099658/ufgecrugwiurc.jpg?ex=67c6eb74&is=67c599f4&hm=ed57698122d4d441635d18c8042edcca6cea8a89abb1e75f0a65787e960b36bb&=&format=webp&width=663&height=663',
                footer: 'Page 21/23',
                fields:[
                    {
                        name: '**<:nonrn:1344330008486740049> Just Do It | `lvl.7`**',
                        value: '__Short notes:__ `462` __Short length:__ `1:14`\n__Full notes:__ `1278` __Full length:__ `3:21`'
                    },
                    {
                        name: '**<:nonrn:1344330008486740049> LUNCH | `lvl.5`**',
                        value: '__Short notes:__ `310` __Short length:__ `1:16`\n__Full notes:__ `898` __Full length:__ `3:20`'
                    },
                    {
                        name: '**<:nonrn:1344330008486740049> Fighting (Ft. Lee Young Ji) | `lvl.6`**',
                        value: '__Short notes:__ `397` __Short length:__ `1:17`\n__Full notes:__ `1156` __Full length:__ `3:23`'
                    }
                ]
            },
            {
                title: 'Unit: `JxW`',
                thumbnail: 'https://media.discordapp.net/attachments/1341215784327843980/1346089947051982900/skfoiecehawerQ.jpg?ex=67c6eb74&is=67c599f4&hm=17b9685e3142cc44ad1e18cd06e0ded69234deb4a69859b6c79a733de6b79e11&=&format=webp&width=663&height=663',
                footer: 'Page 22/23',
                fields:[
                    {
                        name: '**<:nonrn:1344330008486740049> Last Night | `lvl.13`**',
                        value: '__Short notes:__ `327` __Short length:__ `1:02`\n__Full notes:__ `1069` __Full length:__ `2:57`'
                    }
                ]
            },
            {
                title: 'Solo: `Dino`',
                thumbnail: 'https://media.discordapp.net/attachments/1341215784327843980/1346090242440167434/psdjiweteitwe.png?ex=67c6ebba&is=67c59a3a&hm=80240c7a570356cfd0855fb0026857416ba669373b8047837199d7c0790547be&=&format=webp&quality=lossless&width=663&height=663',
                footer: 'Page 23/23',
                fields:[
                    {
                        name: '**Wait | `lvl.12`**',
                        value: '__Short notes:__ `282` __Short length:__ `0:58`\n__Full notes:__ `900` __Full length:__ `2:38`'
                    }
                ]
            }
        ]

        let currentPage=0;
        let svtpages = args[0] === 'uns' ? unitandsolo : [pages, ...unitandsolo].flat();
        const svtembed = new EmbedBuilder()
        .setTitle(svtpages[currentPage].title)
        .addFields(svtpages[currentPage].fields)
        .setColor('#CDF7F6')
        .setThumbnail(svtpages[currentPage].thumbnail)
        .setFooter({ text: `Page ${currentPage+1}/${svtpages.length}` });

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
    
    const svtmsg = await msg.channel.send({
        embeds: [svtembed],
        components: [row]
    });

    const filter = i => i.user.id === msg.author.id;
    const collector = svtmsg.createMessageComponentCollector({ time: 360000, filter });

    collector.on('collect', async i => {
        try {
            if (i.customId === 'first') {
                currentPage = 0;
            } else if (i.customId === 'previous') {
                currentPage--;
            } else if (i.customId === 'next') {
                currentPage++;
            } else if (i.customId === 'last') {
                currentPage = svtpages.length-1;
            }

            row.components[0].setDisabled(currentPage===0);
            row.components[1].setDisabled(currentPage===0);
            row.components[2].setDisabled(currentPage===svtpages.length-1);
            row.components[3].setDisabled(currentPage===svtpages.length-1);

             svtembed
                .setTitle(svtpages[currentPage].title)
                .setFields(svtpages[currentPage].fields)
                .setThumbnail(svtpages[currentPage].thumbnail)
                .setFooter({ text: `Page ${currentPage+1}/${svtpages.length}` });

            await i.update({
                embeds: [svtembed],
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
            svtmsg.edit({ components: [] }).catch(()=>{});
        } catch (error) {
            console.error('Error cleaning up comonents:', error);
        }
    });
    }
};