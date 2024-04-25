import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useGetMovieById } from '../hooks/useGetMovieById'

const Movie = () => {
    
    const {id} = useParams()

    const {loading, error, movie} = useGetMovieById(Number(id))

    useEffect(() => {
        console.log(movie)
    }, [movie])

    return (
        <div>Movie</div>
    )
}

export default Movie