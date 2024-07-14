import { useContext, useEffect, useRef } from "react";
import MovieContext, { MovieContextType } from "../context/MovieContext";
import MovieList from "../components/MovieList";
import Button from "../components/Button";
import Loading from "../components/Loading";
import { useInitialLoading } from "../hooks/useInitialLoading";

const Home = () => {

    const {updateCategory, GET_movies_toprated, updatePage:updatePageC, page, loading, list, run} = useContext(MovieContext) as MovieContextType
    
    const isInitialMount = useRef(true);

    // UPDATE CATEGORY -> RESETS LIST AND PAGE.
    useEffect(() => {
      updateCategory('top_rated')
    }, [])

    // Initial loading
    const {initialLoading} = useInitialLoading(list)

    useEffect(() => {
      console.log('ativou effect')

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

      console.log('running ASYNC_GET_movies_toprated')
      const ASYNC_GET_movies_toprated = async() => {
        await GET_movies_toprated()
      }
  
      ASYNC_GET_movies_toprated()

    }, [run])

    const updatePage = () => {
      updatePageC()
    }

    if (initialLoading) {
      console.log('initial loading...')
      return (
        <Loading message="Initial loading ..."/>
      )
    } 

    return (
      <>
        <div className="py-3 text-lg mt-14 lg:mt-0 border-b-2 mb-2 border-color05 text-left">
          Top Rated Movies
        </div>

        {list && list.length > 0 && <MovieList movieList={list}/>}

        {loading && <Loading message="Loading ..."/>}

        <div className="my-4 mr-2 flex justify-end text-sm">
          <Button text={'Load more +'} loading={loading} func={updatePage}/>
        </div>
      </>
    )
}

export default Home