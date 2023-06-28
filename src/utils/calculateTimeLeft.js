import { getLocalTime } from './getLocalTime'

export function calculateTimeLeft() {
    const { fulltime } = getLocalTime()
    const difference = new Date(fulltime) - new Date()

    let timeLeft = []

    if (difference > 0) {
        timeLeft = [
            {
                label: 'Días',
                time: Math.floor(difference / (1000 * 60 * 60 * 24))
                    .toString()
                    .padStart(2, '0'),
            },
            {
                label: 'Horas',
                time: Math.floor((difference / (1000 * 60 * 60)) % 24)
                    .toString()
                    .padStart(2, '0'),
            },
            {
                label: 'Mins',
                time: Math.floor((difference / 1000 / 60) % 60)
                    .toString()
                    .padStart(2, '0'),
            },
            {
                label: 'Segs',
                time: Math.floor((difference / 1000) % 60)
                    .toString()
                    .padStart(2, '0'),
            },
        ]
    }

    return timeLeft
}
