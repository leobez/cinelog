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

const ByGenre = () => {

    const {
      updateCategory, 
      GET_movies_bygenres, 
      updatePage:updatePageC, 
      page, 
      loading, 
      list, 
      run, 
      resetStates, 
      updateWarning, 
      updateSort
    } = useContext(MovieContext) as MovieContextType

    const isInitialMount = useRef(true);
    const [params] = useSearchParams()

    const [genres, setGenres] = useState<string[]>([])
    const [sort, setSort] = useState<string>('')
    const [order, setOrder] = useState<string>('')

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
        console.log('sort and order: ', sort, order) //
        await GET_movies_bygenres(genresIds)
      }

      ASYNC_GET_movies_bygenres()

    }, [page, run])

    const updatePage = () => {
      updatePageC()
    }

    const sortByRef:any = useRef<HTMLDivElement>()
    const toggleSortBy = () => {
        const classNames = sortByRef.current.className.split(' ')
        if (classNames.includes('hidden')) {
            // Make it visible
            sortByRef.current.classList.remove('hidden')
            sortByRef.current.classList.add('block')

        } else if (classNames.includes('block')) {
            // Make it invisible
            sortByRef.current.classList.remove('block')
            sortByRef.current.classList.add('hidden')
        }
    }

    const handleSort = (e:any) => {
      e.preventDefault()

      resetStates()

      if (!sort || !sort.length) {
        updateWarning('Select one sort to filter')
        return;
      }
      if (!order || !order.length) {
        updateWarning('Select one order to filter')
        return;
      }

      //console.log('order and ascdesc: ', sort, order)
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
          toggleSortFunc={toggleSortBy}
          setSort={setSort} 
          setOrder={setOrder}
          sortByRef={sortByRef}
        />

        {list && list.length > 0 && 
          <MovieList movieList={list}/>
        }

        <LoadMoreButton LoadMoreFunc={updatePage} loadingState={loading}/>
      </>
    )
}

export default ByGenre