import React, { useState, useEffect } from 'react'

const Countdown = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const difference = new Date(targetDate) - new Date()
        let timeLeft = {}

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            }
        }

        return timeLeft
    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000)

        return () => clearTimeout(timer)
    })

    return (
        <div className="m-auto text-center text-3xl mt-4">
            <span class="font-extrabold text-gradient">
                Faltan{' '}
            </span>
            {timeLeft.days > 0 && (
                <span class="text-gray-500">{timeLeft.days}d </span>
            )}
            {timeLeft.hours > 0 && (
                <span class="text-gray-500">{timeLeft.hours}h </span>
            )}
            {timeLeft.minutes > 0 && (
                <span class="text-gray-500">{timeLeft.minutes}m </span>
            )}
            <span class="text-gray-500">{timeLeft.seconds}s</span>
        </div>
    )
}

export default Countdown
