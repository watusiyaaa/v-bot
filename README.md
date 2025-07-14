# V Bot
Thank you for using V bot! Its designed to enhance your server experience with various commands and functionalities. It includes features for user verification, role management, song notes, and more.

---

## Getting Started

Use the following commands to get started:

Terminal: This bot is using Node.js (Download this first ofc), then download the following dependencies:
- discord.js (VERY IMPORTANT obviously)
- nodemon
- dotenv

> Environment Variables:
- Go [here](./more%20readmes/Env.md) for the detailed info.

#### For running the bot
- `(Windows)` You must have Git Installed in your PC `(No need to do this part if you're on Mac or Linux)`. Then set your default shell into *Git Bash*. In case you're using VSC, open a New Terminal first > go to the dropdown button next to the `+` icon > **Select Default Profile** > then choose Git Bash.
- I created a `.sh` file so that instead of typing `npm run serve` you will just type **./start.sh** instead
- But make sure that the .sh file is executable first, just type `chmod +x start.sh` at the terminal.
> But if you don't want this method you can just go with `npm run serve`

##### `(Optional)` Setting Git Bash as your Terminal (or any Terminal you want) for this Workspace
- Go [here](./more%20readmes/Workspace.md) for the detailed info.

---

## Main Function - Verification Protocol

Its main function is to give user a role letting them access the whole server with just a reaction (you can add as many emojis as you want). You can use this for verification purposes.

It has 2 Phases:
1. **Phase 1**: When a user sends a message in the verification channel, the bot notifies the admin channel with an embed linking to the actual message. 
2. **Phase 2**: When an admin reacts to the message with the specified emoji, the bot assigns the verified role to the user and sends a welcome message in the channel you've assigned to (refer to Environment Variables for the detailed info).

### Commands (so far)

prefix is period (.) but you can change this again

> **Slash** and **Prefix** commands
 - greet-old (ADMIN ONLY): checking the greet message (old greeting since im using the new Components V2 code for this)
 - avatar: Fetch user's profile
 - snalias: Provides a list of group's aliases in the song notes command
 - calculator/c: well calculator lol😆

> **Prefix** commands only
 - rr make (ADMIN ONLY): creates a reaction role
 - songnotes/sn: Provides Rhythm Hive's song notes and lenghts
 - maintenance (ADMIN ONLY): Sets the bot to maintenance mode.

> **Type** only command
  - reqs: Sends the server's verification requirements again (this is in case someone needed it)
  - ping: pinging the bot with its latency

 For any concerns or suggestions, contact me in Discord!
   -- watusiyaaa --