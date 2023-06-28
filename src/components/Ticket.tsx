// import Atropos library
import Atropos from 'atropos'
import fileSaver from 'file-saver'
import { useEffect, useRef, useState } from 'react'
import { useUser } from '../hooks/useUser.js'
import type { Ticket as TicketType } from '../types/types'
import { findDatabase, getTicket } from '../utils/ticket.js'
import html2canvas from 'html2canvas'
const urlRedirect =
    import.meta.env.PUBLIC_URL_REDIRECT || 'https://aforshow.vercel.app/'
const tickerDefault: TicketType = {
    num_ticket: '00000',
    name: '',
    username_github: 'afor_digital',
    avatar_url: '/avatar.png',
}

export default function Ticket({}) {
    const [FoundedTicket, setFoundedTicket] = useState(false)
    const [OGImageAdded, setOGImageAdded] = useState(false)
    const { user, Logued, signIn } = useUser()

    const ticketEl = useRef(null)
    const tickeSvgtEl = useRef(null)
    const [ticket, setTicket] = useState<TicketType>(tickerDefault)
    useEffect(() => {
        // Initialize
        const myAtropos = Atropos({
            el: '#userTicket',
            activeOffset: 150,
            shadowScale: 1,
            highlight: false,
        })
        const params = new URLSearchParams(
            window.location.search.replace('?', '')
        )
        if (
            params.get('username') != undefined &&
            params.get('username') != ''
        ) {
            findDatabase(params.get('username'))
                .then((res) => res.data)
                .then((userInfo) => {
                    if (userInfo.username_github == params.get('username')) {
                        setTicket(userInfo as TicketType)
                        setFoundedTicket(true)
                    }
                })
        }
    }, [])

    const onClick = async () => {
        signIn()
    }
    function dataURLToBlob(dataURL) {
        const parts = dataURL.split(';base64,')
        const contentType = parts[0].split(':')[1]
        const byteCharacters = atob(parts[1])
        const byteArrays = []

        for (let i = 0; i < byteCharacters.length; i++) {
            byteArrays.push(byteCharacters.charCodeAt(i))
        }

        return new Blob([new Uint8Array(byteArrays)], { type: contentType })
    }
    const createTweet = () => {
        if (tickeSvgtEl.current) {
            html2canvas(tickeSvgtEl.current, {
                useCORS: true,
                allowTaint: true,
            }).then((canvas) => {
                const imgData = canvas.toDataURL('image/png')
                const blob = dataURLToBlob(imgData)
                fileSaver.saveAs(
                    blob,
                    `Ticket de @${ticket.username_github}.png`
                )
            })
        }
    }
    useEffect(() => {}, [])

    useEffect(() => {
        try {
            if (Logued) {
                getTicket(user)
                    .then((data) => {
                        setTicket(data)
                        const ticketElement = tickeSvgtEl.current
                    })
                    .catch((err) => {
                        alert(err)
                    })
            }
        } catch (err) {
            console.log(err)
        }
    }, [Logued])

    return (
        <section className="max-w-[862px] m-auto my-8 relative" id="ticket">
            <h2 className="font-extrabold text-4xl text-gradient text-center mb-24">
                {' '}
                Ticket
            </h2>
            {!Logued && !FoundedTicket && (
                <button
                    ref={ticketEl}
                    className="font-extrabold sm:text-4xl text-2sxl border-4 border-black p-4 bg-orange-400 hover:text-white hover:border-orange-400 hover:bg-black transition-all rounded-full absolute top-[55%] left-[20%] z-[200] md:left-[30%] sm:left-[30%] "
                    type="button"
                    onClick={onClick}
                >
                    Genera tu ticket
                </button>
            )}
            <div
                className={`atropos reltive ${
                    !Logued && !FoundedTicket && 'blur-sm'
                }`}
                id="userTicket"
                ref={tickeSvgtEl}
            >
                <div className="atropos-scale">
                    <div className="atropos-rotate">
                        <div className="atropos-inner relative  ">
                            <img src="/ticket.svg"></img>
                            <div className="absolute  top-[20%] sm:top-6  md:top-12 left-1/2 -translate-x-1/2  text-neutral-200   sm:text-2xl text-xs sm:w-[520px] w-[300px] ">
                                <header data-atropos-offset="2">
                                    <img
                                        src={'/stars_logo.svg'}
                                        alt="Stars"
                                        className=" w-10 sm:w-20 md:w-32 m-auto "
                                    />
                                    <img
                                        src={'/svg_name.svg'}
                                        alt="Event name"
                                        className="  w-20  sm:w-40  md:w-52  lg:w-64  pt-1 sm:pt-8 md:pt-3  m-auto"
                                    />
                                </header>
                                <div
                                    data-atropos-offset="4"
                                    className=" sm:h-[17px] h-[30px] justify-start items-center gap-4 inline-flex  lg:py-12  md:py-10 sm:py-9  py-1"
                                >
                                    <div>
                                        <span className=" font-bold  ">21</span>
                                        <span className="font-bold  ">
                                            {' '}
                                            de Julio
                                        </span>
                                    </div>
                                    <div className="sm:w-4 sm:h-4  w-2 h-2 gradient rounded-full" />
                                    <div className="text-neutral-600  font-normal ">
                                        Twitch.tv/afor_digital
                                    </div>
                                </div>
                                <footer
                                    data-atropos-offset="10"
                                    className="flex justify-between items-center "
                                >
                                    <div className="text-center ">
                                        <h4> Ticket N°</h4>
                                        <span className="font-bold  ">
                                            #{ticket.num_ticket}
                                        </span>
                                    </div>
                                    <div className="text-center">
                                        <h4>{ticket.name}</h4>
                                        <span className="font-bold  ">
                                            @{ticket.username_github}
                                        </span>
                                    </div>
                                </footer>
                            </div>
                            <div className="absolute  top-4 right-6 sm:top-12 sm:right-12  ">
                                <picture
                                    data-atropos-offset="6"
                                    className="rounded-full sm:w-[72px] w-[50px] overflow-hidden sm:p-1 p-[2px] gradient inline-block"
                                >
                                    <img
                                        src={ticket.avatar_url}
                                        alt={`Imagen de ${ticket.name}`}
                                        className="w-full rounded-full "
                                    />
                                </picture>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="m-auto text-center my-4">
                {(Logued || FoundedTicket) && (
                    <button
                        type="button"
                        onClick={createTweet}
                        rel="noopener noreferrer"
                        className="p-4 text-white text-[8px] md:text-xl bg-blue-600 font-extrabold rounded-full sm:border-4 border-2 hover:border-blue-600 hover:text-black hover:bg-white transition-all"
                    >
                        Descarga tu ticket para que lo compartas en tus redes
                        sociales
                    </button>
                )}{' '}
            </div>
        </section>
    )
}
