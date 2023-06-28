import { Ticket } from '../../types/types'

interface Props {
    ticket: Ticket
}
export default function TicketMovil({ ticket }: Props) {
    return (
        <div className="md:hidden relative w-fit m-auto ">
            <img
                className="w-full min-w-[280px]"
                src="/ticket-mobile.webp"
            ></img>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 mt-14 text-xl w-full text-neutral-200 flex flex-col gap-12 ">
                <div className="text-center">
                    <h4> Ticket N°</h4>
                    <span className="font-bold text-gradient ">
                        #{ticket.num_ticket}
                    </span>
                </div>
                <div className="text-center">
                    <h4>{ticket.name}</h4>
                    <span className="font-bold text-gradient capitalize ">
                        @{ticket.username_github}
                    </span>
                </div>
            </div>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 ">
                <picture className="rounded-full w-[72px] overflow-hidden p-1 gradient inline-block">
                    <img
                        src={ticket.avatar_url}
                        alt={`Imagen de ${ticket.name}`}
                        className="w-full rounded-full "
                    />
                </picture>
            </div>
        </div>
    )
}
