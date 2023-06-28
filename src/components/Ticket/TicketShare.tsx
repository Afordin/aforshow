interface Props {
    createTweet: () => void
}
export default function TicketShare({ createTweet }: Props) {
    return (
        <button
            type="button"
            onClick={createTweet}
            rel="noopener noreferrer"
            className="p-4 text-white text-sm md:text-xl bg-blue-600 font-extrabold rounded-full border-4 hover:border-blue-600 hover:text-black hover:bg-white transition-all"
        >
            Compartir en Twitter
        </button>
    )
}
