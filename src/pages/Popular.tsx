import { useContext, useEffect, useRef } from 'react'
import MovieListContext, { MovieListContextType } from '../context/MovieListContext'
import MovieCard from '../components/MovieCard'

const Popular = () => {
    const {movieList, loading, hasMore, getPopularMovies} = useContext(MovieListContext) as MovieListContextType

    // Initial API call
    useEffect(() => {
      getPopularMovies(true)
    },[])

    // Gets more top rated movies when user has reached bottom of movie container
    const handleScroll = (e:any):void => {
        const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
        if (bottom) { 
          getPopularMovies()
        }
    }

    const containerRef:any = useRef<HTMLDivElement>()

    const handleClick = ():void => {
      // Save container current position, so it can be used to move user back to where they were before clicking.
      window.sessionStorage.setItem('scrollPosition', containerRef.current.scrollTop)
    }

    // when user returns, return to position that was saved on sessionStorage
    useEffect(() => {

      // containerRef not loaded yet
      if (!containerRef.current) return;

      const scrollPos = window.sessionStorage.getItem('scrollPosition')

      // There is no scrollPos in sessionStorage
      if (!scrollPos) return;

      // Scroll that should be is not possible because there is not enough height in the element to suport it
      if (scrollPos > containerRef.current.scrollHeight) return;
      
      // It is possible to move scrollBar
      if (scrollPos) containerRef.current.scrollTop = scrollPos
      
    }, [containerRef])


    return (
      <>

        <div className="grid gap-5 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 overflow-y-auto scrollbar-thin max-h-full relative" onScroll={handleScroll} ref={containerRef}>

          {movieList.length > 0 && movieList.map((movie:any, index:number) => (
            <div key={`${movie.id}/${index}`} className="border-2 border-black h-80 hover:opacity-50" onClick={handleClick}>
              <MovieCard movie={movie}/>
            </div>
          ))}

        </div>

        {movieList.length === 0 && <div>Empty list.</div>}
        {loading && <div className="loading-spinner"></div>}
        {!hasMore && <div>End.</div>}

      </>
    )
}

export default Popular