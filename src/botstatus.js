// having your bot have a status
//another activites: PLAYING, WATCHING, STREAMING, COMPETING

const { Events, ActivityType } = require('discord.js'); // Import necessary classes

module.exports = (client) => {
    client.once(Events.ClientReady, async (c) => {
        console.log(`Status in!`);

        // Set the bot's presence
        client.user.setPresence({
            status: 'online',
            activities: [
                {
                    name: 'FRI(END)S | 24/7',
                    type: ActivityType.Listening, // Set activity type
                },
            ],
        });
    });
};