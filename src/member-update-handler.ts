import {GuildMember, PartialGuildMember} from 'discord.js'
import {sleep} from './utils'

const PATHETICALLY_PYTHONIC_ROLE_ID = '946289722093867039'

export async function handleMemberUpdate(prev: GuildMember | PartialGuildMember, next: GuildMember) {
    const prevMember = prev.partial ? await prev.fetch() : prev
    const wasPatheticallyPythonic = prevMember.roles.cache.has(PATHETICALLY_PYTHONIC_ROLE_ID)
    const isPatheticallyPythonic = next.roles.cache.has(PATHETICALLY_PYTHONIC_ROLE_ID)
    if (wasPatheticallyPythonic && !isPatheticallyPythonic) {
        await sleep(5000)
        await next.roles.add(PATHETICALLY_PYTHONIC_ROLE_ID)
    }
}
