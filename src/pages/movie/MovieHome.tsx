import { useContext, useEffect } from 'react'
import { useGetMovies } from '../../hooks/movie/useGetMovies'
import MovieCard from '../../components/MovieCard'
import CategoryContext, { CategoryContextType } from '../../context/CategoryContext'

type Props = {}

const MovieHome = (props: Props) => {

    const {category} = useContext(CategoryContext) as CategoryContextType
    useEffect(() => {
        console.log('CATEGORY: ', category)
    }, [category])

    const {loading, error, list} = useGetMovies(category)
    useEffect(() => {
        console.log(' LIST: ', list)
    }, [list])

    return (
        <div className='h-full p-4'>

            <div className='grid grid-cols-4 gap-4'>
                {list.map((movie) => (
                <div key={movie.id} className='border-2 border-black h-80 hover:opacity-50'>
                    <MovieCard MovieInfo={movie}/>
                </div>
                ))}
            </div>

            <div className='p-4'>
                Load More
            </div> 

        </div>
    )
}

export default MovieHome