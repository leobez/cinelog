import { useSearchParams } from "react-router-dom"
import MovieList from "../components/MovieList"
import { useContext, useEffect, useRef } from "react"
import MovieContext, { MovieContextType } from "../context/MovieContext"
import Loading from "../components/Loading"
import { useInitialLoading } from "../hooks/useInitialLoading"
import Title from "../components/MovieListPages/Title"
import LoadMoreButton from "../components/MovieListPages/LoadMoreButton"

const Search = () => {

    const {updateCategory, GET_movies_byquery, updatePage:updatePageC, page, loading, list, run} = useContext(MovieContext) as MovieContextType

    const [params] = useSearchParams()
    const isInitialMount = useRef(true);

    // UPDATE CATEGORY -> RESETS LIST AND PAGE.
    useEffect(() => {
      updateCategory(`byquery?q=${params.get('q')}`)
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

      console.log('running ASYNC_GET_movies_byquery')
      const ASYNC_GET_movies_byquery = async() => {
        const query = params.get('q')
        if (!query) return;

        await GET_movies_byquery(query)
      }
  
      ASYNC_GET_movies_byquery()

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
        {params && 
          <Title title={`Query: ${params.get('q')}`}/>
        }

        {list && list.length > 0 && 
          <MovieList movieList={list}/>
        }

        <LoadMoreButton LoadMoreFunc={updatePage} loadingState={loading}/>
      </>
    )
}

export default Search