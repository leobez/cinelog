import { useSearchParams } from "react-router-dom"
import MovieList from "../components/MovieList"
import { useContext, useEffect, useState } from "react"
import MovieContext, { MovieContextType } from "../context/MovieContext"

const Search = () => {

    const {GET_movies_byquery, loading, error} = useContext(MovieContext) as MovieContextType

    const [list, setList] = useState<any[]>([])
    const [page, setPage] = useState<number>(1)
    const [params, setParams] = useSearchParams()

    // When params change, reset list to [] and page to 1
    useEffect(() => {
      setList([])
      setPage(1)
    }, [params])

    useEffect(() => {
        
        const ASYNC_GET_movies_byquery = async() => {

            const query = params.get('q')
            if (!query) return;

            const l = await GET_movies_byquery(page, query)

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
        
        ASYNC_GET_movies_byquery()

    },[page, params])

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

export default Search