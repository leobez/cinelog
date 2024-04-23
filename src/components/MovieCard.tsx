import { Link } from "react-router-dom"
import { getMovieUsefulInfo, MovieInfo } from "../utils/getMovieUsefulInfo"
import { useEffect } from "react"

type Props = {
    movie: any
}

const POSTER_URL = import.meta.env.VITE_POSTER_URL

const MovieCard = ({movie}: Props) => {

    const movieInfo:MovieInfo = getMovieUsefulInfo(movie)

/*     useEffect(() => {
        console.log('movieInfo: ', movieInfo)
    }, [movieInfo]) */

    return (
        
        <>
            <Link to={`/movie/${movieInfo.id}`}>
                <div className='h-full w-full cursor-pointer flex flex-col'>
                    <figure className='h-full w-full'>
                        <img src={`${POSTER_URL}/${movieInfo.poster_path}`} alt={movieInfo.title} className='object-cover h-full w-full' loading="lazy"/>
                        {/* INSERT NAME */}
                    </figure>
                </div>
            </Link>
        </>

    )
}

export default MovieCard