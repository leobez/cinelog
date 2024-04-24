import { useContext, useLayoutEffect, useRef } from "react";
import MovieCard from "../components/MovieCard";
import { useGetMovies } from "../hooks/useGetMovies"
import MovieListContext, { MovieListContextType } from "../context/MovieListContext";

const Home = () => {

    const {movieList, updatePage} = useContext(MovieListContext) as MovieListContextType

    // Get top rated movies
    const {loading, hasMore} = useGetMovies("top_rated")

    const handleScroll = (e:any):void => {
      const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
      if (bottom) { 
        updatePage()
      }
      
    }

/*     const containerRef:any = useRef()

    useLayoutEffect(() => {

      if (!containerRef.current) return;

      // See if there is an id on localStorage that belongs to the element that was clicked by user
      const id = window.sessionStorage.getItem('clickedId')

      // If there is, move user to that location, so they can continue from where they left
      if (id) {
        console.log('moving: ', containerRef.current)
        containerRef.current.getElementById(id).scrollIntoView();
      } 

    }, [containerRef]) */

    const handleLoad = (e:any) => {
      const id = window.sessionStorage.getItem('clickedId')
      if (id === e.target.id) {
        console.log(id)
      }
    }

    return (
      <div className="grid gap-5 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 overflow-y-auto scrollbar-thin max-h-full" onScroll={handleScroll} >

        {movieList && movieList.map((movie:any, index:number) => (
          <div key={`${movie.id}/${index}`} className="border-2 border-black h-80 hover:opacity-50" onLoad={handleLoad}>
            <MovieCard movie={movie} />
          </div>
        ))}

        {loading && <div className="loading-spinner"></div>}
        {!hasMore && <div>Acabou!</div>}

      </div>

    )
}

export default Home