import { Link } from "react-router-dom"

type Props = {
    movie: any
}

const POSTER_URL = import.meta.env.VITE_POSTER_URL

const MovieCard = ({movie}: Props) => {

    return (
        
        <>
            <Link to={`/movie/${movie.id}`}>
                <div className='cursor-pointer flex flex-col relative hover:opacity-50 w-full h-full'> 
                    <figure className=''>
                        <img src={`${POSTER_URL}/${movie.poster_path}`} alt={movie.title} className='object-cover h-full w-full' loading="lazy"/>
                    </figure>
                    <div className="absolute bottom-0 w-full bg-color05 px-1 py-2 text-slate-200 text-ellipsis overflow-hidden whitespace-nowrap text-sm">{movie.original_title}</div>
                </div>
            </Link>
        </>

    )
}

export default MovieCard