import { useState, useEffect } from "react"

const BackToTop = () => {

  const [show, setShow] = useState(false)
  const [scroll, setScroll] = useState(0)

  const startPixel = () => {
      setScroll(document.documentElement.scrollTop || document.body.scrollTop)
  }

  useEffect(()=> {
      window.addEventListener('scroll', startPixel)   
  }, [startPixel])

  useEffect(()=>{
      (scroll > 164 ? setShow(true): setShow(false))
  }, [scroll])

  return (
    <a href="#inicio" className={"fixed right-10 bottom-10 lg:right-20 lg:bottom-20 z-[39] hover:opacity-[80%] " + (!show ? ' hidden' : null)}>
        <button type="button" className="inline-block p-3 bg-transparent gradient text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md transition duration-150 ease-in-out bottom-5 right-5" id="btn-back-to-top">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-4 h-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path></svg>
        </button>
    </a>
  )
}

export default BackToTop
