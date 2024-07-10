import { useContext, useEffect, useState } from 'react'
import MovieContext, { MovieContextType } from '../context/MovieContext'
import MovieList from '../components/MovieList'

const Upcoming = () => {

    const {GET_movies_upcoming, loading, error} = useContext(MovieContext) as MovieContextType

    const [list, setList] = useState<any[]>([])
    const [page, setPage] = useState<number>(1)

    useEffect(() => {

      const ASYNC_GET_movies_upcoming = async() => {

        const l = await GET_movies_upcoming(page)

        if (l.length === 0) {
          console.log('no elements in list')
          return;
        }

        // Inserting into list for first time
        if (list.length === 0) {
          setList(l)
        } else {
          setList(prev => [...prev, ...l])
        }

      }
      
      ASYNC_GET_movies_upcoming()

    },[page])

    const updatePage = () => {
      setPage(prev => prev+1)
    }

    return (
      <>
        {list && list.length > 0 &&
          <MovieList movieList={list} updatePage={updatePage}/>
        }
      </>
    )
}

export default Upcoming