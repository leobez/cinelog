import { createContext, useEffect, useState } from "react";

export type MovieContextType = {
    GET_movies_toprated:(page:number)=>Promise<any[]>;
    GET_movies_popular:(page:number)=>Promise<any[]>;
    GET_movies_upcoming:(page:number)=>Promise<any[]>;
    GET_movies_byquery:(page:number, query:string)=>Promise<any[]>;
    /*GET_movies_bygenres:(genres:number[])=>Promise<any[]>;
    GET_movies_similar:(id:number)=>Promise<any[]>;
    GET_movie_byid:(id:number)=>Promise<any>;
    GET_movie_randombygenres:(genres:any[])=>Promise<number>; */
    loading:boolean;
    error:string|null
}

const MovieContext = createContext<MovieContextType|null>(null)

export const MovieListContextProvider = ({children}:any) => {

    const URL_TOPRATED = import.meta.env.VITE_TOP_RATED_MOVIES_URL
    const URL_POPULAR = import.meta.env.VITE_POPULAR_MOVIES_URL
    const URL_UPCOMING = import.meta.env.VITE_UPCOMING_MOVIES_URL
    const URL_BYQUERY = import.meta.env.VITE_QUERY
    const URL_SIMILAR = import.meta.env.VITE_SIMILAR
    const URL_BY_GENRES = import.meta.env.VITE_DISCOVER
    const URL_BYID = import.meta.env.VITE_FIND_BY_ID
    const API_KEY = import.meta.env.VITE_API_KEY

    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string|null>(null)

    const GET_movies_toprated = async(page:number):Promise<any[]> => {
        
        try {

            setLoading(true)
            const URL = `${URL_TOPRATED}?api_key=${API_KEY}&page=${page}`
            const RESULT = await fetch(URL)
            const DATA = await RESULT.json()
            console.log('DATA RECEIVED: ', DATA)

            // Validate data
            if (DATA.results.length === 0) {
                setLoading(false)
                return [];
            }
            
            // Filtering only for movies that have a poster to show. Add more filter later on.
            let filteredData:any = []
            for (let movie of DATA.results) {
                if (movie.poster_path) {
                    filteredData.push(movie)
                }
            }

            console.log('filteredData: ', filteredData)

            return filteredData

        } catch (error) {
            console.log(error)
            return [];
        }

    }

    const GET_movies_popular = async(page:number):Promise<any[]> => {
        
        try {

            setLoading(true)
            const URL = `${URL_POPULAR}?api_key=${API_KEY}&page=${page}`
            const RESULT = await fetch(URL)
            const DATA = await RESULT.json()
            console.log('DATA RECEIVED: ', DATA)

            // Validate data
            if (DATA.results.length === 0) {
                setLoading(false)
                return [];
            }
            
            // Filtering only for movies that have a poster to show. Add more filter later on.
            let filteredData:any = []
            for (let movie of DATA.results) {
                if (movie.poster_path) {
                    filteredData.push(movie)
                }
            }

            console.log('filteredData: ', filteredData)

            return filteredData

        } catch (error) {
            console.log(error)
            return [];
        }

    }

    const GET_movies_upcoming = async(page:number):Promise<any[]> => {
        
        try {

            setLoading(true)
            const URL = `${URL_UPCOMING}?api_key=${API_KEY}&page=${page}`
            const RESULT = await fetch(URL)
            const DATA = await RESULT.json()
            console.log('DATA RECEIVED: ', DATA)

            // Validate data
            if (DATA.results.length === 0) {
                setLoading(false)
                return [];
            }
            
            // Filtering only for movies that have a poster to show. Add more filter later on.
            let filteredData:any = []
            for (let movie of DATA.results) {
                if (movie.poster_path) {
                    filteredData.push(movie)
                }
            }

            console.log('filteredData: ', filteredData)

            return filteredData

        } catch (error) {
            console.log(error)
            return [];
        }

    }
    
    const GET_movies_byquery = async(page:number, query:string):Promise<any[]> => {
        
        try {

            setLoading(true)
            const URL = `${URL_BYQUERY}/movie?query=${query}&api_key=${API_KEY}&page=${page}`
            const RESULT = await fetch(URL)
            const DATA = await RESULT.json()
            console.log('DATA RECEIVED: ', DATA)

            // Validate data
            if (DATA.results.length === 0) {
                setLoading(false)
                return [];
            }
            
            // Filtering only for movies that have a poster to show. Add more filter later on.
            let filteredData:any = []
            for (let movie of DATA.results) {
                if (movie.poster_path) {
                    filteredData.push(movie)
                }
            }

            console.log('filteredData: ', filteredData)

            return filteredData

        } catch (error) {
            console.log(error)
            return [];
        }

    }

    return (
        <MovieContext.Provider value={
                {
                    GET_movies_toprated,
                    GET_movies_popular,
                    GET_movies_upcoming,
                    GET_movies_byquery,
                    loading,
                    error
                }
            }>

            {children}

        </MovieContext.Provider>
    )

}

export default MovieContext