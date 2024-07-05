import { useContext, useEffect } from 'react'
import MovieListContext, { MovieListContextType } from '../context/MovieListContext'
import MovieList from '../components/MovieList'

const Popular = () => {
    
    const {movieList, updateCategory} = useContext(MovieListContext) as MovieListContextType

    // Initial API call
    useEffect(() => {
      updateCategory('popular')
    },[])

    return (
      <>
        {movieList && 
          <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 relative" >
            <MovieList movieList={movieList}/>
          </div>
        }
      </>
    )
}

export default Popular