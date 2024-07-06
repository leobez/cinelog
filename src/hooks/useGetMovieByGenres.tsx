import { useState } from "react"

const API_KEY = import.meta.env.VITE_API_KEY
const DISCOVER = import.meta.env.VITE_DISCOVER

/* https://api.themoviedb.org/3/discover/movie?api_key=THE_KEY&language=en-US&sort_by=release_date.desc&page=1&with_genres=35,53,27 */

export const useGetMovieByGenres = () => {

    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')


    const fetchMoviesByGenres = async(language:string, genres:number[]) => {

        const genreIds = genres.map((genre:any) => genre.id)
        const url = `${DISCOVER}/movie?api_key=${API_KEY}&language=${language}&sort_by=release_date.desc&page=1&with_genres=${genreIds.join(',')}`

        console.log(url)

        try {

            setLoading(true)
            const result = await fetch(url)
            const data = await result.json()
            setLoading(false)
            return data.results

        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    return {
        loading, 
        error,
        fetchMoviesByGenres
    }
}