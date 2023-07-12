import { useMemo } from 'react'
import { ScheduleItem as typeItem } from '../types/types'
import { getLocalTime } from '../utils/getLocalTime'
interface Props {
    item: typeItem
}
export default function ScheduleItem({
    item: { date, name, speaker, type },
}: Props) {
    const { time } = useMemo(() => getLocalTime(date), [date])
    return (
        <article className="font-Inter">
            <h3 className="flex flex-col md:flex-row font-bold gap-4 items-center  text-2xl leading-8 mb-2">
                <span
                    className={`md:max-w-[80%] ${
                        type === 'presentation'
                            ? 'text-white'
                            : 'text-[#ffddaf]'
                    }`}
                >
                    {name}
                </span>

                <span className="text-[#ffddaf] md:border-l-4 md:pl-4 md:border-gray-500">
                    {time}hs
                </span>
            </h3>
            {type === 'presentation' && (
                <p className="text-gray-500 font-semibold">{speaker}</p>
            )}
        </article>
    )
}
