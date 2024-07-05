import { useContext, useEffect } from "react";
import MovieListContext, { MovieListContextType } from "../context/MovieListContext";
import MovieList from "../components/MovieList";

const Home = () => {

    const {list, updateCategory} = useContext(MovieListContext) as MovieListContextType

    // Initial API call
    useEffect(() => {
      updateCategory('top_rated')
      console.log('run')
    },[])

    return (
      <>
        {list &&
          <MovieList movieList={list}/>
        }
      </>
    )
}

export default Home