import { useState } from 'react'
import type { MenuLink } from '../types/types'

const menu: MenuLink[] = [
    {
        name: 'Inicio',
        anchor: '#inicio',
    },
    {
        name: 'Cuenta atras',
        anchor: '#countdown',
    },
    {
        name: 'Horario y Charlas',
        anchor: '#horarios',
    },
    {
        name: 'Genera tu ticket',
        anchor: '#ticket',
    },
    {
        name: 'Faq',
        anchor: '#faq',
    },
]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState<Boolean>(false)

    const handleNav = () => {
        setNavbarOpen(!navbarOpen)
    }
    return (
        <>
            <nav
                id="top"
                className={
                    'fixed lg:relative top-0 left-0 right-0 z-40 lg:min-h-0 py-8 lg:bg-opacity-0 lg:backdrop-blur-0' +
                    (navbarOpen
                        ? ' overflow-hidden min-h-screen  bg-white bg-opacity-40 backdrop-blur-lg'
                        : '')
                }
            >
                <div
                    className={
                        'container px-4 mx-auto flex flex-wrap items-center justify-between'
                    }
                >
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <button
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={handleNav}
                        >
                            {navbarOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="white"
                                    viewBox="0 0 24 24"
                                    width="24px"
                                    height="24px"
                                >
                                    <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="white"
                                    viewBox="0 0 24 24"
                                    width="24px"
                                    height="24px"
                                >
                                    <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z" />
                                </svg>
                            )}
                        </button>
                    </div>
                    <div
                        className={
                            'lg:flex flex-grow items-center justify-center h-80 lg:h-0' +
                            (navbarOpen ? ' flex' : ' hidden')
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col items-center lg:items-start lg:flex-row font-semibold tracking-tight gap-x-8 text-slate-700 [&>li>a]:border-b-2 [&>li>a]:border-b-transparent [&>li>a]:transition-all gap-y-4">
                            {menu.map((item, index) => {
                                return (
                                    <li className="nav-item" key={index}>
                                        <a
                                            className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-white hover:opacity-75 ml-2 hover:underline lg:text-xs"
                                            href={item.anchor}
                                            onClick={() => setNavbarOpen(false)}
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
