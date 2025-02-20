// command handler for all files under song notes

const lesserafim = require('./lesserafim');
const newjeans = require('./newjeans');
const boynextdoor = require('./boynextdoor');
const illit = require('./illit');

const songNotesCommands = {
    lesserafim,
    lsf: lesserafim,
    newjeans,
    nj: newjeans,
    boynextdoor,
    bnd: boynextdoor,
    illit,
    ilt: illit
};

module.exports = {
    name: 'songnotes',
    aliases: ['sn'],
    description: 'Shows song information for NewJeans or Boy Next Door',
    async execute(message, args) {
        const songName = args[0]?.toLowerCase(); // Get the song name from the arguments

        if (!songName || !songNotesCommands[songName]) {
            return message.channel.send('⚠️Specify a group (type `.snalias or /snalias` for more details)');
        }

        // Execute the corresponding command
        await songNotesCommands[songName].execute(message, args.slice(1));
    }
};
