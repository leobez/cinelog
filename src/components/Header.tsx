import { useEffect, useState} from "react"

const Header = () => {

    const [allowed, setAllowed] = useState<boolean>(true)

    // Set initial mode theme 
    // As of right now, only initiates on game-mode, maybe use local storage to save it later
    useEffect(() => {

        if (!allowed) return;

        const ROOT  = document.querySelector("div#root")
        ROOT?.classList.add('movie-mode')

        return () => setAllowed(false)

    }, [])

    const createAnimationElement = (text:string):HTMLElement => {
        const ANIMATION = document.createElement('div')
        ANIMATION.classList.add('h-[100vh]')
        ANIMATION.classList.add('w-[100vw]')
        ANIMATION.classList.add('absolute')
        ANIMATION.classList.add('top-0')
        ANIMATION.classList.add('bg-transitioncolor')
        ANIMATION.classList.add('grid')
        ANIMATION.classList.add('place-items-center')
        ANIMATION.classList.add('border-[3px]')
        ANIMATION.classList.add('border-color02')


        const TEXT = document.createElement('p')
        TEXT.classList.add('text-4xl')
        TEXT.classList.add('text-white')
        TEXT.classList.add('font-bold')
        TEXT.innerText = text

        const LOADING = document.createElement('span')
        LOADING.classList.add('loading')
        LOADING.classList.add('loading-spinner')
        LOADING.classList.add('loading-lg')

        ANIMATION.appendChild(TEXT)
        ANIMATION.appendChild(LOADING)

        return ANIMATION
    }

    const AnimateRightToLeft = () => {
        const ROOT  = document.querySelector("div#root")

        /* CREATE ELEMENT */
        const ANIMATION = createAnimationElement('MOVING TO GAMES...')
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
        const ANIMATION = createAnimationElement('MOVING TO MOVIES...')
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
            MOVIES
        </div>
    </>
  )
}

export default Header