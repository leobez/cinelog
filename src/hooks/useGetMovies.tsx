import { useContext, useEffect, useState } from "react"
import MovieListContext, { MovieListContextType } from "../context/MovieListContext"

export const useGetMovies = (category:string) => {

    /* Has to use these when updating the list of movies the user is seeing */
    const {movieList, addToMovieList, resetMovieList, page} = useContext(MovieListContext) as MovieListContextType

    const [loading, setLoading] = useState<boolean>(false)
    const [hasMore, setHasMore] = useState<boolean>(true)
    const [shouldFetch, setShouldFetch] = useState<boolean>(true)

    useEffect(() => {

        // Get top rated movies
        const getTopRatedMovies = async() => {

            try {
                setLoading(true)
                const URL = `${import.meta.env.VITE_TOP_RATED_MOVIES_URL}?api_key=${import.meta.env.VITE_API_KEY}&page=${page}`
                const result = await fetch(URL)
                const data = await result.json()
                console.log(data)

                // Last page reached
                if (data.results.length === 0) {
                    setLoading(false)
                    setHasMore(false)
                    return;
                }
                
                addToMovieList(data.results)

                setLoading(false)

            } catch (error) {
                setLoading(false)
                console.log(error)
            }
        }


        // Get popular movies
        const getPopularMovies = () => {

        }


        // Get upcoming movies
        const getUpcomingMovies = () => {

        }   

        if (category === 'top_rated') getTopRatedMovies()


    }, [category, page])

    return {
        loading, 
        hasMore
    }
}