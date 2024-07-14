import { useContext, useEffect, useRef, useState } from "react"
import MovieContext, { MovieContextType } from "../context/MovieContext"
import { useSearchParams } from "react-router-dom"
import MovieList from "../components/MovieList"
import Button from "../components/Button"
import { TMDB_GENRES } from "../data/TMDB_GENRES"
import Loading from "../components/Loading"
import { useInitialLoading } from "../hooks/useInitialLoading"

const ByGenre = () => {

    const {updateCategory, GET_movies_bygenres, updatePage:updatePageC, page, loading, list, run} = useContext(MovieContext) as MovieContextType

    const [params] = useSearchParams()
    const isInitialMount = useRef(true);
    const [genres, setGenres] = useState<string[]>([])

    // UPDATE CATEGORY -> RESETS LIST AND PAGE.
    useEffect(() => {
      updateCategory(`bygenre?q=${params.get('genres')}`)
      const genresIds = params.get('genres')?.split(',').map((value:string)=>Number(value))
      const tempList:any = genresIds?.map((id:any)=>TMDB_GENRES[id])
      setGenres(tempList)
    }, [params])

    // Initial loading
    const {initialLoading} = useInitialLoading(list)

    useEffect(() => {

      // Only run this effect if page has actually changed
      if (isInitialMount.current) {
        console.log('blocked: ref')
        isInitialMount.current = false
        return;
      } 
      if (!page) {
        console.log('blocked: page')
        return;
      } 

      console.log('running ASYNC_GET_movies_bygenres')
      const ASYNC_GET_movies_bygenres = async() => {
        const genresIds = params.get('genres')?.split(',').map((value:string)=>Number(value))
        if (!genresIds) return;

        await GET_movies_bygenres(genresIds)
      }

      ASYNC_GET_movies_bygenres()

    }, [page, run])

    const updatePage = () => {
      updatePageC()
    }

    if (initialLoading) {
      return (
        <Loading message="Initial loading ..."/>
      )
    }

    return (
      <>
        <div className="py-3 text-left text-lg border-b-2 mb-2 border-color05 text-ellipsis overflow-hidden whitespace-nowrap">
          {params && genres && <>Genres: {genres.join(',')}</>}
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

export default ByGenre