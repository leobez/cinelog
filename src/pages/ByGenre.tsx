import { useContext, useEffect, useRef, useState } from "react"
import MovieContext, { MovieContextType } from "../context/MovieContext"
import { useSearchParams } from "react-router-dom"
import MovieList from "../components/MovieList"
import { TMDB_GENRES } from "../data/TMDB_GENRES"
import Loading from "../components/Loading"
import { useInitialLoading } from "../hooks/useInitialLoading"
import Sort from "../components/MovieListPages/Sort"
import Title from "../components/MovieListPages/Title"
import LoadMoreButton from "../components/MovieListPages/LoadMoreButton"
import { useGetByGenreMovies } from "../hooks/FetchData/useGetByGenresMovies"

const ByGenre = () => {

      const {
        updateCategory, 
        updatePage, 
        page, 
        loading, 
        list, 
        run, 
        resetStates,
        updateMessage,
        updateSort
    } = useContext(MovieContext) as MovieContextType

    // Get genres in params
    const [params] = useSearchParams()

    // Genres in name format to show to user on UI
    const [genres, setGenres] = useState<string[]>([])

    // Update category state to 'bygenre'
    useEffect(() => {
      updateCategory(`bygenre?q=${params.get('genres')}`)
      const genresIds = params.get('genres')?.split(',').map((value:string)=>Number(value))
      // Get genres names
      const tempList:any = genresIds?.map((id:any)=>TMDB_GENRES[id])
      setGenres(tempList)
    }, [params])

    const [sort, setSort] = useState<string>('')
    const [order, setOrder] = useState<string>('')

    // Initial loading
    const {initialLoading} = useInitialLoading(list)

    useGetByGenreMovies(run, page, params)

    const handleUpdatePage = () => {
      updatePage()
    }

    // Ref to toggle component
    const sortByRef:any = useRef<HTMLDivElement>()

    const handleSort = (e:any) => {
      e.preventDefault()

      resetStates()

      if (!sort || !sort.length) {
        updateMessage('Select one sort to filter', 'orange')
        return;
      }
      if (!order || !order.length) {
        updateMessage('Select one order to filter', 'orange')
        return;
      }

      updateSort(sort, order)
    }

    if (initialLoading) {
      return (
        <Loading message="Initial loading ..."/>
      )
    }

    return (
      <>
        {params && genres && 
          <Title title={`Genres: ${genres.join(',')}`}/>
        }
        
        <Sort 
          SubmitFunc={handleSort} 
          setSort={setSort} 
          setOrder={setOrder}
          sortByRef={sortByRef}
        />

        {list && list.length > 0 && 
          <MovieList movieList={list}/>
        }

        <LoadMoreButton LoadMoreFunc={handleUpdatePage} loadingState={loading}/>
      </>
    )
}

export default ByGenre