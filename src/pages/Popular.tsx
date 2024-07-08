import { useContext, useEffect } from 'react'
import MovieContext, { MovieContextType } from '../context/MovieContext'
import MovieList from '../components/MovieList'

const Popular = () => {
    
    const {list, updateListCategory} = useContext(MovieContext) as MovieContextType

    useEffect(() => {
      updateListCategory('popular')
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

export default Popular