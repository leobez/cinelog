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

    return (
    <>
        <div className="grid place-items-center text-2xl text-white font-bold">
            MOVIES
        </div>
    </>
  )
}

export default Header