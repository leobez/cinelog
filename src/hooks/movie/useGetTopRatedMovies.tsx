import { useEffect, useState } from "react"

const API_KEY = import.meta.env.VITE_API_KEY
const TOP_RATED_URL = import.meta.env.VITE_TOP_RATED_MOVIES_URL
const url = `${TOP_RATED_URL}?api_key=${API_KEY}`

export const useGetTopRatedMovies = () => {

    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')
    const [list, setList] = useState<any[]>([])

    useEffect(() => {

        const fetchTopRatedMovies = async() => {
            try {

                const result = await fetch(url)
                const data = await result.json()
                setList(data.results)

            } catch (error) {
                console.log(error)
            }
        }

        fetchTopRatedMovies()

    }, [url])


    return {
        loading, 
        error,
        list
    }
}