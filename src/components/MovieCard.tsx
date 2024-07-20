import { Link } from "react-router-dom"

type Props = {
    movie: any
}

const POSTER_URL = import.meta.env.VITE_POSTER_URL

const MovieCard = ({movie}: Props) => {

    return (
        
        <>
            <Link to={`/movie/${movie.id}`}>
                <div className='cursor-pointer flex flex-col relative hover:opacity-50 duration-150 w-full h-full rounded-lg'> 
                    <figure className='h-full'>
                        <img src={`${POSTER_URL}/${movie.poster_path}`} alt={movie.title} className='object-cover h-full w-full rounded-lg' loading="lazy"/>
                    </figure>
                    <div className="absolute bottom-0 w-full bg-rose-950 p-2 text-white text-ellipsis overflow-hidden whitespace-nowrap text-xs rounded-b-lg shadow-lg">
                        {movie.original_title}
                    </div>
                </div>
            </Link>
        </>

    )
}

export default MovieCard