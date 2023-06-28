import { Ticket, User } from '../types/types'
import { supabase } from './supebase'

export async function getTicket(user: User): Promise<Ticket> {
    try {
        let ticket = localStorage.getItem('ticket')
        if (ticket) {
            return JSON.parse(ticket) as Ticket
        }
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
        const { username_github, avatar_url, name, num_ticket } =
            data.data as Ticket
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
