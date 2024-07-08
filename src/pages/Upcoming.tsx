import { useContext, useEffect } from 'react'
import MovieContext, { MovieContextType } from '../context/MovieContext'
import MovieList from '../components/MovieList'

const Upcoming = () => {

    const {list, updateListCategory} = useContext(MovieContext) as MovieContextType

    useEffect(() => {
      updateListCategory('upcoming')
    },[])

    return (
      <>
        {list &&
          <MovieList movieList={list}/>
        }
        {/* else ... */}
      </>
    )
}

export default Upcoming