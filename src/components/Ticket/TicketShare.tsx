interface Props {
    createTweet: () => void
}
export default function TicketShare({ createTweet }: Props) {
    return (
        <div
            className={'p-1 hover:scale-105 gradient rounded-full inline-block w-auto whitespace-no-wrap  '}
        >
            <button
                type='button'
                onClick={createTweet}
                rel='noopener noreferrer'
                className='p-4 text-white text-sm md:text-xl font-extrabold rounded-full
            bg-black hover:text-black hover:gradient   hover:text-black'
            >
                Compartir en Twitter
            </button>
        </div>
    )
}