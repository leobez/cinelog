import { useEffect, useState } from "react"

const API_KEY = import.meta.env.VITE_API_KEY

const TOP_RATED_URL = import.meta.env.VITE_TOP_RATED_MOVIES_URL
const POPULAR_URL = import.meta.env.VITE_POPULAR_MOVIES_URL
const UPCOMING_URL = import.meta.env.VITE_UPCOMING_MOVIES_URL


export const useGetMovies = (category:string) => {

    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')
    const [list, setList] = useState<any[]>([])

    const createURL = ():string => {

        let url:string = ''

        if (category === 'top_rated') {
            url = `${TOP_RATED_URL}?api_key=${API_KEY}`
        }
        if (category === 'popular') {
            url = `${POPULAR_URL}?api_key=${API_KEY}`
        }
        if (category === 'upcoming') {
            url = `${UPCOMING_URL}?api_key=${API_KEY}`
        }

        return url
    }

    useEffect(() => {

        const url = createURL()

        const fetchMovies = async() => {
            try {
                const result = await fetch(url)
                const data = await result.json()
                setList(data.results)
            } catch (error) {
                console.log(error)
            }
        }
        
        fetchMovies()

    }, [category])


    return {
        loading, 
        error,
        list
    }
}