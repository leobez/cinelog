import { useContext, useEffect } from 'react'
import { useGetMovies } from '../../hooks/movie/useGetMovies'
import MovieCard from '../../components/MovieCard'
import CategoryContext, { CategoryContextType } from '../../context/CategoryContext'

type Props = {}

const MovieHome = (props: Props) => {

    const {category} = useContext(CategoryContext) as CategoryContextType
    useEffect(() => {console.log('CATEGORY: ', category)}, [category])

    const {loading, error, list} = useGetMovies(category)
    useEffect(() => {console.log(' LIST: ', list)}, [list])

    const handleLoadMore = () => {
        console.log('Load more')
    }

    return (
        <div className='h-full p-4'>

            <div className='grid grid-cols-4 gap-4'>
                {list.map((movie) => (
                <div 
                    key={movie.id} 
                    className='border-2 border-black h-96 hover:opacity-50'>
                    <MovieCard MovieInfo={movie}/>
                </div>
                ))}
            </div>

            <div className='p-4'>
                <button className='p-4 border-2 border-color03 text-color03 hover:bg-color03 hover:text-white duration-300' onClick={handleLoadMore}>
                    Load More
                </button>
            </div> 

        </div>
    )
}

export default MovieHome