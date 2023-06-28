import { TimeLocal } from '../types/types'

export function getLocalTime(): TimeLocal {
    const date = new Date('2023-07-28T20:00:00+02:00')

    return {
        day: Number.parseInt(
            date.toLocaleString('default', { day: '2-digit' })
        ),
        month: Number.parseInt(
            date.toLocaleString('default', { month: '2-digit' })
        ),
        monthName: date.toLocaleString('es', { month: 'long' }),
        time: date.toLocaleString('default', {
            hourCycle: 'h24',

            hour: '2-digit',
            minute: '2-digit',
        }),
        fulltime: date.toString(),
    }
}
