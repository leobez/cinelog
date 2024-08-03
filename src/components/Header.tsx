import { useEffect, useState} from "react"
import { MdLocalMovies } from "react-icons/md";

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
        <div className="flex gap-5 items-center text-2xl text-white font-bold">
            CINELOG
            <MdLocalMovies size={30} fill="white"/>
        </div>
    </>
  )
}

export default Header