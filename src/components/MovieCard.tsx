import { useContext } from "react"
import { Link } from "react-router-dom"
import ThemeContext, { ThemeContextType } from "../context/ThemeContext"

type Props = {
    movie: any
}

const POSTER_URL = import.meta.env.VITE_POSTER_URL

const MovieCard = ({movie}: Props) => {

    const {theme} = useContext(ThemeContext) as ThemeContextType 

    return (
        
        <>
            <Link to={`/movie/${movie.id}`}>
                <div className={`cursor-pointer flex flex-col relative hover:opacity-50 duration-150 w-full h-full rounded-lg bg-${theme}-900`}> 
                    <figure className='h-full'>
                        <img src={`${POSTER_URL}/${movie.poster_path}`} alt={movie.title} className='object-cover h-full w-full rounded-lg text-white text-xs' loading="lazy"/>
                    </figure>
                    <div className={`absolute bottom-0 w-full bg-${theme}-950 p-2 text-white text-ellipsis overflow-hidden whitespace-nowrap text-xs rounded-b-lg shadow-lg`}>
                        {movie.original_title}
                    </div>
                </div>
            </Link>
        </>

    )
}

export default MovieCard