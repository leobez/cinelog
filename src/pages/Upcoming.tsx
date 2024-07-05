import { useContext, useEffect } from 'react'
import MovieListContext, { MovieListContextType } from '../context/MovieListContext'
import MovieList from '../components/MovieList'

const Upcoming = () => {

    const {list, updateCategory} = useContext(MovieListContext) as MovieListContextType

    // Initial API call
    useEffect(() => {
      updateCategory('upcoming')
    },[])

    return (
      <>
        {list &&
          <MovieList movieList={list}/>
        }
      </>
    )
}

export default Upcoming