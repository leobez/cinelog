import { useContext, useEffect } from "react"
import MovieContext, { MovieContextType } from "../context/MovieContext"
import { useSearchParams } from "react-router-dom"
import MovieList from "../components/MovieList"

const ByGenre = () => {

    const {updateGenres, genres, updateListCategory, list} = useContext(MovieContext) as MovieContextType

    const [params, setParams] = useSearchParams()

    useEffect(() => {
        const genresIds = params.get('genres')?.split(',').map((value:string)=>Number(value))
        console.log(genresIds)
        updateGenres(genresIds)
    }, [params])

    useEffect(() => {
        updateListCategory('by_genre')
    }, [genres])

    return (
        <>
            {list.length > 0 &&
                <MovieList movieList={list}/>
            }
            {/* else ... */}
        </>
    )
}

export default ByGenre