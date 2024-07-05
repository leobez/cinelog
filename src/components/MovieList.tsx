import { useEffect, useRef } from "react"
import MovieCard from "./MovieCard"

type Props = {
    movieList: any[]
}

const MovieList = ({movieList}: Props) => {

    const containerRef:any = useRef<HTMLDivElement>()

    const handleClick = ():void => {
        // Save container current position, so it can be used to move user back to where they were before clicking.
        const ScrollNode = containerRef.current.parentNode.parentNode.parentNode.parentNode
        window.sessionStorage.setItem('scrollPosition', ScrollNode.scrollTop)
    }

    // when user returns, return to position that was saved on sessionStorage
    useEffect(() => {

        // containerRef not loaded yet
        if (!containerRef.current) return;

        const ScrollNode = containerRef.current.parentNode.parentNode.parentNode.parentNode

        const scrollPos = window.sessionStorage.getItem('scrollPosition')
  
        // There is no scrollPos in sessionStorage
        if (!scrollPos) return;
  
        // Scroll that should be is not possible because there is not enough height in the element to suport it
        if (scrollPos > ScrollNode.scrollHeight) return;
        
        // It is possible to move scrollBar
        if (scrollPos) ScrollNode.scrollTop = scrollPos
        
      }, [containerRef])

    return (
        <>
            {movieList.length > 0 && movieList.map((movie:any, index:number) => (
            <div key={`${movie.id}/${index}`} className="border-2 border-black h-80 hover:opacity-50" onClick={handleClick} ref={containerRef}>
                <MovieCard movie={movie}/>
            </div>
            ))}
        </>
    )
}

export default MovieList