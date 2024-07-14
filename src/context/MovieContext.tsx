import { createContext, useEffect, useState } from "react";

export type MovieContextType = {
    GET_movies_toprated:()=>Promise<void>;
    GET_movies_popular:()=>Promise<void>;
    GET_movies_upcoming:()=>Promise<void>;
    GET_movies_byquery:(query:string)=>Promise<void>;
    GET_movies_bygenres:(genres:number[])=>Promise<void>;
    GET_movies_similar:(id:number)=>Promise<any>; // Returns list of movies                  
    GET_movie_byid:(id:number)=>Promise<any>; // Returns object of movie                   
    GET_movie_randombygenres:(genres:number[])=>Promise<number>; // Returns random number id
    updateWarning:(message:string)=>void;
    updateError:(message:string)=>void;
    updateLoading:()=>void;
    updatePage:()=>void;
    updateCategory:(newCategory:string)=>void;
    warning:string|null;
    error:string|null;
    loading:boolean;
    page:number;
    list:any[];
    run:boolean;
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

    const [loading, setLoading]     = useState<boolean>(false)
    const [error, setError]         = useState<string|null>(null)
    const [warning, setWarning]     = useState<string|null>(null)
    const [page, setPage]           = useState<number>(0)
    const [category, setCategory]   = useState<string>('')
    const [list, setList]           = useState<any[]>([])
    const [run, setRun]             = useState<boolean>(false)

    //useEffect(() => {console.log('mudou page: ', page)}, [page])

    useEffect(() => {

        //console.log('mudou categoria. current: ', category)

        setList([])
        setPage(1)

        //console.log('em teoria 1')

        // Triggers function that gets data. Always triggers when category is changed, which always means first call
        setRun((prev:boolean) => !prev) 

    }, [category])

    // Used for when selecting random movie
    const sleep = (ms:number) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Always used when making API calls
    const resetStates = ():void => {
        setLoading(false)
        setError(null)
        setWarning(null)
    }

    const GET_movies_toprated = async():Promise<any> => {
        
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
            // Inserting into list for first time
            if (list.length === 0) {
                setList(filteredData)
            } else {
                setList(prev => [...prev, ...filteredData])
            }

        } catch (error) {
            setLoading(false)
            setError("Something went wrong")
            console.log(error)
            return;
        }

    }

    const GET_movies_popular = async():Promise<any> => {

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
            // Inserting into list for first time
            if (list.length === 0) {
                setList(filteredData)
            } else {
                setList(prev => [...prev, ...filteredData])
            }

        } catch (error) {
            setLoading(false)
            console.log(error)
            setError("Something went wrong")
            return;
        }

    }

    const GET_movies_upcoming = async():Promise<any> => {

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
            // Inserting into list for first time
            if (list.length === 0) {
                setList(filteredData)
            } else {
                setList(prev => [...prev, ...filteredData])
            }

        } catch (error) {
            setLoading(false)
            console.log(error)
            setError("Something went wrong")
            return;
        }

    }

    const GET_movies_byquery = async(query:string):Promise<any> => {

        resetStates()

        try {

            setLoading(true)

            // Validate query
            if (!query || query.length === 0) {
                console.log('invalid query')
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
            // Inserting into list for first time
            if (list.length === 0) {
                setList(filteredData)
            } else {
                setList(prev => [...prev, ...filteredData])
            }

        } catch (error) {
            setLoading(false)
            console.log(error)
            setError("Something went wrong")
            return;
        }

    }

    const GET_movies_bygenres = async(genres:number[]):Promise<any> => {

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

            setLoading(false)
            // Inserting into list for first time
            if (list.length === 0) {
                setList(filteredData)
            } else {
                setList(prev => [...prev, ...filteredData])
            }

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

                // Filtering only for movies that have a poster to show.
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
            
            console.log('MOVIE POOL: ', moviePool)

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

    const updateWarning = (message:string):void => {
        setWarning(message)
    }

    const updateError = (message:string):void => {
        setError(message)
    }
    
    const updateLoading = ():void => {
        setLoading((prev:boolean)=>!prev)
    }

    const updatePage = ():void=>{
        setPage((prev)=>prev+1)
        setRun((prev:boolean) => !prev)
    }

    const updateCategory = (newCategory:string):void=>{
        setCategory(newCategory)
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
                    updateWarning,
                    updateError,
                    updateLoading,
                    updatePage,
                    updateCategory,
                
                    warning,
                    error,
                    loading,
                    page,
                    list,
                    run
                }
            }>

            {children}

        </MovieContext.Provider>
    )

}

export default MovieContext