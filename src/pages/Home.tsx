import { useContext, useEffect, useRef } from "react";
import MovieContext, { MovieContextType } from "../context/MovieContext";
import MovieList from "../components/MovieList";
import Loading from "../components/Loading";
import { useInitialLoading } from "../hooks/useInitialLoading";
import Title from "../components/MovieListPages/Title";
import LoadMoreButton from "../components/MovieListPages/LoadMoreButton";

const Home = () => {

    const {
        updateCategory, 
        GET_movies_toprated, 
        updatePage:updatePageC, 
        page, 
        loading, 
        list, 
        run, 

    } = useContext(MovieContext) as MovieContextType
    
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
        <Title title="Top Rated Movies"/>

        {list && list.length > 0 && 
          <MovieList movieList={list}/>
        }

        {loading && 
          <Loading message="Loading ..."/>
        }

        <LoadMoreButton LoadMoreFunc={updatePage} loadingState={loading}/>
      </>
    )
}

export default Home