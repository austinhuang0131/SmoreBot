const commando = require('discord.js-commando');
const oneLine = require('common-tags').oneLine;

module.exports = class FLeaveCommand extends commando.Command {
  constructor(bot) {
    super(bot, {
      name: 'fleave',
      aliases: ['forceleave', 'leaveguild', 'removeguild'],
      group: 'control',
      memberName: 'fleave',
      description: 'Leaves a guild.',
      details: oneLine `
				This command force leaves a guild.
        Permission locked to bot owners for security reasons.
			`,
      examples: ['fleave 1234567890'],

      args: [{
        key: 'toLeave',
        label: 'toLeave',
        prompt: 'What guild would you like to leave?',
        type: 'string',
        infinite: false
      }],

      guarded: true
    });
  }

  async run(message, args) {
    if (!this.client.isOwner(message.author)) return message.reply('You do not have permission to use this command!')
    let guild = this.client.guilds.get(toLeave)
    guild.defaultChannel.send('**ALERT:** Your guild has been marked as an illegal guild. \nThis may be due to it being marked as a bot guild or marked as a spam guild. \nThe bot will now leave this server. \nIf you wish to speak to my developer, you may join here: https://discord.gg/t8xHbHY')
    guild.leave()
    message.reply('Left guild.')
  }
};