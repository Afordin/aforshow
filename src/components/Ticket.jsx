// import Atropos library
import Atropos from 'atropos'
import { useEffect, useState } from 'react'
import { supabase } from '../supabase.js'

export default function Ticket() {
    const [Logued, setLogued] = useState(false)
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
    const onClick = async () => {
        try {
            const { data, error } = await supabase.auth.signInWithOAuth({
                provider: 'github',
            })
            console.log(
                JSON.parse(
                    localStorage.getItem('sb-bfbnlgbiigcabrdmrjeb-auth-token')
                )
            )
            if (error) throw new Error('Error al autenticarte con github')
        } catch (error) {
            alert(error)
        }
    }
    useEffect(() => {
        const sessionInfo = JSON.parse(
            localStorage.getItem('sb-bfbnlgbiigcabrdmrjeb-auth-token')
        )
        if (
            localStorage.getItem('sb-bfbnlgbiigcabrdmrjeb-auth-token') !=
            undefined
        ) {
            const userCompleteInfo = sessionInfo?.user
            const { avatar_url, name, user_name } =
                userCompleteInfo?.user_metadata
            setInfoUserForTicket({ avatar_url, name, user_name })
            setLogued(true)
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
                                            #00010{' '}
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
