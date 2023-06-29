import { useMemo } from 'react'
import { getLocalTime } from '../utils/getLocalTime'

export default function DateHeader() {
    const { day, monthName, time } = useMemo(() => getLocalTime(), [])
    return (
        <h3 class="text-center text-4xl">
            <span class="font-bold text-white">
                <span class="font-extrabold text-gradient">{day}</span> de{' '}
                <span class="capitalize">{monthName}</span>
            </span>
            <span class="font-extrabold text-gradient"> • </span>
            <span class="text-gray-500 ">{`${time} Hs`}</span>
        </h3>
    )
}
