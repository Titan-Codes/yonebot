import {Client, Message} from 'discord.js'

export async function handleMessage(client: Client, message: Message) {
  if (message.author.id === client.user?.id) {
    return
  }
  if(message.content.toLowerCase().includes('yone')) {
    message.channel.send('yone')
    try {
      await message.react('940082584896028762')
    } catch (e) {}
  } elseif(message.content.toLowerCase().includes('uni')) {
    message.channel.send('uni')
    try {
      await message.react('940082584896028762')
    } catch (e) {}
  } elseif(message.content.toLowerCase().includes('yoni')) {
    message.channel.send('yoni')
    try {
      await message.react('940082584896028762')
    } catch (e) {}
  }
}
