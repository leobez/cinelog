import { useContext, useEffect, useState} from "react"
import ModeContext, { ModeContextType } from "../context/ModeContext"

const Header = () => {

    const {mode, toggleMode} = useContext(ModeContext) as ModeContextType
    const [allowed, setAllowed] = useState<boolean>(true)

    // Set initial mode theme 
    // As of right now, only initiates on game-mode, maybe use local storage to save it later
    useEffect(() => {

        if (!allowed) return;

        const ROOT  = document.querySelector("div#root")
        ROOT?.classList.add('game-mode')

        return () => setAllowed(false)

    }, [mode])

    const createAnimationElement = ():HTMLElement => {
        const ANIMATION = document.createElement('div')
        ANIMATION.classList.add('h-[100vh]')
        ANIMATION.classList.add('w-[100vw]')
        ANIMATION.classList.add('absolute')
        ANIMATION.classList.add('top-0')
        ANIMATION.classList.add('bg-transitioncolor')
        return ANIMATION
    }

    const AnimateRightToLeft = () => {
        const ROOT  = document.querySelector("div#root")

        /* CREATE ELEMENT */
        const ANIMATION = createAnimationElement()
        ANIMATION.classList.add('animate-in')
        ANIMATION.classList.add('slide-in-from-right')
        ROOT?.appendChild(ANIMATION)

        /* REMOVE ELEMENT */
        setTimeout(() => {
            ANIMATION.classList.remove('animate-in')
            ANIMATION.classList.remove('slide-in-from-right')
            ANIMATION.classList.add('animate-out')
            ANIMATION.classList.add('slide-out-to-left')

            ANIMATION.addEventListener('animationend', () => {
                ROOT?.removeChild(ANIMATION)
            })
        }, 1000)
    }

    const AnimateLeftToRight = () => {
        const ROOT  = document.querySelector("div#root")

        /* CREATE ELEMENT */
        const ANIMATION = createAnimationElement()
        ANIMATION.classList.add('animate-in')
        ANIMATION.classList.add('slide-in-from-left')
        ROOT?.appendChild(ANIMATION)

        /* REMOVE ELEMENT */
        setTimeout(() => {
            ANIMATION.classList.remove('animate-in')
            ANIMATION.classList.remove('slide-in-from-left')
            ANIMATION.classList.add('animate-out')
            ANIMATION.classList.add('slide-out-to-right')

            ANIMATION.addEventListener('animationend', () => {
                ROOT?.removeChild(ANIMATION)
            })
        }, 1000) 
    }

    const handleToggle = () => {

        const ROOT  = document.querySelector("div#root")

        toggleMode()

        /* Going from game to movie */
        if (mode === 'game') {
            /* Animate from  right to left*/
            AnimateLeftToRight()
            ROOT?.classList.remove('game-mode')
            ROOT?.classList.add('movie-mode')
        }

        /* Going from movie to game */
        if (mode === 'movie') {
            /* Animate from  left to right*/
            AnimateRightToLeft()
            ROOT?.classList.remove('movie-mode')
            ROOT?.classList.add('game-mode')
        }
    }

    return (
    <>
        <div className="grid place-items-center text-2xl text-white font-bold">
            GAMES
        </div>

        <div className="grid place-items-center">
            <input type="checkbox" className="toggle toggle-lg [--tglbg:white] bg-black hover:bg-slate-500 border-2 border-black" onClick={handleToggle}/>
        </div>

        <div className="grid place-items-center text-2xl text-white font-bold">
            MOVIES
        </div>
    </>
  )
}

export default Header