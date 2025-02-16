// i want to put the type only cmd's here

const path = require('path');
const fs = require('fs');
console.log('Typeonly command loaded');
module.exports = {
  run: function (msg) {
    if (msg.content === 'reqs') {
      const imagePath = path.join(__dirname, '../assets/vreq.png');
      
      // Verify image exists before sending
      if (!fs.existsSync(imagePath)) {
        return msg.channel.send('Error: Verification requirements image not found.');
      }

      msg.channel.send({
        content: '# Verification Requirements\n- You play Rhythm Hive. Provide a picture of your Rhythm Hive profile (as shown in the 1st picture below)\n- You must be a member of **RHCord** ([**press here to join the server**](https://discord.gg/MQdvHVpjca)), and your current level role there must STRICTLY be **A Class** and above (as also shown in the 2nd picture below, type **__t!rank__** to get this pic from the server)',
        files: [imagePath],

        allowedMentions: { repliedUser: false }
      });
      console.log(`Verification requirements sent to ${msg.author.tag}`);
    }
  }
};
