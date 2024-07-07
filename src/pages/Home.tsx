import { useContext, useEffect } from "react";
import MovieContext, { MovieContextType } from "../context/MovieContext";
import MovieList from "../components/MovieList";

const Home = () => {

    const {list, updateCategory} = useContext(MovieContext) as MovieContextType

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