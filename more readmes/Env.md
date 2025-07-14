## Environment Variables
- create an `.env` file
- env file structure of this bot (•••••• is where you gonna put the ID's tokens and everything)
```json
V_BOT_TOKEN="••••••"
CRC_ID="••••••"
ADMIN_CHANNEL="••••••"
VERIFY_CHANNEL="••••••"
EMOJI="••••••"
VERIFIED_ROLE="••••••"
GENCHAT_ID="•••••••"
```

---
### Variables Explained
<<<<<<< HEAD
Variable Name | Description
:---: | ---
*V_BOT_TOKEN* | This is your actual bot token that you will get from discord's dev portal. <ins>**DO NOT SHARE YOUR TOKEN**</ins>
*CRC_ID* | This is your Server ID. Used in registering the bot's commands. To get it, right click your server name and press the "Copy Server ID" `Take note that you need to have Developer Mode turned on before you even get the ID`
*ADMIN_CHANNEL* | Channel ID on where your Admins or Mods channel place
*VERIFY_CHANNEL* | Channel ID on where your Verify channel will be. Which means yes you need to create a dedicated verification channel on your server.
*VERIFIED_ROLE* | Role ID here. Members would have this role once you've verified them.
*GENCHAT_ID* | Channel ID on where you want to send the greeting message (i put mine on general chat on my server that's why its named like that)

Optional Variables | Description
:---: | ---
*EMOJI* | This is if you also want to react a custom emoji for the verification protocol (related code blocks are in line 229-232 in `index.js`)

=======
> *V_BOT_TOKEN:* This is your actual bot token that you will get from discord's dev portal. <ins>**DO NOT SHARE YOUR TOKEN**</ins>
> *CRC_ID:* This is your Server ID. Used in registering the bot's commands. To get it, right click your server name and press the "Copy Server ID" `Take note that you need to have Developer Mode turned on before you even get the ID`
> *ADMIN_CHANNEL:* Channel ID on where your Admins or Mods channel place
> *VERIFY_CHANNEL:* Channel ID on where your Verify channel will be. Which means yes you need to create a dedicated verification channel on your server.
> *VERIFIED_ROLE:* Role ID here. Members would have this role once you've verified them.
> *GENCHAT_ID:* Channel ID on where you want to send the greeting message (i put mine on general chat on my server that's why its named like that)

- **Optional variables:**
> *EMOJI:* This is if you also want to react a custom emoji for the verification protocol (related code blocks are in line 229-232 in `index.js`)
>>>>>>> 417746d717fae2fba817cad8b984170138db51ec
- Replace that code block with this if you don't want a custom emoji
```js
  const nEmoji = "✅";
  if (react.emoji.name !== nEmoji) return;
```
- Discord emoji ID's usually have this structure: `<a:[emoji name]:[emoji ID]>`
- Get the emoji ID ONLY and then put it in the variable.
---

**PS:** You can replace the names of these variables if you want but keep it mind that you also need to change some parts of the whole codes as well which is usually has this structure:
```js
process.env.[ENV_NAME]
```