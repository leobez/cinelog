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

    const handleClick = (e:any):any => {
        // Save the element that was clicked in localStorage, so it can be used to move user back where they were before clicking
        console.log(e.target.id)
        window.sessionStorage.setItem('clickedId', e.target.id)
    }

    return (
        
        <>
            <Link to={`/movie/${movieInfo.id}`} onClick={handleClick}>
                <div className='h-full w-full cursor-pointer flex flex-col relative'> 
                    <figure className='h-full w-full'>
                        <img src={`${POSTER_URL}/${movieInfo.poster_path}`} alt={movieInfo.title} className='object-cover h-full w-full' loading="lazy" id={`movieLink_${movieInfo.id}`}/>
                    </figure>
                    <div className="absolute bottom-0 w-full bg-slate-950 p-2 text-slate-200">{movieInfo.original_title}</div>
                </div>
            </Link>
        </>

    )
}

export default MovieCard