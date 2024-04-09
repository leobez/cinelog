import { useEffect, useState } from "react"

const API_KEY = import.meta.env.VITE_API_KEY
const FIND_BY_ID_URL = import.meta.env.VITE_FINFD_BY_ID

export const useGetMovieById = (id:number) => {

    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')
    const [movie, setMovie] = useState<any>()

    const url = `${FIND_BY_ID_URL}/${id}?api_key=${API_KEY}`

    useEffect(() => {

        const fetchMovieById = async() => {
            try {

                const result = await fetch(url)
                const data = await result.json()
                setMovie(data.results)

            } catch (error) {
                console.log(error)
            }
        }

        fetchMovieById()

    }, [url])


    return {
        loading, 
        error,
        movie
    }
}