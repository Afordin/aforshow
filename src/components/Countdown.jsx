import { useState, useEffect } from 'react'
import { calculateTimeLeft } from '../utils/calculateTimeLeft'

const CountdownCard = ({ label, time }) => {
    return (
        <div className="text-gray-400  bg-[#141414] p-2 flex flex-col rounded-lg border-t-2 border-gray-500">
            <span className="font-extrabold  text-3xl sm:text-5xl text-gradient">
                {time}{' '}
            </span>
            <span className="">{label}</span>
        </div>
    )
}

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000)

        return () => clearTimeout(timer)
    })

    return (
        <div className="m-auto h-[100%] flex-wrap justify-center items-center text-center  text-lg sm:text-3xl mt-4 flex gap-4 sm:gap-8">
            {timeLeft.map((time, index) => (
                <CountdownCard
                    label={time.label}
                    time={time.time}
                    key={index}
                />
            ))}
            {timeLeft.length === 0 && <span>En Directo</span>}
        </div>
    )
}

export default Countdown
