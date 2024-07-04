import MovieCard from "./MovieCard"

type Props = {
    movieList: any[]
    category: string
}

const MovieList = ({movieList, category}: Props) => {

    const handleClick = ():void => {
        // Save container current position, so it can be used to move user back to where they were before clicking.
        window.sessionStorage.setItem('scrollPosition', containerRef.current.scrollTop)
    }

    return (
        <>
            {movieList.length > 0 && movieList.map((movie:any, index:number) => (
            <div key={`${movie.id}/${index}`} className="border-2 border-black h-80 hover:opacity-50" onClick={handleClick}>
                <MovieCard movie={movie}/>
            </div>
            ))}
        </>
    )
}

export default MovieList