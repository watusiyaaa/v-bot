// command handler for all files under song notes

const bts = require('./bts');
const txt = require('./txt');
const enha = require('./enhypen');
const svt = require('./seventeen');
const lesserafim = require('./lesserafim');
const newjeans = require('./newjeans');
const boynextdoor = require('./boynextdoor');
const illit = require('./illit');

const songNotesCommands = {
    bts, bangtan: bts,
    txt, tubatu: txt,
    enha, enhypen: enha,
    svt, seventeen: svt,
    lesserafim, lsf: lesserafim,
    newjeans, nj: newjeans, njz: newjeans,
    boynextdoor, bnd: boynextdoor,
    illit, ilt: illit
};

module.exports = {
    name: 'songnotes',
    aliases: ['sn'],
    description: `Shows song information for RH groups.`,
    async execute(message, args) {
        const songName = args[0]?.toLowerCase(); 

        if (!songName || !songNotesCommands[songName]) {
            return message.channel.send('⚠️ Please specify a group (type `.snalias or /snalias` for more details)');
        }

        // Execute the corresponding command
        await songNotesCommands[songName].execute(message, args.slice(1));
    }
};
