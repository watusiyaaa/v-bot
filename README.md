# V Bot
Thank you for using V bot! Its designed to enhance your server experience with various commands and functionalities. It includes features for user verification, role management, song notes, and more.

## Getting Started

Use the following commands to get started:

Terminal: This bot is using Node.js, so download the following dependencies:
- discord.js (VERY IMPORTANT obviously)
- nodemon
- dotenv

You can then run this bot by using 'npm run serve' (you can change the word "serve" with another word)

### Main Function - Verification Protocol

Its main function is to give user a role letting them access the whole server with just a reaction (you can add as many emojis as you want). You can use this for verification purposes.

It has 2 Phases:
1. **Phase 1**: When a user sends a message in the verification channel, the bot notifies the admin channel with an embed linking to the actual message. 
2. **Phase 2**: When an admin reacts to the message with the specified emoji, the bot assigns the verified role to the user and sends a welcome message in the general chat.

### Commands (so far)

prefix is period (.) but you can change this again

* **Slash** and **Prefix** commands
 - greet (ADMIN ONLY): checking the greet message
 - avatar: Fetch user's profile
 - snalias: Provides a list of group's aliases in the song notes command

* **Prefix** commands only
 - rr make (ADMIN ONLY): creates a reaction role
 - songnotes/sn: Provides Rhythm Hive's song notes and lenghts
 - maintenance (ADMIN ONLY): Sets the bot to maintenance mode.

 * **Type** only command
  - reqs: Sends the server's verification requirements again (this is in case someone needed it)

 For any concerns or suggestions, contact me in Discord!
   -- watusiyaaa --