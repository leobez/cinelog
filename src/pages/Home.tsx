import { useContext, useEffect, useLayoutEffect, useRef } from "react";
import MovieCard from "../components/MovieCard";
import MovieListContext, { MovieListContextType } from "../context/MovieListContext";

const Home = () => {

    const {movieList, page, loading, hasMore, resetPage, resetMovieList, getTopRatedMovies} = useContext(MovieListContext) as MovieListContextType

    // Initial API call
    useEffect(() => {
      getTopRatedMovies(true)
    },[])

    // Get top rated movies
    const handleScroll = (e:any):void => {
        const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
        if (bottom) { 
          getTopRatedMovies()
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
      <>

        <div className="grid gap-5 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 overflow-y-auto scrollbar-thin max-h-full relative" onScroll={handleScroll} >

          {movieList.length > 0 && movieList.map((movie:any, index:number) => (
            <div key={`${movie.id}/${index}`} className="border-2 border-black h-80 hover:opacity-50">
              <MovieCard movie={movie} />
            </div>
          ))}

        </div>

        {movieList.length === 0 && <div>Empty list.</div>}
        {loading && <div className="loading-spinner"></div>}
        {!hasMore && <div>End.</div>}

      </>
    )
}

export default Home