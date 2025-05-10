//bts song notes info file

const {
  EmbedBuilder,
  ActionRowBuilder,
  StringSelectMenuBuilder,
  ComponentType,
} = require("discord.js");

module.exports = {
  name: "bts",
  description: "Shows BTS song information.",

  async execute(msg, args) {
    const pages = [
      {
        title: "**2 Cool 4 Skool**",
        thumbnail:
          "https://media.discordapp.net/attachments/1341215784327843980/1344324883500498996/8804775049590_Cover.png?ex=67c07f9c&is=67bf2e1c&hm=5d3a01c20f48c6f005f07c3097b600aacc8333e5a8954929aac7e2d7d7442f75&=&format=webp&quality=lossless&width=663&height=663",
        fields: [
          {
            name: "**No More Dream | `lvl.17`**",
            value:
              "__Short notes:__ `790` __Short length:__ `1:43`\n__Full notes:__ `1723` __Full length:__ `2:34`",
          },
          {
            name: "**We are Bulletproof PT.2 | `lvl.13`**",
            value:
              "__Short notes:__ `497` __Short length:__ `1:35`\n__Full notes:__ `1293` __Full length:__ `3:44`",
          },
          {
            name: "**<:nonrn:1344330008486740049> Path | `lvl.6`**",
            value:
              "__Short notes:__ `519` __Short length:__ `1:43`\n__Full notes:__ `1262` __Full length:__ `2:34`",
          },
        ],
      },
      {
        title: "**O!RUL8,2?**",
        thumbnail:
          "https://media.discordapp.net/attachments/1341215784327843980/1344325006355726467/8804775051135_Cover.png?ex=67c07fb9&is=67bf2e39&hm=486e7e15d69da028d95b3c9cb4653b09981361ebd3ceb415a2e9e4b04ade33aa&=&format=webp&quality=lossless&width=663&height=663",
        fields: [
          {
            name: "**N.O | `lvl.17`**",
            value:
              "__Short notes:__ `607` __Short length:__ `1:43`\n__Full notes:__ `1320` __Full length:__ `2:34`",
          },
          {
            name: "**We On | `lvl.13`**",
            value:
              "__Short notes:__ `538` __Short length:__ `1:35`\n__Full notes:__ `1317` __Full length:__ `3:44`",
          },
          {
            name: "**Coffee | `lvl.13`**",
            value:
              "__Short notes:__ `570` __Short length:__ `1:35`\n__Full notes:__ `1411` __Full length:__ `3:44`",
          },
          {
            name: "**<:nonrn:1344330008486740049> Attack on Bangtan | `lvl.6`**",
            value:
              "__Short notes:__ `666` __Short length:__ `1:43`\n__Full notes:__ `1135` __Full length:__ `2:34`",
          },
          {
            name: "**<:nonrn:1344330008486740049> OUTRO: LUV IN SKOOL | `lvl.5`**",
            value:
              "__Short notes:__ `256` __Short length:__ `1:43`\n__Full notes:__ `440` __Full length:__ `2:34`",
          },
          {
            name: "**Paldogangsan | `lvl.13`**",
            value:
              "__Short notes:__ `417` __Short length:__ `1:35`\n__Full notes:__ `1307` __Full length:__ `3:44`",
          },
        ],
      },
      {
        title: "**Skool Luv Affair**",
        thumbnail:
          "https://media.discordapp.net/attachments/1341215784327843980/1345651567054815293/8804775053795_Cover.png?ex=67c5532e&is=67c401ae&hm=75b55992009dc0a84b89cb567335278107a1774155d375a418038d854dc892a1&=&format=webp&quality=lossless&width=663&height=663",
        fields: [
          {
            name: "**Boy in Luv | `lvl.12`**",
            value:
              "__Short notes:__ `567` __Short length:__ `1:53`\n__Full notes:__ `1210` __Full length:__ `3:51`",
          },
          {
            name: "**<:nonrn:1344330008486740049> Just One Day | `lvl.6`**",
            value:
              "__Short notes:__ `483` __Short length:__ `1:38`\n__Full notes:__ `1322` __Full length:__ `3:59`",
          },
          {
            name: "**<:nonrn:1344330008486740049> Tomorrow | `lvl.6`**",
            value:
              "__Short notes:__ `583` __Short length:__ `1:50`\n__Full notes:__ `1459` __Full length:__ `4:22`",
          },
          {
            name: "**<:nonrn:1344330008486740049> Jump | `lvl.6`**",
            value:
              "__Short notes:__ `510` __Short length:__ `1:45`\n__Full notes:__ `1284` __Full length:__ `3:56`",
          },
        ],
      },
      {
        title: "**DARK&WILD**",
        thumbnail:
          "https://media.discordapp.net/attachments/1341215784327843980/1345651567826829333/ab67617d000082c1d76f33d343c35e23e03228c8.png?ex=67c5532e&is=67c401ae&hm=e44351ac813bee37776f947f9699c836bbd42989227ec9b79798c58eb56fa0ac&=&format=webp&quality=lossless&width=663&height=663",
        fields: [
          {
            name: "**Danger | `lvl.13`**",
            value:
              "__Short notes:__ `880` __Short length:__ `2:20`\n__Full notes:__ `1706` __Full length:__ `4:05`",
          },
          {
            name: "**<:nonrn:1344330008486740049> Let Me Know | `lvl.6`**",
            value:
              "__Short notes:__ `460` __Short length:__ `1:45`\n__Full notes:__ `1271` __Full length:__ `4:15`",
          },
          {
            name: "**<:nonrn:1344330008486740049> Rain | `lvl.6`**",
            value:
              "__Short notes:__ `434` __Short length:__ `1:34`\n__Full notes:__ `1233` __Full length:__ `4:25`",
          },
          {
            name: "**Embarrased | `lvl.14`**",
            value:
              "__Short notes:__ `762` __Short length:__ `1:50`\n__Full notes:__ `1714` __Full length:__ `4:02`",
          },
          {
            name: "**<:nonrn:1344330008486740049> 24/7=Heaven | `lvl.6`**",
            value:
              "__Short notes:__ `514` __Short length:__ `1:47`\n__Full notes:__ `1117` __Full length:__ `3:46`",
          },
          {
            name: "**Look Here | `lvl.15`**",
            value:
              "__Short notes:__ `762` __Short length:__ `1:35`\n__Full notes:__ `1912` __Full length:__ `3:39`",
          },
          {
            name: "**<:nonrn:1344330008486740049> 2ND GRADE | `lvl.8`**",
            value:
              "__Short notes:__ `753` __Short length:__ `2:04`\n__Full notes:__ `1540` __Full length:__ `3:55`",
          },
          {
            name: "**<:nonrn:1344330008486740049> Outro: Do you think it makes sense? | `lvl.5`**",
            value:
              "__Short notes:__ `521` __Short length:__ `2:01`\n__Full notes:__ `792` __Full length:__ `2:53`",
          },
          {
            name: "**<:nonrn:1344330008486740049> Hip Hop Phile | `lvl.7`**",
            value:
              "__Short notes:__ `670` __Short length:__ `1:43`\n__Full notes:__ `1875` __Full length:__ `4:17`",
          },
        ],
      },
      {
        title: "**The Most Beautiful Moment in Life, Pt. 1**",
        thumbnail:
          "https://media.discordapp.net/attachments/1341215784327843980/1345651568267235328/8804775062179_Cover.png?ex=67c5532e&is=67c401ae&hm=7327faf800fe49cd2acb5fb05c1ffb0d80077428370a707c83e99631f5aa1e4f&=&format=webp&quality=lossless&width=663&height=663",
        fields: [
          {
            name: "**I NEED U | `lvl.12`**",
            value:
              "__Short notes:__ `525` __Short length:__ `1:31`\n__Full notes:__ `1287` __Full length:__ `3:31`",
          },
          {
            name: "**Hold Me Tight | `lvl.13`**",
            value:
              "__Short notes:__ `807` __Short length:__ `2:14`\n__Full notes:__ `1768` __Full length:__ `4:35`",
          },
          {
            name: "**DOPE | `lvl.17`**",
            value:
              "__Short notes:__ `789` __Short length:__ `2:07`\n__Full notes:__ `1569` __Full length:__ `4:00`",
          },
          {
            name: "**Boyz with Fun | `lvl.17`**",
            value:
              "__Short notes:__ `825` __Short length:__ `1:46`\n__Full notes:__ `1955` __Full length:__ `4:04`",
          },
          {
            name: "**<:nonrn:1344330008486740049> Moving On | `lvl.6`**",
            value:
              "__Short notes:__ `535` __Short length:__ `1:45`\n__Full notes:__ `1517` __Full length:__ `4:53`",
          },
        ],
      },
      {
        title: "**The Most Beautiful Moment in Life, Pt. 2**",
        thumbnail:
          "https://media.discordapp.net/attachments/1341215784327843980/1345651568736731249/8804775066856_Cover.png?ex=67c5532e&is=67c401ae&hm=48fd1b75f350ed4bd03758e19914b4953d32f6706209d5857221509faa17da44&=&format=webp&quality=lossless&width=663&height=663",
        fields: [
          {
            name: "**Run | `lvl.14`**",
            value:
              "__Short notes:__ `605` __Short length:__ `1:48`\n__Full notes:__ `1430` __Full length:__ `3:57`",
          },
          {
            name: "**Butterfly | `lvl.13`**",
            value:
              "__Short notes:__ `562` __Short length:__ `1:48`\n__Full notes:__ `1300` __Full length:__ `3:59`",
          },
          {
            name: "**Whalien 52 | `lvl.14`**",
            value:
              "__Short notes:__ `695` __Short length:__ `1:54`\n__Full notes:__ `1587` __Full length:__ `4:03`",
          },
          {
            name: "**Ma City | `lvl.13`**",
            value:
              "__Short notes:__ `602` __Short length:__ `1:58`\n__Full notes:__ `1473` __Full length:__ `4:17`",
          },
          {
            name: "**<:nonrn:1344330008486740049> Silver Spoon | `lvl.5`**",
            value:
              "__Short notes:__ `428` __Short length:__ `1:40`\n__Full notes:__ `1119` __Full length:__ `3:35`",
          },
          {
            name: "**Autumn Leaves | `lvl.13`**",
            value:
              "__Short notes:__ `648` __Short length:__ `1:58`\n__Full notes:__ `1422` __Full length:__ `4:27`",
          },
        ],
      },
      {
        title: "**The Most Beautiful Moment in Life: Young Forever**",
        thumbnail:
          "https://media.discordapp.net/attachments/1341215784327843980/1345704681934032917/8804775070341_Cover.png?ex=67c584a6&is=67c43326&hm=c80a838fd28deb29f24d2de1c3f1ce2d3af276513a5fa08cbb39a3295a8d88dd&=&format=webp&quality=lossless&width=663&height=663",
        fields: [
          {
            name: "**Save Me | `lvl.15`**",
            value:
              "__Short notes:__ `611` __Short length:__ `1:43`\n__Full notes:__ `1256` __Full length:__ `3:17`",
          },
          {
            name: "**Epilogue: Young Forever | `lvl.11`**",
            value:
              "__Short notes:__ `551` __Short length:__ `1:47`\n__Full notes:__ `885` __Full length:__ `2:52`",
          },
          {
            name: "**<:nonrn:1344330008486740049> House Of Cards (Full Length Edition) | `lvl.4`**",
            value:
              "__Short notes:__ `299` __Short length:__ `1:22`\n__Full notes:__ `920` __Full length:__ `3:46`",
          },
          {
            name: "**<:nonrn:1344330008486740049> Love is Not Over (Full Length Edition) | `lvl.5`**",
            value:
              "__Short notes:__ `367` __Short length:__ `1:38`\n__Full notes:__ `988` __Full length:__ `3:42`",
          },
          {
            name: "**FIRE | `lvl.12`**",
            value:
              "__Short notes:__ `449` __Short length:__ `1:33`\n__Full notes:__ `1058` __Full length:__ `3:23`",
          },
        ],
      },
      {
        title: "**WINGS**",
        thumbnail:
          "https://media.discordapp.net/attachments/1341215784327843980/1345704682781151272/8804775073618_Cover.png?ex=67c584a6&is=67c43326&hm=fd5afcbfba6d7317701cfbb38d9030b3aff25fddcfa3639c272398cf3e8a64ed&=&format=webp&quality=lossless&width=663&height=663",
        fields: [
          {
            name: "**Blood, Sweat and Tears | `lvl.12`**",
            value:
              "__Short notes:__ `563` __Short length:__ `1:51`\n__Full notes:__ `1120` __Full length:__ `3:37`",
          },
          {
            name: "**Lost | `lvl.13`**",
            value:
              "__Short notes:__ `698` __Short length:__ `1:48`\n__Full notes:__ `1774` __Full length:__ `4:02`",
          },
          {
            name: "**2! 3! | `lvl.11`**",
            value:
              "__Short notes:__ `555` __Short length:__ `2:01`\n__Full notes:__ `1267` __Full length:__ `4:33`",
          },
          {
            name: "**Begin `JK` | `lvl.15`**",
            value:
              "__Short notes:__ `525` __Short length:__ `1:41`\n__Full notes:__ `1340` __Full length:__ `3:50`",
          },
          {
            name: "**Awake `Jin` | `lvl.11`**",
            value:
              "__Short notes:__ `281` __Short length:__ `1:21`\n__Full notes:__ `1069` __Full length:__ `3:46`",
          },
          {
            name: "**MAMA `J-Hope` | `lvl.14`**",
            value:
              "__Short notes:__ `589` __Short length:__ `1:24`\n__Full notes:__ `1596` __Full length:__ `3:32`",
          },
        ],
      },
      {
        title: "**You Never Walk Alone**",
        thumbnail:
          "https://media.discordapp.net/attachments/1341215784327843980/1345704683448041544/8804775077494_Cover.png?ex=67c584a6&is=67c43326&hm=e4177509dc1f1050b24c33db60d6ff660950c8bf4c58d36fdf992f962d3526a7&=&format=webp&quality=lossless&width=663&height=663",
        fields: [
          {
            name: "**Spring Day | `lvl.11`**",
            value:
              "__Short notes:__ `507` __Short length:__ `2:14`\n__Full notes:__ `1084` __Full length:__ `4:34`",
          },
          {
            name: "**Not Today | `lvl.15`**",
            value:
              "__Short notes:__ `772` __Short length:__ `1:54`\n__Full notes:__ `1786` __Full length:__ `3:52`",
          },
          {
            name: "**Outro: Wings | `lvl.17`**",
            value:
              "__Short notes:__ `605` __Short length:__ `1:22`\n__Full notes:__ `1767` __Full length:__ `3:45`",
          },
          {
            name: "**A Supplementary Story: You Never Walk Alone` | `lvl.15`**",
            value:
              "__Short notes:__ `315` __Short length:__ `0:46`\n__Full notes:__ `1100` __Full length:__ `2:36`",
          },
        ],
      },
      {
        title: "**Love Yourself: 承 'HER'**",
        thumbnail:
          "https://media.discordapp.net/attachments/1341215784327843980/1345704684635160706/8804775083280_Cover.png?ex=681fd366&is=681e81e6&hm=39b767eac4b3f10e89539308c1d8f69196a1ec960ece52affb4f56ad3efd5f7c&=&format=webp&quality=lossless&width=800&height=800",
        fields: [
          {
            name: "**DNA | `lvl.13`**",
            value:
              "__Short notes:__ `484` __Short length:__ `1:38`\n__Full notes:__ `1175` __Full length:__ `3:43`",
          },
          {
            name: "**Dimple | `lvl.14`**",
            value:
              "__Short notes:__ `423` __Short length:__ `1:11`\n__Full notes:__ `1287` __Full length:__ `3:17`",
          },
          {
            name: "**Go Go | `lvl.15`**",
            value:
              "__Short notes:__ `836` __Short length:__ `1:56`\n__Full notes:__ `1707` __Full length:__ `3:55`",
          },
          {
            name: "**<:nonrn:1344330008486740049> SEA | `lvl.5`**",
            value:
              "__Short notes:__ `503` __Short length:__ `2:04`\n__Full notes:__ `1292` __Full length:__ `5:15`",
          },
          {
            name: "**MIC Drop (Steve Aoki Remix | Ft. Desiigner) | `lvl.15`**",
            value:
              "__Short notes:__ `939` __Short length:__ `2:06`\n__Full notes:__ `1841` __Full length:__ `3:59`",
          },
          {
            name: "**Pied Piper | `lvl.14`**",
            value:
              "__Short notes:__ `823` __Short length:__ `2:03`\n__Full notes:__ `1776` __Full length:__ `4:05`",
          },
          {
            name: "**Best of Me | `lvl.17`**",
            value:
              "__Short notes:__ `400` __Short length:__ `1:09`\n__Full notes:__ `1584` __Full length:__ `3:47`",
          },
          {
            name: "**<:nonrn:1344330008486740049> MIC Drop | `lvl.7`**",
            value:
              "__Short notes:__ `604` __Short length:__ `2:06`\n__Full notes:__ `1392` __Full length:__ `3:58`",
          },
        ],
      },
      {
        title: "**Love Yourself: 轉 'TEAR'**",
        thumbnail:
          "https://media.discordapp.net/attachments/1341215784327843980/1345715829529907251/ab67617d000082c1844c682a7db6690cba54d41d.png?ex=67c58f07&is=67c43d87&hm=5d7905d49215a4cf529292085379db343924b1da065aa9b3ba8f3de5e9d614ba&=&format=webp&quality=lossless&width=663&height=663",
        fields: [
          {
            name: "**FAKE LOVE | `lvl.17`**",
            value:
              "__Short notes:__ `776` __Short length:__ `2:14`\n__Full notes:__ `1483` __Full length:__ `4:06`",
          },
          {
            name: "**<:nonrn:1344330008486740049> 134340 | `lvl.5`**",
            value:
              "__Short notes:__ `490` __Short length:__ `1:47`\n__Full notes:__ `1113` __Full length:__ `3:50`",
          },
          {
            name: "**<:nonrn:1344330008486740049> Love Maze | `lvl.5`**",
            value:
              "__Short notes:__ `530` __Short length:__ `1:48`\n__Full notes:__ `1172` __Full length:__ `3:42`",
          },
          {
            name: "**Magic Shop | `lvl.12`**",
            value:
              "__Short notes:__ `519` __Short length:__ `1:48`\n__Full notes:__ `1366` __Full length:__ `4:36`",
          },
          {
            name: "**Anpanman | `lvl.13`**",
            value:
              "__Short notes:__ `504` __Short length:__ `1:54`\n__Full notes:__ `1375` __Full length:__ `3:53`",
          },
          {
            name: "**So What | `lvl.13`**",
            value:
              "__Short notes:__ `705` __Short length:__ `2:09`\n__Full notes:__ `1579` __Full length:__ `4:42`",
          },
          {
            name: "**Paradise | `lvl.13`**",
            value:
              "__Short notes:__ `387` __Short length:__ `1:13`\n__Full notes:__ `1266` __Full length:__ `3:31`",
          },
          {
            name: "**Airplane pt.2 | `lvl.13`**",
            value:
              "__Short notes:__ `740` __Short length:__ `1:56`\n__Full notes:__ `1364` __Full length:__ `3:39`",
          },
          {
            name: "**The Truth Untold (Ft. Steve Aoki) | `lvl.13`**",
            value:
              "__Short notes:__ `313` __Short length:__ `1:30`\n__Full notes:__ `842` __Full length:__ `4:02`",
          },
        ],
      },
      {
        title: "**Love Yourself: 結 'ANSWER'**",
        thumbnail:
          "https://media.discordapp.net/attachments/1341215784327843980/1345715829945274388/192562871591_Cover.png?ex=67c58f08&is=67c43d88&hm=370238b2ff18cdcb632cc81aea1e98105178fef498e58d7f5630810ae7732176&=&format=webp&quality=lossless&width=663&height=663",
        fields: [
          {
            name: "**IDOL | `lvl.12`**",
            value:
              "__Short notes:__ `535` __Short length:__ `1:34`\n__Full notes:__ `1240` __Full length:__ `3:43`",
          },
          {
            name: "**I'm Fine | `lvl.15`**",
            value:
              "__Short notes:__ `608` __Short length:__ `1:45`\n__Full notes:__ `1700` __Full length:__ `4:00`",
          },
          {
            name: "**<:nonrn:1344330008486740049> Answer: Love Yourself | `lvl.4`**",
            value:
              "__Short notes:__ `474` __Short length:__ `1:55`\n__Full notes:__ `1113` __Full length:__ `4:11`",
          },
          {
            name: "**<:nonrn:1344330008486740049> Trivia 轉: Seesaw `Suga` | `lvl.5`**",
            value:
              "__Short notes:__ `425` __Short length:__ `1:46`\n__Full notes:__ `1130` __Full length:__ `4:06`",
          },
          {
            name: "**Epiphany `Jin` | `lvl.11`**",
            value:
              "__Short notes:__ `537` __Short length:__ `1:35`\n__Full notes:__ `1027` __Full length:__ `4:00`",
          },
          {
            name: "**Euphoria `JK` | `lvl.13`**",
            value:
              "__Short notes:__ `537` __Short length:__ `1:25`\n__Full notes:__ `1344` __Full length:__ `3:49`",
          },
        ],
      },
      {
        title: "**Map of the Soul: Persona**",
        thumbnail:
          "https://media.discordapp.net/attachments/1341215784327843980/1345715830339407933/193483706238_Cover.png?ex=67c58f08&is=67c43d88&hm=3be447e12a070b9ae8966a372ed4d905af04064bb49851da25259917263de653&=&format=webp&quality=lossless&width=663&height=663",
        fields: [
          {
            name: "**Boy with Luv (Ft. Halsey) | `lvl.13`**",
            value:
              "__Short notes:__ `526` __Short length:__ `1:41`\n__Full notes:__ `1336` __Full length:__ `3:49`",
          },
          {
            name: "**Dionysus | `lvl.13`**",
            value:
              "__Short notes:__ `596` __Short length:__ `1:46`\n__Full notes:__ `1568` __Full length:__ `4:09`",
          },
          {
            name: "**Mikrokosmos | `lvl.15`**",
            value:
              "__Short notes:__ `755` __Short length:__ `1:42`\n__Full notes:__ `1700` __Full length:__ `3:46`",
          },
          {
            name: "**<:nonrn:1344330008486740049> HOME | `lvl.6`**",
            value:
              "__Short notes:__ `526` __Short length:__ `1:40`\n__Full notes:__ `1303` __Full length:__ `3:54`",
          },
          {
            name: "**Jamais Vu `Jin, J-Hope, JK` | `lvl.13`**",
            value:
              "__Short notes:__ `378` __Short length:__ `1:20`\n__Full notes:__ `1234` __Full length:__ `3:46`",
          },
        ],
      },
      {
        title: "**Map of the Soul: 7**",
        thumbnail:
          "https://media.discordapp.net/attachments/1341215784327843980/1345715830641755829/195081034713_Cover.png?ex=67c58f08&is=67c43d88&hm=d6bd8dbc7289f9990176d1ab8b6157ed2fc406267939a2b1bb462879bf897152&=&format=webp&quality=lossless&width=663&height=663",
        footer: "Page 14/17",
        fields: [
          {
            name: "**ON | `lvl.12`**",
            value:
              "__Short notes:__ `463` __Short length:__ `1:37`\n__Full notes:__ `1274` __Full length:__ `4:06`",
          },
          {
            name: "**Black Swan | `lvl.12`**",
            value:
              "__Short notes:__ `565` __Short length:__ `1:36`\n__Full notes:__ `1217` __Full length:__ `3:18`",
          },
          {
            name: "**<:nonrn:1344330008486740049> We are Bulletproof: The Eternal | `lvl.5`**",
            value:
              "__Short notes:__ `460` __Short length:__ `1:40`\n__Full notes:__ `1300` __Full length:__ `4:22`",
          },
          {
            name: "**0:00 (Zero O' Clock) `Vocal Unit` | `lvl.13`**",
            value:
              "__Short notes:__ `621` __Short length:__ `1:55`\n__Full notes:__ `1400` __Full length:__ `4:10`",
          },
          {
            name: "**<:nonrn:1344330008486740049> Louder than Bombs | `lvl.5`**",
            value:
              "__Short notes:__ `343` __Short length:__ `1:23`\n__Full notes:__ `1073` __Full length:__ `3:37`",
          },
          {
            name: "**UGH! `Rap Unit` | `lvl.17`**",
            value:
              "__Short notes:__ `826` __Short length:__ `1:48`\n__Full notes:__ `1766` __Full length:__ `3:45`",
          },
          {
            name: "**Friends `Jimin, V` | `lvl.12`**",
            value:
              "__Short notes:__ `372` __Short length:__ `1:09`\n__Full notes:__ `1144` __Full length:__ `3:19`",
          },
          {
            name: "**<:nonrn:1344330008486740049> Respect `RM, Suga` | `lvl.6`**",
            value:
              "__Short notes:__ `485` __Short length:__ `1:36`\n__Full notes:__ `1324` __Full length:__ `3:58`",
          },
          {
            name: "**My Time `JK` | `lvl.14`**",
            value:
              "__Short notes:__ `463` __Short length:__ `1:46`\n__Full notes:__ `1236` __Full length:__ `3:54`",
          },
          {
            name: "**Inner Child `V` | `lvl.13`**",
            value:
              "__Short notes:__ `497` __Short length:__ `1:28`\n__Full notes:__ `1346` __Full length:__ `3:53`",
          },
          {
            name: "**Moon `Jin` | `lvl.14`**",
            value:
              "__Short notes:__ `480` __Short length:__ `1:22`\n__Full notes:__ `1317` __Full length:__ `3:29`",
          },
        ],
      },
      {
        // only the notes and length left, song title and levels are correct already (cont.)
        title: "**BE**",
        thumbnail:
          "https://media.discordapp.net/attachments/1341215784327843980/1348127343105019914/195497623273_Cover.png?ex=67ce54ed&is=67cd036d&hm=ff1d55e436a8c4530bf958f9f9d109d69d2c6318d96305c70b27d0066a4f3947&=&format=webp&quality=lossless&width=800&height=800",
        fields: [
          {
            name: "**Life Goes On | `lvl.12`**",
            value:
              "__Short notes:__ `561` __Short length:__ `1:50`\n__Full notes:__ `1058` __Full length:__ `3:27`",
          },
          {
            name: "**Telepathy | `lvl.13`**",
            value:
              "__Short notes:__ `662` __Short length:__ `1:56`\n__Full notes:__ `1260` __Full length:__ `3:22`",
          },
          {
            name: "**Dis-ease | `lvl.13`**",
            value:
              "__Short notes:__ `505` __Short length:__ `1:32`\n__Full notes:__ `1393` __Full length:__ `4:00`",
          },
          {
            name: "**Blue & Grey | `lvl.11`**",
            value:
              "__Short notes:__ `732` __Short length:__ `2:30`\n__Full notes:__ `1301` __Full length:__ `4:15`",
          },
          {
            name: "**Fly To My Room | `lvl.13`**",
            value:
              "__Short notes:__ `345` __Short length:__ `1:13`\n__Full notes:__ `1325` __Full length:__ `3:42`",
          },
          {
            name: "**Stay | `lvl.13`**",
            value:
              "__Short notes:__ `319` __Short length:__ `1:06`\n__Full notes:__ `1218` __Full length:__ `3:25`",
          },
        ],
      },
      {
        title: "Proof",
        thumbnail:
          "https://media.discordapp.net/attachments/1341215784327843980/1348127343662858321/196922067341_Cover.png?ex=67ce54ed&is=67cd036d&hm=896bd596de123ff83b1b0e822e76edb1661bbba493477765915de54efc8d3782&=&format=webp&quality=lossless&width=800&height=800",
        fields: [
          {
            name: "**Yet to Come (The Most Beautiful Moment) | `lvl.11`**",
            value:
              "__Short notes:__ `475` __Short length:__ `1:38`\n__Full notes:__ `1071` __Full length:__ `3:14`",
          },
          {
            name: "**Run BTS | `lvl.13`**",
            value:
              "__Short notes:__ `384` __Short length:__ `1:23`\n__Full notes:__ `1150` __Full length:__ `3:25`",
          },
          {
            name: "**For Youth | `lvl.11`**",
            value:
              "__Short notes:__ `385` __Short length:__ `1:46`\n__Full notes:__ `1360` __Full length:__ `4:24`",
          },
        ],
      },
      {
        title: "**Other Songs**",
        thumbnail:
          "https://media.discordapp.net/attachments/1341215784327843980/1348127344040349726/196006771362_Cover.png?ex=67ce54ed&is=67cd036d&hm=f9370e1c89832db479f292074fbf1783b004704bcb1e9956d7ccf6e40d8a71f2&=&format=webp&quality=lossless&width=800&height=800",
        fields: [
          {
            name: "**Ddaeng | `lvl.13`**",
            value:
              "__Short notes:__ `374` __Short length:__ `1:15`\n__Full notes:__ `1331` __Full length:__ `3:56`",
          },
          {
            name: "**Dynamite | `lvl.11`**",
            value:
              "__Short notes:__ `323` __Short length:__ `1:07`\n__Full notes:__ `1080` __Full length:__ `3:19`",
          },
          {
            name: "**Butter | `lvl.11`**",
            value:
              "__Short notes:__ `536` __Short length:__ `1:38`\n__Full notes:__ `907` __Full length:__ `2:44`",
          },
        ],
      },
    ];

    const solopages = [
      {
        title: "**Solo: `RM`**",
        thumbnail:
          "https://media.discordapp.net/attachments/1341215784327843980/1345662324853444619/Gk4kzIVXMAAnS8S.png?ex=67c55d33&is=67c40bb3&hm=2ee8da669db965ea4ea4819f5ac898ad8962c5379ff5395c09f3f4a60b8651f0&=&format=webp&quality=lossless&width=433&height=433",
        fields: [
          {
            name: "**<:nonrn:1344330008486740049> No. 2 (with Park Ji Yoon) | `lvl.5`**",
            value:
              "__Short notes:__ `548` __Short length:__ `1:49`\n__Full notes:__ `975` __Full length:__ `3:14`",
          },
          {
            name: "**<:nonrn:1344330008486740049> Wild Flower (with youjeen) | `lvl.5`**",
            value:
              "__Short notes:__ `548` __Short length:__ `1:49`\n__Full notes:__ `975` __Full length:__ `3:14`",
          },
          {
            name: "**<:nonrn:1344330008486740049> Still Life (with Anderson.Paak) | `lvl.5`**",
            value:
              "__Short notes:__ `548` __Short length:__ `1:49`\n__Full notes:__ `975` __Full length:__ `3:14`",
          },
          {
            name: "**<:nonrn:1344330008486740049> Forg_tful (with Kim Sawol) | `lvl.5`**",
            value:
              "__Short notes:__ `548` __Short length:__ `1:49`\n__Full notes:__ `975` __Full length:__ `3:14`",
          },
        ],
      },
      {
        title: "**Solo: `Jin`**",
        thumbnail:
          "https://media.discordapp.net/attachments/1341215784327843980/1345663341196218398/dsafaescfwe.jpg?ex=67c55e25&is=67c40ca5&hm=d76ab87de5b809e93e1a91a965fef0e9d3ce04af69486805aab0779b44368e9b&=&format=webp&width=663&height=663",
        fields: [
          {
            name: "**Tonight | `lvl.10`**",
            value:
              "__Short notes:__ `223` __Short length:__ `1:12`\n__Full notes:__ `693` __Full length:__ `2:58`",
          },
          {
            name: "**Abyss | `lvl.11`**",
            value:
              "__Short notes:__ `198` __Short length:__ `0:58`\n__Full notes:__ `627` __Full length:__ `2:35`",
          },
          {
            name: "**Super Tuna | `lvl.13`**",
            value:
              "__Short notes:__ `393` __Short length:__ `1:05`\n__Full notes:__ `720` __Full length:__ `1:54`",
          },
          {
            name: "**Running Wild | `lvl.13`**",
            value:
              "__Short notes:__ `341` __Short length:__ `0:57`\n__Full notes:__ `1080` __Full length:__ `2:31`",
          },
        ],
      },
      {
        title: "**Solo: `Suga`**",
        thumbnail:
          "https://media.discordapp.net/attachments/1341215784327843980/1345665131337486422/Gk8QuybXoAACepM.jpg?ex=67c55fd0&is=67c40e50&hm=1bfe8e71e9193cf1f3de4de3ccad076f66205c60e48e3a83c0e267c452b81aba&=&format=webp&width=534&height=534",
        fields: [
          {
            name: "**Haegeum | `lvl.13`**",
            value:
              "__Short notes:__ `401` __Short length:__ `1:22`\n__Full notes:__ `980` __Full length:__ `2:48`",
          },
          {
            name: "**<:nonrn:1344330008486740049> People Pt.2 (Feat. IU) | `lvl.5`**",
            value:
              "__Short notes:__ `265` __Short length:__ `1:17`\n__Full notes:__ `944` __Full length:__ `3:34`",
          },
        ],
      },
      {
        title: "**Solo: `J-Hope`**",
        thumbnail:
          "https://media.discordapp.net/attachments/1341215784327843980/1345665131027238944/fdfvsfsf.jpg?ex=67c55fd0&is=67c40e50&hm=45e75a78b0ae8e506d62268a25279309aa5c18ea12ede8d2311d3a390680a120&=&format=webp&width=663&height=663",
        fields: [
          {
            name: "**Hope World | `lvl.13`**",
            value:
              "__Short notes:__ `369` __Short length:__ `1:21`\n__Full notes:__ `1034` __Full length:__ `3:25`",
          },
          {
            name: "**Daydream | `lvl.13`**",
            value:
              "__Short notes:__ `441` __Short length:__ `1:17`\n__Full notes:__ `1272` __Full length:__ `3:49`",
          },
          {
            name: "**<:nonrn:1344330008486740049> MORE | `lvl.5`**",
            value:
              "__Short notes:__ `361` __Short length:__ `1:19`\n__Full notes:__ `834` __Full length:__ `3:00`",
          },
          {
            name: "**<:nonrn:1344330008486740049> Arson | `lvl.6`**",
            value:
              "__Short notes:__ `335` __Short length:__ `1:07`\n__Full notes:__ `828` __Full length:__ `2:40`",
          },
          {
            name: "**Safety Zone | `lvl.14`**",
            value:
              "__Short notes:__ `356` __Short length:__ `0:52`\n__Full notes:__ `1136` __Full length:__ `2:45`",
          },
          {
            name: "**NEURON (with Gaeko, yoonmirae) | `lvl.15`**",
            value:
              "__Short notes:__ `498` __Short length:__ `1:33`\n__Full notes:__ `1733` __Full length:__ `4:33`",
          },
          {
            name: "**on the street (solo version) | `lvl.13`**",
            value:
              "__Short notes:__ `392` __Short length:__ `1:10`\n__Full notes:__ `1219` __Full length:__ `3:11`",
          },
          {
            name: "**i wonder... (with JungKook of BTS) | `lvl.13`**",
            value:
              "__Short notes:__ `368` __Short length:__ `0:52`\n__Full notes:__ `1034` __Full length:__ `2:43`",
          },
          {
            name: "**lock / unlock (with benny blanco, Nile Rodgers) | `lvl.15`**",
            value:
              "__Short notes:__ `445` __Short length:__ `0:58`\n__Full notes:__ `1245` __Full length:__ `3:02`",
          },
          {
            name: "**i don't know (with 허윤진 of LE SSERAFIM) | `lvl.13`**",
            value:
              "__Short notes:__ `391` __Short length:__ `1:04`\n__Full notes:__ `1139` __Full length:__ `3:03`",
          },
        ],
      },
      {
        title: "**Solo: `Jimin`**",
        thumbnail:
          "https://media.discordapp.net/attachments/1341215784327843980/1345665131677356083/Gk8-BV3X0AACw9j.jpg?ex=67eee710&is=67ed9590&hm=8522586d52920f787ea4cfec7309cdc23e83e751364ab7d869c076ba1e8fdf34&=&format=webp&width=424&height=424",
        fields: [
          {
            name: "**Christmas Love | `lvl.11`**",
            value:
              "__Short notes:__ `312` __Short length:__ `1:02`\n__Full notes:__ `1100` __Full length:__ `3:18`",
          },
          {
            name: "**Like Crazy | `lvl.12`**",
            value:
              "__Short notes:__ `303` __Short length:__ `1:10`\n__Full notes:__ `1031` __Full length:__ `3:32`",
          },
          {
            name: "**<:nonrn:1344330008486740049> Alone | `lvl.4`**",
            value:
              "__Short notes:__ `314` __Short length:__ `1:12`\n__Full notes:__ `1057` __Full length:__ `3:31`",
          },
          {
            name: "**<:nonrn:1344330008486740049> Like Crazy (English Ver.) | `lvl.5`**",
            value:
              "__Short notes:__ `377` __Short length:__ `1:10`\n__Full notes:__ `1153` __Full length:__ `3:32`",
          },
          {
            name: "**Closer Than This | `lvl.13`**",
            value:
              "__Short notes:__ `394` __Short length:__ `1:12`\n__Full notes:__ `1412` __Full length:__ `3:43`",
          },
          {
            name: "**Who | `lvl.14`**",
            value:
              "__Short notes:__ `399` __Short length:__ `1:02`\n__Full notes:__ `1200` __Full length:__ `2:50`",
          },
        ],
      },
      {
        title: "**Solo: `V`**",
        thumbnail:
          "https://media.discordapp.net/attachments/1341215784327843980/1345665132092723221/sdfgaecicfae.jpg?ex=67c55fd0&is=67c40e50&hm=7daedf76ee7dd6a7ad47c788a2e70b3231ca05932275ec36dbb6e1478fc7b114&=&format=webp&width=663&height=663",
        fields: [
          {
            name: "**Winter Bear | `lvl.10`**",
            value:
              "__Short notes:__ `238` __Short length:__ `0:59`\n__Full notes:__ `769` __Full length:__ `2:55`",
          },
          {
            name: "**Rainy Days | `lvl.11`**",
            value:
              "__Short notes:__ `201` __Short length:__ `0:56`\n__Full notes:__ `815` __Full length:__ `3:00`",
          },
          {
            name: "**Love Me Again | `lvl.11`**",
            value:
              "__Short notes:__ `306` __Short length:__ `1:10`\n__Full notes:__ `824` __Full length:__ `3:02`",
          },
          {
            name: "**Slow Dancing | `lvl.11`**",
            value:
              "__Short notes:__ `251` __Short length:__ `1:05`\n__Full notes:__ `863` __Full length:__ `3:07`",
          },
          {
            name: "**FRI(END)S | `lvl.13`**",
            value:
              "__Short notes:__ `207` __Short length:__ `0:52`\n__Full notes:__ `871` __Full length:__ `2:28`",
          },
          {
            name: "**Winter Ahead (with PARK HYO SHIN) | `lvl.11`**",
            value:
              "__Short notes:__ `376` __Short length:__ `1:24`\n__Full notes:__ `1100` __Full length:__ `3:54`",
          },
        ],
      },
      {
        title: "**Solo: `Jungkook`**",
        thumbnail:
          "https://media.discordapp.net/attachments/1341215784327843980/1345666119410913302/gfceff.jpg?ex=67c560bc&is=67c40f3c&hm=b2c70333a0f1539baaabcdf9bb6f1ad340caa27307cf6f0f5edcd11ff24d4089&=&format=webp&width=663&height=663",
        fields: [
          {
            name: "**Still With You | `lvl.12`**",
            value:
              "__Short notes:__ `492` __Short length:__ `1:38`\n__Full notes:__ `1258` __Full length:__ `4:00`",
          },
          {
            name: "**Seven (feat. Latto) - Clean Ver. | `lvl.13`**",
            value:
              "__Short notes:__ `343` __Short length:__ `1:02`\n__Full notes:__ `1156` __Full length:__ `3:34`",
          },
          {
            name: "**Standing Next to You | `lvl.13`**",
            value:
              "__Short notes:__ `347` __Short length:__ `1:11`\n__Full notes:__ `1171` __Full length:__ `3:26`",
          },
          {
            name: "**Too Sad to Dance | `lvl.13`**",
            value:
              "__Short notes:__ `321` __Short length:__ `1:03`\n__Full notes:__ `1033` __Full length:__ `2:56`",
          },
          {
            name: "**3D (feat. Jack Harlow) - Clean Ver. | `lvl.13`**",
            value:
              "__Short notes:__ `388` __Short length:__ `1:17`\n__Full notes:__ `1113` __Full length:__ `3:22`",
          },
          {
            name: "**Never Let Go | `lvl.13`**",
            value:
              "__Short notes:__ `345` __Short length:__ `1:04`\n__Full notes:__ `1017` __Full length:__ `2:46`",
          },
        ],
      },
    ];

    let currentSection = null;
    let filteredPages = [];
    let currentPageIndex = null;
    let initialResponse = null; // To handle initial message deletion

    // Function to filter pages based on the selected section
    const filterPagesBySection = (section) => {
      switch (section) {
        case "solo":
          return solopages;
        case "albums":
          return pages.filter(
            (page) =>
              !page.title.includes("Unit") && !page.title.includes("Solo")
          ); // Adjust filter as needed
        default: // 'all'
          return [...pages, ...solopages];
      }
    };

    // 1. Prompt for Section and then immediately for Page
    const promptForSection = async () => {
      const sectionMenu = new StringSelectMenuBuilder()
        .setCustomId("section_select")
        .setPlaceholder("Select a section...")
        .addOptions(
          {
            label: "🎧 All Songs (Both Albums and Solo Release)",
            value: "all",
          },
          {
            label: "🎶 Solo Release",
            value: "solo",
          },
          {
            label: "💿Albums Only",
            value: "albums",
          }
        );

      const row = new ActionRowBuilder().addComponents(sectionMenu);

      const response = await msg.channel.send({
        content: "Choose a section:",
        components: [row],
      });
      initialResponse = response; // Store the initial response for potential deletion

      const collector = response.createMessageComponentCollector({
        componentType: ComponentType.StringSelect,
        time: 60000,
      });

      collector.on("collect", async (interaction) => {
        if (interaction.customId === "section_select") {
          currentSection = interaction.values[0];
          filteredPages = filterPagesBySection(currentSection);
          currentPageIndex = null; // Reset page index
          await interaction.update({
            content: "Choose a page:",
            components: [],
          }); // Modified content
          collector.stop();
          promptForPage(filteredPages, response); // Pass the response
        }
      });

      collector.on("end", (collected) => {
        if (collected.size === 0 && initialResponse) {
          msg.channel.send("❌ Command time out");
        }
      });
    };

    // 2. Prompt for Page
    const promptForPage = async (currentPages, sectionResponse) => {
      // Added sectionResponse parameter
      if (currentPages.length === 0) {
        return msg.channel.send(
          "❌ No songs have been found for this section."
        );
      }

      const pageOptions = currentPages.map((page, idx) => ({
        label: `➡️ Releases no. ${idx + 1}`,
        description: page.title.replace(/\*\*/g, "").slice(0, 50),
        value: idx.toString(),
      }));

      const pageMenu = new StringSelectMenuBuilder()
        .setCustomId("page_select")
        .setPlaceholder("Select a release...")
        .addOptions(...pageOptions, { label: "↪️ Go Back", value: "back" });

      const row = new ActionRowBuilder().addComponents(pageMenu);

      await sectionResponse.edit({
        content: "Choose a page:",
        components: [row],
      }); // Edit existing message
      initialResponse = sectionResponse; // Update initial response

      const collector = sectionResponse.createMessageComponentCollector({
        // Use sectionResponse
        componentType: ComponentType.StringSelect,
        time: 60000,
      });

      collector.on("collect", async (interaction) => {
        if (interaction.customId === "page_select") {
          if (interaction.values[0] === "back") {
            currentSection = null;
            filteredPages = [];
            currentPageIndex = null;
            await interaction.update({
              content: "↪️ Go back to section selection",
              components: [],
            });
            collector.stop();
            promptForSection();
          } else {
            currentPageIndex = parseInt(interaction.values[0]);
            await interaction.update({
              content: `➡️ Now displaying page ${currentPageIndex + 1}`,
              components: [],
            });
            collector.stop();
            displayPage(currentPages, currentPageIndex);
          }
        }
      });

      collector.on("end", (collected) => {
        if (collected.size === 0 && initialResponse) {
          msg.channel.send("❌ Command time out.");
        }
      });
    };

    // 3. Display Page
    const displayPage = async (currentPages, index) => {
      const page = currentPages[index];
      const embed = new EmbedBuilder()
        .setColor("#CDF7F6")
        .setTitle(page.title)
        .setThumbnail(page.thumbnail)
        .addFields(page.fields)
        .setFooter({
          text: `Page ${index + 1}/${currentPages.length}`,
        }); // Adjust footer

      const pageOptions = currentPages.map((p, idx) => ({
        label: `➡️ Releases no. ${idx + 1}`,
        description: p.title.replace(/\*\*/g, "").slice(0, 50),
        value: idx.toString(),
      }));

      const changePageMenu = new StringSelectMenuBuilder()
        .setCustomId("change_page")
        .setPlaceholder("Want to see another release?")
        .addOptions(
          ...pageOptions,
          { label: "↪️ Go Back to Sections", value: "back_to_sections" } // Changed value
        );

      const row = new ActionRowBuilder().addComponents(changePageMenu);

      const response = await msg.channel.send({
        embeds: [embed],
        components: [row],
      });
      initialResponse = response; // Update initial response

      const collector = response.createMessageComponentCollector({
        componentType: ComponentType.StringSelect,
        time: 60000,
      });

      collector.on("collect", async (interaction) => {
        if (interaction.customId === "change_page") {
          if (interaction.values[0] === "back_to_sections") {
            // Changed check
            currentSection = null;
            filteredPages = [];
            currentPageIndex = null;
            await interaction.update({
              content: "You're currently viewing the section selection",
              embeds: [],
              components: [],
            });
            collector.stop();
            promptForSection();
          } else {
            currentPageIndex = parseInt(interaction.values[0]);
            await interaction.update({
              content: `Displaying page ${currentPageIndex + 1}`,
              embeds: [],
              components: [],
            });
            collector.stop();
            displayPage(currentPages, currentPageIndex);
          }
        }
      });

      collector.on("end", (collected) => {
        if (collected.size === 0 && initialResponse) {
          msg.channel.send("❌ Command time out.");
        }
      });
    };

    // Start the process
    promptForSection();
  },
};
