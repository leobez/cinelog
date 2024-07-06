import { Link } from "react-router-dom"
import { getMovieUsefulInfo } from "../utils/getMovieUsefulInfo"

type Props = {
    movie: any
}

const POSTER_URL = import.meta.env.VITE_POSTER_URL

const MovieCard = ({movie}: Props) => {

    const movieInfo:any = getMovieUsefulInfo(movie)

    return (
        
        <>
            <Link to={`/movie/${movieInfo.id}`}>
                <div className='h-full w-full cursor-pointer flex flex-col relative'> 
                    <figure className='h-full w-full'>
                        <img src={`${POSTER_URL}/${movieInfo.poster_path}`} alt={movieInfo.title} className='object-cover h-full w-full' loading="lazy"/>
                    </figure>
                    <div className="absolute bottom-0 w-full bg-slate-950 p-2 text-slate-200">{movieInfo.original_title}</div>
                </div>
            </Link>
        </>

    )
}

export default MovieCard