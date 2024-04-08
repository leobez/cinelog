import { useEffect } from "react"

const API_KEY = import.meta.env.VITE_API_KEY
const ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN

export const useGetGenres = () => {

    const url = `${import.meta.env.VITE_GENRE_URL}?api_key=${API_KEY}`

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${ACCESS_TOKEN}`
        }
    }




    return {

    }
}