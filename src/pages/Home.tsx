import { useContext, useEffect, useState } from "react";
import MovieContext, { MovieContextType } from "../context/MovieContext";
import MovieList from "../components/MovieList";
import Button from "../components/Button";
import Loading from "../components/Loading";
import { useInitialLoading } from "../hooks/useInitialLoading";

const Home = () => {

    const {GET_movies_toprated, loading} = useContext(MovieContext) as MovieContextType

    const [list, setList] = useState<any[]>([])
    const [page, setPage] = useState<number>(1)

    // Initial loading
    const {initialLoading} = useInitialLoading(list) 

    useEffect(() => {

      const ASYNC_GET_movies_toprated = async() => {

        const tempList = await GET_movies_toprated(page)

        if (!tempList) return;

        // Inserting into list for first time
        if (list.length === 0) {
          setList(tempList)
        } else {
          setList(prev => [...prev, ...tempList])
        }


      }
      
      ASYNC_GET_movies_toprated()

    },[page])

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
        <div className="py-3 sm:text-left text-lg border-b-2 mb-2 border-color05 text-right">
          Top Rated Movies
        </div>

        {list &&
          <>
            {list.length > 0 ? (
              <MovieList movieList={list}/>
            ) : (
              <div>No elements found</div>
            )}
          </>
        }

        {loading && <Loading message="Loading ..."/>}

        <div className="mt-2">
          <Button text={'Load more'} loading={loading} func={updatePage}/>
        </div>
      </>
    )
}

export default Home