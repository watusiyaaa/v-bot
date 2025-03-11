// hpw to execute: .maintenance <reason (optional)>

const config = require('../config');

module.exports = {
    name: 'maintenance',
    description: 'Toggle maintenance mode on or off. (Reason is optional)',
    execute(msg, args) {
        if (!msg.member.permissions.has('ADMINISTRATOR')) {
            return msg.reply('You do not have permission to use this command.');
        }

        const currentMode = config.getMaintenanceMode();
        const reason = args.join(' ') || 'No reason provided.';
        config.setMaintenanceMode(!currentMode);
        config.setMaintenanceReason(reason);
        msg.channel.send(`⚠️ Maintenance mode is now **${!currentMode ? 'enabled' : 'disabled'}**.`);
    }
};