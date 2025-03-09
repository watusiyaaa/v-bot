const config = require('../config');

module.exports = {
    name: 'maintenance',
    description: 'Toggle maintenance mode on or off.',
    execute(msg, args) {
        if (!msg.member.permissions.has('ADMINISTRATOR')) {
            return msg.reply('You do not have permission to use this command.');
        }

        const currentMode = config.getMaintenanceMode();
        config.setMaintenanceMode(!currentMode);
        msg.channel.send(`Maintenance mode is now **${!currentMode ? 'enabled' : 'disabled'}**.`);
    }
};