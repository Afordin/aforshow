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
import { supabase } from '../../utils/supebase.js'
const tickerDefault: TicketType = {
    num_ticket: '00000',
    name: '',
    username_github: 'afor_digital',
    avatar_url: '/avatar.png',
}

export default function Ticket({}) {
    const [FoundedTicket, setFoundedTicket] = useState(false)
    const [ImageUrlBlob, setImageUrlBlob] = useState('')
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
                        if (tickeSvgtEl.current) {
                            html2canvas(tickeSvgtEl.current, {
                                useCORS: true,
                                allowTaint: true,
                                scale: 2,
                            }).then(async (canvas) => {
                                const imgData = canvas.toDataURL('image/png')

                                const { data, error } = await supabase.storage
                                    .from('Tickets Images')
                                    .download(
                                        `Ticket-de-@${userInfo.username_github}.png`
                                    )

                                if (error && error.message === "The resource was not found") {
                                    // La imagen no existe, realizar la subida
                                    const response = await fetch(imgData)
                                    const blob = await response.blob()

                                    const {
                                        data: uploadData,
                                        error: uploadError,
                                    } = await supabase.storage
                                        .from('Tickets Images')
                                        .upload(
                                            `Ticket-de-@${userInfo.username_github}.png`,
                                            blob
                                        )

                                    if (uploadError) {
                                        console.error(
                                            'Error al subir la imagen:',
                                            uploadError.message
                                        )
                                    }
                                } else {
                                    if (data) {
                                        console.log(
                                            'La imagen ya existe en el almacenamiento de Supabase.'
                                        )
                                    }
                                }
                            })
                        }
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
                backgroundColor: null, // Fondo transparente
                scale: 3,
            }).then(async (canvas) => {
                const imgData = canvas.toDataURL('image/png')
                const blob = dataURLToBlob(imgData)
                navigator.clipboard
                    .write([
                        new ClipboardItem({
                            [blob.type]: blob,
                        }),
                    ])
                    .then(() => {
                        alert(
                            'Se ha copiado la imagen de tu ticket en tu portapapeles, al abrir el tweet pegas la imagen...'
                        )
                        const tweetText = `¡Estoy emocionado! ¡Acabo de asegurar mi entrada para el increíble #AforShow en Twitch! 🎉👩‍💻👨‍💻No puedo esperar para sumergirme en las charlas y talleres de programación más inspiradores.Únete a esta experiencia épica ➡️ https://afor.show/?username=${ticket.username_github} #DesarrolloDigital`
                        const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                            tweetText
                        )}`
                        window.open(tweetUrl, '_blank')
                    })
            })
        }
    }
    useEffect(() => {
        const checkImageExists = async () => {}

        checkImageExists()
    }, [])

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
                    className={`atropos reltive w${
                        !Logued && !FoundedTicket && 'blur-sm'
                    }`}
                    id="userTicket"
                >
                    <div
                        ref={tickeSvgtEl}
                        className="hidden md:block max-w-[704px] lg:max-w-[862px] m-auto"
                    >
                        <TicketDektop ticket={ticket}></TicketDektop>
                    </div>
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
