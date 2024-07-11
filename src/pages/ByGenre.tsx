import { useContext, useEffect, useState } from "react"
import MovieContext, { MovieContextType } from "../context/MovieContext"
import { useSearchParams } from "react-router-dom"
import MovieList from "../components/MovieList"
import Button from "../components/Button"
import { TMDB_GENRES } from "../data/TMDB_GENRES"

const ByGenre = () => {

    const {GET_movies_bygenres, loading} = useContext(MovieContext) as MovieContextType
  
    const [genres, setGenres] = useState<string[]>([])
    const [list, setList] = useState<any[]>([])
    const [page, setPage] = useState<number>(1)
    const [params] = useSearchParams()

    useEffect(() => {
      const genresIds = params.get('genres')?.split(',').map((value:string)=>Number(value))
      const tempList:any = genresIds?.map((id:any)=>TMDB_GENRES[id])
      setGenres(tempList)
    }, [TMDB_GENRES, params])

    // When params change, reset list to [] and page to 1
    useEffect(() => {
      setList([])
      setPage(1)
    }, [params])

    useEffect(() => {
        
        const ASYNC_GET_movies_bygenres = async() => {

            const genresIds = params.get('genres')?.split(',').map((value:string)=>Number(value))
            if (!genresIds) return;

            const tempList = await GET_movies_bygenres(page, genresIds)

            if (!tempList) return;
            
            // Inserting into list for first time
            if (list.length === 0) {
              setList(tempList)
            } else {
              setList(prev => [...prev, ...tempList])
            }
        }
        
        ASYNC_GET_movies_bygenres()

    },[page, params])

    const updatePage = () => {
      setPage(prev => prev+1)
    }

    return (
      <>
        <div className="py-3 text-left text-lg border-b-2 mb-2 border-black text-ellipsis overflow-hidden whitespace-nowrap">
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
        <Button text={'Load more'} loading={loading} func={updatePage}/>
      </>
    )
}

export default ByGenre