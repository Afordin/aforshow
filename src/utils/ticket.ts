import { Ticket, User } from '../types/types'
import { supabase } from './supebase'

export async function getTicket(user: User): Promise<Ticket> {
    const LimitCaracterName = 21
    try {
        let data = await findDatabase(user.userName)
        if (!data.data) {
            let result = await insertDatabase(user)

            if (result.status != 201) {
                console.log({ error: result.error })
                throw 'No se pudo insertar el ticket'
            }
            data = await findDatabase(user.userName)
            if (!data.data) {
                throw 'error al obtener el ticket'
            }
        }
        let { username_github, avatar_url, name, num_ticket } =
            data.data as Ticket
        if (name.length > LimitCaracterName) {
            const splitName = name.split(' ')
            if (splitName.length > 2) {
                if (
                    `${splitName[0]} ${splitName[1]} ${splitName[2]}`.length <
                    LimitCaracterName
                ) {
                    name = `${splitName[0]} ${splitName[1]}`
                } else {
                    name = `${splitName[0]} ${splitName[2]}`
                }
            }
            name = `${name.slice(0, LimitCaracterName)} ...`
        }
        const newTicket: Ticket = {
            username_github,
            avatar_url,
            name,
            num_ticket: num_ticket.toString().padStart(5, '0'),
        }

        localStorage.setItem('ticket', JSON.stringify(newTicket))
        return newTicket
    } catch (e) {
        throw e
    }
}

export async function findDatabase(userName: string) {
    return await supabase
        .from('tickets')
        .select('num_ticket , name, username_github, avatar_url')
        .eq('username_github', userName)
        .single()
}
export async function insertDatabase(user: User) {
    return await supabase.from('tickets').insert([
        {
            name: user.name,
            username_github: user.userName,
            avatar_url: user.avatar,
        },
    ])
}
