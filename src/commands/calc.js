// calculator command
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    // Slash Command Definition
    data: new SlashCommandBuilder()
        .setName('calculator')
        .setDescription('Calculate a math expression')
        .addStringOption(option => 
            option.setName('expression')
                .setDescription('Enter a math expression (e.g., (5+5-3)*4)')
                .setRequired(true)
        ),
    
    // Prefix Command Definition
    name: 'calculator',
    aliases: ['c'],
    description: 'Calculate a math expression e.g: (5+5-3)*4',
    AllowedMentions: { repliedUser: false },
    
    // Prefix Command Execution
    execute: async (message, args) => {
        if (args.length === 0) {
            return message.reply('Usage: `.c <math expression>` or `.calculator <math expression>`');
        }

        const expression = args.join(""); // Join without spaces
        const result = calculate(expression);
        message.reply({
            content: `\`${expression} = ${result}\``,
            allowedMentions: { repliedUser: false } 
        });
    },

    // Slash Command Execution
    async executeSlash(interaction) {
        const expression = interaction.options.getString('expression');
        const result = calculate(expression);
        await interaction.reply({
            content: `\`${expression} = ${result}\``,
            allowedMentions: { repliedUser: false } 
        });
    }
};

// Math Calculation Function
function calculate(expression) {
    try {
        // Validate input: Only numbers, operators, and parentheses allowed
        if (!/^[0-9+\-*/().x ]+$/.test(expression)) {
            return 'Error: Invalid characters in expression';
        }

        // Replace 'x' with '*' for multiplication support
        const sExp = expression.replace(/x/g, '*');

        // Prevent division by zero
        if (sExp.includes('/ 0')) {
            return 'Error: Division by zero';
        }

        // Evaluate the mathematical expression safely
        const res = new Function(`return ${sExp}`)();

        return isNaN(res) ? 'Error: Invalid expression' : res;
    } catch (error) {
        return 'Error: Invalid expression';
    }
}
