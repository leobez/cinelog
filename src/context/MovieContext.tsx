import { createContext, useState } from "react";

export type MovieContextType = {
    GET_movies_toprated:(page:number)=>Promise<any>;
    GET_movies_popular:(page:number)=>Promise<any>;
    GET_movies_upcoming:(page:number)=>Promise<any>;
    GET_movies_byquery:(page:number, query:string)=>Promise<any>;
    GET_movies_bygenres:(page:number, genres:number[])=>Promise<any>;
    GET_movies_similar:(id:number)=>Promise<any>;
    GET_movie_byid:(id:number)=>Promise<any>;
    GET_movie_randombygenres:(genres:number[])=>Promise<number>; 
    loading:boolean;
    error:string|null;
    warning:string|null;
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
    const [warning, setWarning] = useState<string|null>(null)

    const sleep = (ms:number) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const resetStates = ():void => {
        setLoading(false)
        setError(null)
        setWarning(null)
    }

    const GET_movies_toprated = async(page:number):Promise<any> => {
        
        resetStates()

        try {

            setLoading(true)
            const URL = `${URL_TOPRATED}?api_key=${API_KEY}&page=${page}`
            const RESULT = await fetch(URL)
            const DATA = await RESULT.json()
            console.log('DATA RECEIVED: ', DATA)

            // Validate data
            if (DATA.results.length === 0) {
                setLoading(false)
                setWarning('No data')
                return;
            }
            
            // Filtering only for movies that have a poster to show. 
            let filteredData:any = []
            for (let movie of DATA.results) {
                if (movie.poster_path && movie.overview) {
                    filteredData.push(movie)
                }
            }

            setLoading(false)
            console.log('filteredData: ', filteredData)
            return filteredData

        } catch (error) {
            setLoading(false)
            setError("Something went wrong")
            console.log(error)
            return;
        }

    }

    const GET_movies_popular = async(page:number):Promise<any> => {

        resetStates()

        try {

            setLoading(true)
            const URL = `${URL_POPULAR}?api_key=${API_KEY}&page=${page}`
            const RESULT = await fetch(URL)
            const DATA = await RESULT.json()
            console.log('DATA RECEIVED: ', DATA)

            // Validate data
            if (DATA.results.length === 0) {
                setLoading(false)
                setWarning('No data')
                return;
            }
            
            // Filtering only for movies that have a poster to show.
            let filteredData:any = []
            for (let movie of DATA.results) {
                if (movie.poster_path) {
                    filteredData.push(movie)
                }
            }

            setLoading(false)
            console.log('filteredData: ', filteredData)

            return filteredData

        } catch (error) {
            setLoading(false)
            console.log(error)
            setError("Something went wrong")
            return;
        }

    }

    const GET_movies_upcoming = async(page:number):Promise<any> => {

        resetStates()

        try {

            setLoading(true)
            const URL = `${URL_UPCOMING}?api_key=${API_KEY}&page=${page}`
            const RESULT = await fetch(URL)
            const DATA = await RESULT.json()
            console.log('DATA RECEIVED: ', DATA)

            // Validate data
            if (DATA.results.length === 0) {
                setLoading(false)
                setWarning('No data')
                return;
            }
            
            // Filtering only for movies that have a poster to show.
            let filteredData:any = []
            for (let movie of DATA.results) {
                if (movie.poster_path) {
                    filteredData.push(movie)
                }
            }

            setLoading(false)
            console.log('filteredData: ', filteredData)

            return filteredData

        } catch (error) {
            setLoading(false)
            console.log(error)
            setError("Something went wrong")
            return;
        }

    }
    
    const GET_movies_byquery = async(page:number, query:string):Promise<any> => {

        resetStates()

        try {

            setLoading(true)
            
            // Validate query
            if (!query || query.length === 0 ) {
                setLoading(false)
                setWarning('Invalid query')
                return;
            }
            if (query.length > 40) {
                setLoading(false)
                setWarning('Max. query length is 40')
                return;
            }

            const URL = `${URL_BYQUERY}/movie?query=${query}&api_key=${API_KEY}&page=${page}`
            const RESULT = await fetch(URL)
            const DATA = await RESULT.json()
            console.log('DATA RECEIVED: ', DATA)

            // Validate data
            if (DATA.results.length === 0) {
                setLoading(false)
                setWarning('No data')
                return;
            }
            
            // Filtering only for movies that have a poster to show.
            let filteredData:any = []
            for (let movie of DATA.results) {
                if (movie.poster_path) {
                    filteredData.push(movie)
                }
            }

            setLoading(false)
            console.log('filteredData: ', filteredData)

            return filteredData

        } catch (error) {
            setLoading(false)
            console.log(error)
            setError("Something went wrong")
            return;
        }

    }

    const GET_movies_bygenres = async(page:number, genres:number[]):Promise<any> => {

        resetStates()

        try {

            setLoading(true)

            // Validate query
            if (!genres || (genres.length === 1 && genres[0]===0)) {
                setLoading(false)
                setWarning('Invalid genres')
                return;
            }

            const URL = `${URL_BY_GENRES}/movie?api_key=${API_KEY}&with_genres=${genres?.join(',')}&page=${page}`
            const RESULT = await fetch(URL)
            const DATA = await RESULT.json()
            console.log('DATA RECEIVED: ', DATA)

            // Validate data
            if (DATA.results.length === 0) {
                setLoading(false)
                setWarning('No data')
                return;
            }
            
            // Filtering only for movies that have a poster to show.
            let filteredData:any = []
            for (let movie of DATA.results) {
                if (movie.poster_path) {
                    filteredData.push(movie)
                }
            }

            console.log('filteredData: ', filteredData)
            setLoading(false)

            return filteredData

        } catch (error) {
            setLoading(false)
            console.log(error)
            setError("Something went wrong")
            return;
        }

    }

    const GET_movies_similar = async(id:number):Promise<any> => {

        resetStates()

        try {

            setLoading(true)
            const URL = `${URL_SIMILAR}/${id}/similar?api_key=${API_KEY}`
            const RESULT = await fetch(URL)
            const DATA = await RESULT.json()
            console.log('DATA RECEIVED: ', DATA)

            // Validate data
            if (DATA.results.length === 0) {
                setLoading(false)
                return;
            }
            
            // Filtering only for movies that have a poster to show.
            let filteredData:any = []
            for (let movie of DATA.results) {
                if (movie.poster_path) {
                    filteredData.push(movie)
                }
            }

            console.log('filteredData: ', filteredData)
            setLoading(false)

            return filteredData

        } catch (error) {
            setLoading(false)
            console.log(error)
            setError("Something went wrong")
            return;
        }

    }

    const GET_movie_byid = async(id:number):Promise<any> => {

        resetStates()

        try {

            setLoading(true)
            const URL = `${URL_BYID}/${id}?api_key=${API_KEY}`
            const RESULT = await fetch(URL)
            const DATA = await RESULT.json()
            console.log('DATA RECEIVED: ', DATA)

            // Validate data
            if (!DATA) {
                setLoading(false)
                setWarning('No data')
                return;
            }

            setLoading(false)
            return DATA

        } catch (error) {
            setLoading(false)
            console.log(error)
            setError("Something went wrong")
            return;
        }

    }

    const GET_movie_randombygenres = async(genres:number[]):Promise<any> => {

        resetStates()

        try {

            let moviePool:any[] = []

            setLoading(true)

            for (let page=1; page<=5; page++) {

                const URL = `${URL_BY_GENRES}/movie?api_key=${API_KEY}&with_genres=${genres?.join(',')}&page=${page}`
                const RESULT = await fetch(URL)
                console.log('RESULT: ', RESULT)
                const DATA = await RESULT.json()

                // Last page reached
                if (DATA.results.length === 0) {
                    break;
                }

                // Filtering only for movies that have a poster to show. Later filter more information.
                let filteredData:any = []
                for (let movie of DATA.results) {
                    if (movie.poster_path) {
                        filteredData.push(movie)
                    }
                }

                for (let movie of filteredData) {
                    moviePool.push(movie)
                }
            }

            if (moviePool.length === 0) {
                setLoading(false)
                setWarning('No data')
                return;
            }

            const max = (moviePool.length-1)
            const min = 0
            const randomNum = Math.floor(Math.random() * (max - min + 1) + min)
            await sleep(2000);

            setLoading(false)

            return moviePool[randomNum].id

        } catch {
            setLoading(false)
            console.log(error)
            setError("Something went wrong")
            return;
        }
    }

    return (
        <MovieContext.Provider value={
                {
                    GET_movies_toprated,
                    GET_movies_popular,
                    GET_movies_upcoming,
                    GET_movies_byquery,
                    GET_movies_bygenres,
                    GET_movies_similar,
                    GET_movie_byid,
                    GET_movie_randombygenres,
                    loading,
                    error,
                    warning
                }
            }>

            {children}

        </MovieContext.Provider>
    )

}

export default MovieContext