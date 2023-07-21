import { useMemo } from 'react'
import { calculateDifference } from '../utils/calculateTimeLeft'
import Countdown from './Countdown.jsx'

const SectionTimer = () => {
    const timeLeft = useMemo(
        () => calculateDifference('2023-07-21T19:00:00+02:00'), []
    )

    return (
        timeLeft > 0 ?
            <section
                className='py-16 flex flex-col text-center gap-[3rem]'
                id='countdown'
            >
                <h3 className='text-gray-400 text-2xl'>Quedan</h3>
                <Countdown date='2023-07-21T20:00:00+02:00' />
                <h3 className='text-gray-400 text-2xl'>
                    Para el <span className='font-bold'>AforShow</span>
                </h3>
            </section>
        :
        <iframe src="https://player.twitch.tv/?channel=afor_digital&parent=afor.show" height="378" width="620" className='m-auto'></iframe>
    )
}

export default SectionTimer
