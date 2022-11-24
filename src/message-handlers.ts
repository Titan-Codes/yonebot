import {Client, Message} from 'discord.js'

export async function handleMessage(client: Client, message: Message) {
  if (message.author.id === client.user?.id) {
    return
  }
  if(message.content.includes('yone')) {
    message.reply('yone')
    try {
      await message.react('940082584896028762')
    } catch (e) {}
  }
}
