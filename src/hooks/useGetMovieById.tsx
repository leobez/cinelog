import { useEffect, useState } from "react"
import { getMovieUsefulInfo } from "../utils/getMovieUsefulInfo"

const API_KEY = import.meta.env.VITE_API_KEY
const FIND_BY_ID_URL = import.meta.env.VITE_FIND_BY_ID

export const useGetMovieById = (id:number|undefined) => {

    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')
    const [movie, setMovie] = useState<any>()

    const url = `${FIND_BY_ID_URL}/${id}?api_key=${API_KEY}`

    useEffect(() => {

        const fetchMovieById = async() => {
            try {

                setLoading(true)
                const result = await fetch(url)
                const data = await result.json()

                const actualData = getMovieUsefulInfo(data, true)

                setMovie(actualData)
                setLoading(false)

            } catch (error) {
                setLoading(false)
                console.log(error)
            }
        }

        fetchMovieById()

    }, [url, id])


    return {
        loading, 
        error,
        movie
    }
}