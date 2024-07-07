import { useContext, useEffect } from 'react'
import MovieContext, { MovieContextType } from '../context/MovieContext'
import MovieList from '../components/MovieList'

const Upcoming = () => {

    const {list, updateCategory} = useContext(MovieContext) as MovieContextType

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