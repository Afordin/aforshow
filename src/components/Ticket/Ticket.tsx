// import Atropos library
import Atropos from 'atropos'
import fileSaver from 'file-saver'
import { useEffect, useRef, useState } from 'react'
import { useUser } from '../../hooks/useUser.jsx'
import type { Ticket as TicketType } from '../../types/types.js'
import { findDatabase, getTicket } from '../../utils/ticket.js'
import html2canvas from 'html2canvas'
import TicketDektop from './TicketDesktop.js'
import TicketMovil from './TicketMovil.js'
import TicketShare from './TicketShare.js'
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
        <section className="  relative p-8" id="ticket">
            <h2 className="font-extrabold text-4xl text-gradient text-center mb-24">
                {' '}
                Ticket
            </h2>
            <article className="relative w-full">
                {!Logued && !FoundedTicket && (
                    <button
                        ref={ticketEl}
                        className="font-extrabold text-4xl border-4 border-black p-4 px-10 bg-orange-400 hover:text-white hover:border-orange-400 hover:bg-black transition-all rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2   z-[200] md:whitespace-nowrap"
                        type="button"
                        onClick={onClick}
                    >
                        <span className="whitespace-nowrap">Genera tu</span>{' '}
                        ticket
                    </button>
                )}
                <div
                    className={`atropos reltive ${
                        !Logued && !FoundedTicket && 'blur-sm'
                    }`}
                    id="userTicket"
                    ref={tickeSvgtEl}
                >
                    <TicketDektop ticket={ticket}></TicketDektop>
                    <TicketMovil ticket={ticket}></TicketMovil>
                </div>
            </article>

            <div className="m-auto text-center my-4">
                {(Logued || FoundedTicket) && (
                    <TicketShare createTweet={createTweet}></TicketShare>
                )}
            </div>
        </section>
    )
}
