import { useContext, useEffect, useRef } from "react"
import MovieCard from "./MovieCard"
import MovieContext, { MovieContextType } from "../context/MovieContext";

type Props = {
    movieList: any[];
}

const MovieList = ({movieList}: Props) => { 

    const containerRef:any = useRef<HTMLDivElement>()

    const {
        scrollPos,
        updateScrollPos,
    } = useContext(MovieContext) as MovieContextType

    const handleClick = ():void => {
        // Save container current position, so it can be used to move user back to where they were before clicking.
        const ScrollNode = containerRef.current.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode // lmao
        updateScrollPos(Number(ScrollNode.scrollTop))
    }   

    // when user returns to this component, put him into the position that was saved on sessionStorage
    useEffect(() => {

        // containerRef not loaded yet
        if (!containerRef.current) return;
        const ScrollNode = containerRef.current.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
        
        // It is possible to move scrollBar
        console.log('moving scroll to: ', scrollPos)
        ScrollNode.scrollTop = scrollPos
        
    }, [containerRef])

    return (
        <>
            <div className="flex items-center justify-center">
                <div className="relative gap-y-[1px] flex flex-wrap w-11/12">
                    {movieList.length > 0 && movieList.map((movie:any, index:number) => (
                        <div 
                            key={`${movie.id}/${index}`} 
                            className="border border-white w-1/2 md:w-1/3 lg:w-1/4 h-44 md:h-56"
                            onClick={handleClick} 
                            ref={containerRef}
                        >

                            <MovieCard movie={movie}/>

                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default MovieList