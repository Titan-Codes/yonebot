import {Message} from 'discord.js'

export function handleMessage(message: Message) {
  if(message.content.includes('yone')) {
    message.reply('yone')
    message.react(message.guild.emojis.cache.get('940082584896028762'))
  }
}
