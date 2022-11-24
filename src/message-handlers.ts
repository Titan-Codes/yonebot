import {Message} from 'discord.js'

export function handleMessage(message: Message) {
  if (message.content.includes('yone'))
    message.reply('yone')
}
