// command handler for all files under song notes

const bts = require('./bts');
const txt = require('./txt');
const lesserafim = require('./lesserafim');
const newjeans = require('./newjeans');
const boynextdoor = require('./boynextdoor');
const illit = require('./illit');

const songNotesCommands = {
    bts,
    bangtan: bts,
    txt,
    tubatu: txt,
    lesserafim,
    lsf: lesserafim,
    newjeans,
    nj: newjeans,
    njz: newjeans,
    boynextdoor,
    bnd: boynextdoor,
    illit,
    ilt: illit
};

module.exports = {
    name: 'songnotes',
    aliases: ['sn'],
    description: `Shows song information for RH groups.`,
    async execute(message, args) {
        const songName = args[0]?.toLowerCase(); 

        if (!songName || !songNotesCommands[songName]) {
            return message.channel.send('⚠️Specify a group (type `.snalias or /snalias` for more details)\n-# If your\'e seeing this, that because i havent done vol. 1 groups yet. Please bear with me!');
        }

        // Execute the corresponding command
        await songNotesCommands[songName].execute(message, args.slice(1));
    }
};
