import { useContext, useEffect } from "react";
import MovieContext, { MovieContextType } from "../context/MovieContext";
import MovieList from "../components/MovieList";

const Home = () => {

    const {updateListCategory, list} = useContext(MovieContext) as MovieContextType

    useEffect(() => {
      updateListCategory('top_rated')
    },[])

    return (
      <>
        {list.length > 0 &&
          <MovieList movieList={list}/>
        }
        {/* else ... */}
      </>
    )
}

export default Home