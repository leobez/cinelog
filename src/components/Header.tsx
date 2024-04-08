import { useContext, useEffect, useState } from "react"
import ModeContext, { ModeContextType } from "../context/ModeContext"

const Header = () => {

    const {mode, toggleMode} = useContext(ModeContext) as ModeContextType

    const createAnimationElement = ():HTMLElement => {
        const ANIMATION = document.createElement('div')
        ANIMATION.classList.add('h-[100vh]')
        ANIMATION.classList.add('w-[100vw]')
        ANIMATION.classList.add('absolute')
        ANIMATION.classList.add('top-0')
        ANIMATION.classList.add('bg-slate-400')
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

        toggleMode()

        if (mode === 'game') {
            /* Animate from  right to left*/
            AnimateLeftToRight()
        }
        if (mode === 'movie') {
            /* Animate from  left to right*/
            AnimateRightToLeft()
        }
    }

    return (
    <header className='p-4 border-2 border-black flex justify-between align-middle'>

        <div className="grid place-items-center font-bold text-xl">
            G A M E S
        </div>

        <div className="grid place-items-center">
            <input type="checkbox" className="toggle toggle-lg [--tglbg:white] bg-black hover:bg-slate-500 border-2 border-black" onClick={handleToggle}/>
        </div>

        <div className="grid place-items-center font-bold text-xl">
            M O V I E S
        </div>

    </header>
  )
}

export default Header