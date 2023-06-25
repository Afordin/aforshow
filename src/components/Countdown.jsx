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
        <div className="m-auto h-[100%] flex-col md:flex-row items-center text-center text-3xl mt-4 flex gap-8">
            {timeLeft.days > 0 && (
                <div className="text-gray-400  bg-[#141414] p-2 flex flex-col rounded-lg border-t-2 border-gray-500">
                    <span class="font-extrabold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#FEAC5E] via-[#C779D0] to-[#4BC0C8]">
                        {timeLeft.days}{' '}
                    </span>
                    <span className="">Dias</span>
                </div>
            )}
            {timeLeft.hours > 0 && (
                <div className="text-gray-400  bg-[#141414] p-2 flex flex-col rounded-lg border-t-2 border-gray-500">
                    <span class="font-extrabold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#FEAC5E] via-[#C779D0] to-[#4BC0C8]">
                        {timeLeft.hours}{' '}
                    </span>
                    <span className="">Horas</span>
                </div>
            )}
            {timeLeft.minutes > 0 && (
                <div className="text-gray-400  bg-[#141414] p-2 flex flex-col rounded-lg border-t-2 border-gray-500">
                    <span class="font-extrabold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#FEAC5E] via-[#C779D0] to-[#4BC0C8]">
                        {timeLeft.minutes}{' '}
                    </span>
                    <span className="">Mins</span>
                </div>
            )}
            <div className="text-gray-400  bg-[#141414] p-2 flex flex-col rounded-lg border-t-2 border-gray-500">
                <span class="font-extrabold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#FEAC5E] via-[#C779D0] to-[#4BC0C8]">
                    {timeLeft.seconds}{' '}
                </span>
                <span className="">Segs</span>
            </div>
        </div>
    )
}

export default Countdown
