import { useMemo } from 'react'
import { ScheduleItem as typeItem } from '../types/types'
import { getLocalTime } from '../utils/getLocalTime'
interface Props {
    item: typeItem
}
export default function ScheduleItem ({
    item: { date, name, url, speaker, type },
}: Props) {
    const { time } = useMemo(() => getLocalTime(date), [date])
    return (
        <article className='font-Inter flex items-center gap-x-8'>
            {type === 'presentation' && (
                <img
                    src={url}
                    width={'150px'}
                    height={'150px'}
                    title={speaker}
                    alt={speaker}
                    className='w-[150px] h-[150px] rounded-full object-cover'
                />
            )}
            <div className='flex flex-col font-bold gap-4 text-2xl leading-8 mb-2'>
                <div className='flex items-center gap-x-4'>
                    <p
                        className={`md:max-w-[80%] ${
                            type === 'presentation'
                                ? 'text-white'
                                : 'text-[#ffddaf]'
                        }`}
                    >
                        {name}
                    </p>

                    <p className='text-[#ffddaf] md:border-l-4 md:pl-4 md:border-gray-500'>
                        {time}hs
                    </p>
                </div>
                {type === 'presentation' && (
                    <p className='text-gray-500 font-semibold'>{speaker}</p>
                )}
            </div>
        </article>
    )
}
