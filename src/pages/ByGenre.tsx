import { useContext, useEffect, useRef, useState } from "react"
import MovieContext, { MovieContextType } from "../context/MovieContext"
import { useSearchParams } from "react-router-dom"
import MovieList from "../components/MovieList"
import Button from "../components/Button"
import { TMDB_GENRES } from "../data/TMDB_GENRES"
import Loading from "../components/Loading"
import { useInitialLoading } from "../hooks/useInitialLoading"
import Sort from "../components/Sort"

const ByGenre = () => {

    const {updateCategory, GET_movies_bygenres, updatePage:updatePageC, page, loading, list, run, resetStates, updateWarning, updateSort} = useContext(MovieContext) as MovieContextType

    const [params] = useSearchParams()
    const isInitialMount = useRef(true);
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
        console.log('sort and order: ', sort, order)
        await GET_movies_bygenres(genresIds, [sort, order])
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
        updateWarning('Order invalid')
        return;
      }
      if (!order || !order.length) {
        updateWarning('Ascdesc invalid')
        return;
      }

      console.log('order and ascdesc: ', sort, order)
      updateSort(sort, order)
    }

    if (initialLoading) {
      return (
        <Loading message="Initial loading ..."/>
      )
    }

    return (
      <>
        <div className="py-3 text-left text-lg border-b-2 mb-2 border-color05 text-ellipsis overflow-hidden whitespace-nowrap">
        </div>

        <div className="flex justify-between w-full py-3 px-2 mt-14 lg:mt-0">

          {/* TITLE */}
          <div className="text-lg text-left">
            {params && genres && <>Genres: {genres.join(',')}</>}
          </div>

          {/* ORDER */}
          <div className="w-fit">
            <button onClick={toggleSortBy} className="border-black border-2 h-full w-28 py-2 hover:bg-black hover:text-white">
              Order by
            </button>
            <div className="relative">
              <div ref={sortByRef} className="h-fit w-44 mt-[0.5px] right-0 block top-0 border-2 border-color05 p-2 text-left animate-in slide-in-from-top-5 duration-400 absolute z-40 bg-white overflow-y-auto scrollbar-thin">
                <Sort SubmitFunc={handleSort} setSort={setSort} setOrder={setOrder}/>
              </div> 
            </div>
          </div>
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