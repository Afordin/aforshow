import { Ticket } from '../../types/types'

interface Props {
    ticket: Ticket
}
export default function TicketDektop ({ ticket }: Props) {
    return (
        <div className='atropos-scale hidden md:block max-w-[704px] lg:max-w-[862px] m-auto'>
            <div className='atropos-rotate'>
                <div className='atropos-inner relative'>
                    <img src='/ticket.webp'></img>
                    <div className='absolute top-12 left-1/2 -translate-x-1/2 text-2xl text-neutral-200 w-[520px] lg:scale-100 scale-75 -translate-y-9 lg:-translate-y-0'>
                        <header data-atropos-offset='2'>
                            <img
                                src={'/stars_logo.svg'}
                                alt='Stars'
                                className='m-auto w-32'
                            />
                            <img
                                src={'/svg_name.svg'}
                                alt='Event name'
                                className='m-auto w-64 pt-8'
                            />
                        </header>
                        <div
                            data-atropos-offset='4'
                            className='h-[17px] justify-start items-center gap-4 inline-flex py-12'
                        >
                            <div className='whitespace-nowrap'>
                                <span className=' font-bold'>21</span>
                                <span className='font-bold'> de Julio</span>
                            </div>
                            <div className='w-4 h-4 gradient rounded-full' />
                            <div className='text-neutral-600  font-normal'>
                                Twitch.tv/afor_digital
                            </div>
                        </div>
                        <footer
                            data-atropos-offset='10'
                            className='flex justify-between items-center '
                        >
                            <div className='text-center'>
                                <h4 className='min-h-[1.6rem]'> Ticket N°</h4>
                                <span className='font-bold '>
                                    #{ticket.num_ticket}
                                </span>
                            </div>
                            <div className='text-center'>
                                <h4 className='min-h-[1.6rem] whitespace-nowrap'>
                                    {ticket.name}
                                </h4>
                                <span className='font-bold '>
                                    @{ticket.username_github}
                                </span>
                            </div>
                        </footer>
                    </div>
                    <div className='absolute top-12 right-12'>
                        <picture
                            data-atropos-offset='6'
                            className='rounded-full w-[72px] overflow-hidden p-1 inline-block'
                        >
                            <img
                                src={ticket.avatar_url}
                                alt={`Imagen de ${ticket.name}`}
                                className='w-full rounded-full '
                            />
                        </picture>
                    </div>
                </div>
            </div>
        </div>
    )
}
