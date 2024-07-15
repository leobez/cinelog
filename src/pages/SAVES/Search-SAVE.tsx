import { useSearchParams } from "react-router-dom"
import MovieList from "../components/MovieList"
import { useContext, useEffect, useState } from "react"
import MovieContext, { MovieContextType } from "../context/MovieContext"
import Button from "../components/Button"
import Loading from "../components/Loading"
import { useInitialLoading } from "../hooks/useInitialLoading"

const Search = () => {

    const {GET_movies_byquery, loading} = useContext(MovieContext) as MovieContextType

    const [list, setList] = useState<any[]>([])
    const [page, setPage] = useState<number>(1)
    const [params] = useSearchParams()

    // Initial loading
    const {initialLoading} = useInitialLoading(list) 

    // When params change, reset list to [] and page to 1
    useEffect(() => {
      console.log('reseting page to 1')
      setPage(1)
      setList([])
    }, [params])

    useEffect(() => {
        
        const ASYNC_GET_movies_byquery = async() => {

            const query = params.get('q')
            if (!query) return;

            const tempList = await GET_movies_byquery(page, query)
            if (!tempList) return;

            // Inserting into list for first time
            if (list.length === 0) {
              setList(tempList)
            } else {
              setList(prev => [...prev, ...tempList])
            }
        }
        
        ASYNC_GET_movies_byquery()

    },[page, params])

    const updatePage = () => {
      setPage(prev => prev+1)
    }

    if (initialLoading) {
      return (
        <Loading message="Initial loading ..."/>
      )
    }

    return (
      <>

        <div className="py-3 text-left text-lg border-b-2 mb-2 border-color05 text-ellipsis overflow-hidden whitespace-nowrap">
          {params && <>Query: {params.get('q')}</>}
        </div>

        {list &&
          <>
            {list.length > 0 ? (
              <MovieList movieList={list}/>
            ) : (
              <p>No elements found.</p>
            )}
          </>
        }
        <div className="my-4 mr-2 flex justify-end text-sm">
          <Button text={'Load more +'} loading={loading} func={updatePage}/>
        </div>
      </>
    )
}

export default Search