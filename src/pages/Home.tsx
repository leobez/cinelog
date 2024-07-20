import { useContext, useEffect, useState} from "react";
import MovieContext, { MovieContextType } from "../context/MovieContext";
import MovieList from "../components/MovieList";
import Loading from "../components/Loading";
import { useInitialLoading } from "../hooks/useInitialLoading";
import Title from "../components/MovieListPages/Title";
import LoadMoreButton from "../components/MovieListPages/LoadMoreButton";
import { useGetTopRatedMovies } from "../hooks/FetchData/useGetTopRatedMovies";

const Home = () => {

    const {
        updateCategory, 
        updatePage, 
        page, 
        loading, 
        list, 
        run, 
    } = useContext(MovieContext) as MovieContextType

    // Update category state to 'top_rated'
    useEffect(() => {
      updateCategory('top_rated')
    }, [])

    // Handles the call to fetching data function
    useGetTopRatedMovies(run, page)

    // Initial loading
    const {initialLoading} = useInitialLoading(list)

    // Function to update page
    const handleUpdatePage = () => {
      updatePage()
    }

    // Shows loading message if its on intial load
    if (initialLoading) {
      //console.log('initial loading...')
      return (
        <Loading message="Initial loading ..."/>
      )
    } 

    return (
      <div className="flex flex-col gap-2">
        <Title title="Top Rated Movies"/>

        {list && list.length > 0 && 
          <MovieList movieList={list}/>
        }

        {loading && 
          <Loading message="Loading ..."/>
        }

        <LoadMoreButton LoadMoreFunc={handleUpdatePage} loadingState={loading}/>
      </div>
    )
}

export default Home