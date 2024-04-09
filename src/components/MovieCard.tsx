import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
    MovieInfo: any
}

const POSTER_URL = import.meta.env.VITE_POSTER_URL

const MovieCard = ({MovieInfo}: Props) => {

    const MovieRelevantInfo = {
        id: MovieInfo.id,
        backdrop: MovieInfo.backdrop_path,
        genres_id: MovieInfo.genres_id,
        title: MovieInfo.title,
		original_title: MovieInfo.original_title,
		original_language: MovieInfo.original_language,
		overview: MovieInfo.overview,
		popularity: MovieInfo.popularity,
		poster_path: MovieInfo.poster_path,
		release_date: MovieInfo.release_date,
		vote_average: MovieInfo.vote_average,
		vote_count: MovieInfo.vote_count,
    }

    const posterURL = `${POSTER_URL}/${MovieRelevantInfo.poster_path}`

    console.log(MovieRelevantInfo)

    return (
        
        <div className='h-full w-full'>
            <Link to={`/movie/${MovieRelevantInfo.id}`}>
                <figure className='h-full w-full'>
                    <img src={posterURL} alt={MovieRelevantInfo.title} className='object-cover h-full w-full'/>
                </figure>
            </Link>
        </div>
    )
}

export default MovieCard