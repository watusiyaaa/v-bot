# V-bot

## Overview
V-bot is a Discord bot designed to manage user verification and enhance community engagement within Discord servers. It listens for messages and reactions to verify new members and welcomes them to the server.

## Project Structure
```
V-bot
├── src
│   ├── index.js          # Main entry point of the bot
│   ├── cmdregister.js    # Command registration logic
│   ├── scmd.js           # Exports the registerCommands function
├── .env                  # Environment variables for configuration
├── discloud.config       # Deployment configuration for Discloud
└── README.md             # Project documentation
```

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd V-bot
   ```

2. **Install Dependencies**
   Make sure you have Node.js installed. Then run:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root directory and add the following variables:
   ```
   V_BOT_TOKEN=your_bot_token
   VERIFY_CHANNEL=your_verify_channel_id
   ADMIN_CHANNEL=your_admin_channel_id
   VERIFIED_ROLE=your_verified_role_id
   GENCHAT_ID=your_general_chat_id
   EMOJI=your_custom_emoji_id
   ```

4. **Run the Bot**
   Start the bot using:
   ```bash
   node src/index.js
   ```

## Usage
- The bot will listen for messages in the specified verification channel.
- When a new member sends a message, the bot will notify the admin channel.
- Admins can verify new members by reacting with a specific emoji.
- Verified members will receive a welcome message in the general chat.

## Contributing
Feel free to submit issues or pull requests for improvements or bug fixes. 

## License
This project is licensed under the MIT License.