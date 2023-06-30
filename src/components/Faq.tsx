import { useState } from 'react'
import type { Faq } from '../types/types'

const faq: Faq[] = [
    {
        question: '¿Dónde puedo ver el evento?',
        answer: 'El evento se realizará en twitch.tv/afor_digital.',
    },
    {
        question: '¿Tengo que estar suscrito al canal para verlo?',
        answer: 'No, es totalmente gratuito. Pero si quieres dejar tu prime nadie te dirá nada.',
    },
    {
        question: '¿Puedo presentar mi charla?',
        answer: 'Las inscripciones ya están cerradas, pero puedes votar por las charlas que más te gusten.',
    },
    {
        question: '¿Cuántas charlas y/o talleres puedo votar?',
        answer: 'Tantas como quieras.',
    },
    {
        question: '¿Se podrán ver las charlas más tarde?',
        answer: 'Sí, todas las charlas se podrán ver más tarde en youtube/afordigital.',
    },
]

const Faq = () => {
    const [openFaq, setOpenFaq] = useState(null)

    const handleFaq = index => {
        setOpenFaq(prev => {
            return prev === index ? null : index
        })
        console.log('clicked', index)
    }

    return (
        <div id='faq' className='py-16 bg-light-blue'>
            <div className='flex justify-center items-start'>
                <div className='w-full sm:w-10/12 md:w-1/2'>
                    <h2 className='font-extrabold px-10 text-4xl text-transparent bg-clip-text gradient text-center mb-16 mt-18'>
                        Preguntas Frecuentes
                    </h2>
                    <ul className='flex flex-col px-10'>
                        {faq.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    className={`my-2 shadow-lg border-2 border-transparent gradient rounded ${openFaq}`}
                                    onClick={() => handleFaq(index)}
                                >
                                    <div className='bg-[#141414]'>
                                        <h2 className='flex flex-row text-white justify-between items-center font-semibold p-3 cursor-pointer'>
                                            <span>{item.question}</span>
                                            <svg
                                                className={`fill-white border-transparent gradient h-6 w-6 transform transition-transform duration-500 rounded-full ${
                                                    openFaq === index
                                                        ? 'rotate-180'
                                                        : ''
                                                }`}
                                                viewBox='0 0 20 20'
                                            >
                                                <path d='M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10'></path>
                                            </svg>
                                        </h2>
                                    </div>
                                    <div
                                        className={`bg-[#141414] border-l-2 border-purple-600 overflow-hidden duration-500 transition-all ${
                                            openFaq === index ? '' : 'hidden'
                                        }`}
                                    >
                                        <p className='p-3 text-white'>
                                            {item.answer}
                                        </p>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Faq
