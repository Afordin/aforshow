// import Atropos library
import Atropos from 'atropos'
import { useEffect, useRef, useState } from 'react'
import { supabase } from '../supabase.js'

export default function Ticket() {
    const [Logued, setLogued] = useState(
        localStorage.getItem('sb-bfbnlgbiigcabrdmrjeb-auth-token') != undefined
    )
    const ticketEl = useRef(null)
    const [InfoUserForTicket, setInfoUserForTicket] = useState({})
    useEffect(() => {
        // Initialize
        const myAtropos = Atropos({
            el: '#userTicket',
            activeOffset: 150,
            shadowScale: 1,
            highlight: false,
        })
    }, [])
    useEffect(() => {
        if (
            localStorage.getItem('sb-bfbnlgbiigcabrdmrjeb-auth-token') !=
                undefined &&
            !Logued
        ) {
            window.location.reload()
        }
    }, [])

    const onClick = async () => {
        try {
            const { data, error } = await supabase.auth.signInWithOAuth({
                provider: 'github',
            })
            if (error) throw new Error('Error al autenticarte con github')
        } catch (error) {
            alert(error)
        }
    }
    async function addTicketAfterAuth({ avatar_url, name, user_name }) {
        return await supabase.from('tickets').insert([
            {
                name,
                username_github: user_name,
                avatar_url,
            },
        ])
    }

    async function existsTicketForUser({ user_name }) {
        const data = await supabase
            .from('tickets')
            .select('num_ticket')
            .eq('username_github', user_name)
        return data.data.length > 0
    }
    async function getTicketForUser({ user_name }) {
        const data = await supabase
            .from('tickets')
            .select('num_ticket')
            .eq('username_github', user_name)
        return data.data[0].num_ticket
    }
    async function checkAndAddTicketAfterAuth({
        user_name,
        avatar_url,
        full_name,
    }) {
        const exists = await existsTicketForUser({ user_name })
        if (!exists) {
            addTicketAfterAuth({
                avatar_url,
                name: full_name,
                user_name,
            })
        }
    }
    useEffect(() => {
        try {
            const sessionInfo = JSON.parse(
                localStorage.getItem('sb-bfbnlgbiigcabrdmrjeb-auth-token')
            )
            if (
                localStorage.getItem('sb-bfbnlgbiigcabrdmrjeb-auth-token') !=
                undefined
            ) {
                const userCompleteInfo = sessionInfo?.user
                const { avatar_url, full_name, user_name } =
                    userCompleteInfo?.user_metadata
                setInfoUserForTicket({ avatar_url, name: full_name, user_name })
                checkAndAddTicketAfterAuth({
                    user_name,
                    avatar_url,
                    full_name,
                })
                ;(async () => {
                    const numTicket = await getTicketForUser({ user_name })
                    setInfoUserForTicket({
                        avatar_url,
                        name: full_name,
                        user_name,
                        numTicket,
                    })
                })()
                setLogued(true)
            }
        } catch (err) {
            console.log(err)
        }
    }, [])

    useEffect(() => {
        const { data: authListener } = supabase.auth.onAuthStateChange(
            async (event, session) => {
                // Verificar si el usuario está autenticado
                if (event === 'SIGNED_IN') {
                    // Recargar la página
                    window.location.reload()
                }
            }
        )

        return () => {
            // Desuscribirse del listener al desmontar el componente
            authListener.unsubscribe()
        }
    }, [])

    return (
        <section className="max-w-[862px] m-auto my-8 relative">
            <h2 className="font-extrabold text-4xl text-gradient text-center mb-24">
                {' '}
                Ticket
            </h2>
            {!Logued && (
                <button
                    ref={ticketEl}
                    className="font-extrabold text-4xl border-4 border-black p-4 bg-orange-400 hover:text-white hover:border-orange-400 hover:bg-black transition-all rounded-full absolute top-[55%] left-[30%] z-[200]"
                    type="button"
                    onClick={onClick}
                >
                    Genera tu ticket
                </button>
            )}
            <div
                className={`atropos reltive ${!Logued && 'blur-sm'}`}
                id="userTicket"
            >
                <div className="atropos-scale">
                    <div className="atropos-rotate">
                        <div className="atropos-inner relative">
                            <img src="/ticket.svg"></img>
                            <div className="absolute top-12 left-1/2 -translate-x-1/2 text-2xl text-neutral-200 w-[520px] ">
                                <header data-atropos-offset="2">
                                    <img
                                        src={'/stars_logo.svg'}
                                        alt="Stars"
                                        className="m-auto w-32"
                                    />
                                    <img
                                        src={'/svg_name.svg'}
                                        alt="Event name"
                                        className="m-auto w-64 pt-8"
                                    />
                                </header>
                                <div
                                    data-atropos-offset="4"
                                    className=" h-[17px] justify-start items-center gap-4 inline-flex py-12"
                                >
                                    <div>
                                        <span className=" font-bold text-gradient">
                                            21
                                        </span>
                                        <span className="font-bold">
                                            {' '}
                                            de Julio
                                        </span>
                                    </div>
                                    <div className="w-4 h-4 gradient rounded-full" />
                                    <div className="text-neutral-600  font-normal">
                                        Twitch.tv/afor_digital
                                    </div>
                                </div>
                                <footer
                                    data-atropos-offset="10"
                                    className="flex justify-between items-center "
                                >
                                    <div className="text-center">
                                        <h4> Ticket N°</h4>
                                        <span className="font-bold text-gradient">
                                            #{InfoUserForTicket.numTicket}
                                        </span>
                                    </div>
                                    <div className="text-center">
                                        <h4>
                                            {InfoUserForTicket.name
                                                ? InfoUserForTicket.name
                                                : 'Sara Montagud'}
                                        </h4>
                                        <span className="font-bold text-gradient">
                                            @
                                            {InfoUserForTicket.user_name
                                                ? InfoUserForTicket.user_name
                                                : 'afordigital'}
                                        </span>
                                    </div>
                                </footer>
                            </div>
                            <div className="absolute top-12 right-12">
                                <picture
                                    data-atropos-offset="6"
                                    class="rounded-full w-[72px] overflow-hidden p-1 gradient inline-block"
                                >
                                    <img
                                        src={InfoUserForTicket.avatar_url}
                                        alt={`Imagen de usuario`}
                                        class="w-full rounded-full "
                                    />
                                </picture>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
