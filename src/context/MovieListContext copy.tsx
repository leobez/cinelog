import { createContext, useEffect, useState } from "react";

export type MovieListContextType = {

    category:string;
    updateCategory:(newCategory:string) => void;
    consoleCategory:() => void;

    list: any[]
    updateList:(newList:any[]) => void;
    appendToList:(listToAppend:any[]) => void;
    resetList:() => void;
    consoleList:() => void

    page: number;
    updatePage:() => void;
    resetPage:() => void;
    consolePage:() => void;

    loading: boolean;
    hasMore: boolean;
    resetPage:() => void;
    updatePage:() => void;
    resetList:() => void;
    updateCategory: (cat:string) => void;
    getTopRatedMovies:(isInitial?:boolean) => void;
    getPopularMovies:(isInitial?:boolean) => void;
    getUpcomingMovies:(isInitial?:boolean) => void;
}

const MovieListContext = createContext<MovieListContextType|null>(null)

export const MovieListContextProvider = ({children}:any) => {

    const [category, setCategory] = useState<string>('top_rated')
    useEffect(() => (console.log('current category: ', category)), [category])

    const [movieList, setMovieList] = useState<any[]>([])
    useEffect(() => (console.log('current movie list: ', movieList)), [movieList])

    const [page, setPage] = useState<number>(1)
    useEffect(() => (console.log('page: ', page)), [page])

    const [loading, setLoading] = useState<boolean>(false)
    const [hasMore, setHasMore] = useState<boolean>(true)

    // When user scrolls to bottom, so it needes to add more data
    const resetPage = ():void => {
        setPage(1)
    }
    const resetList = ():void => {
        setMovieList([])
    }
    const updateCategory = (cat:string):void => {
        setCategory(cat)
    }
    const updatePage = ():void => {
        setPage(prev => prev+1)
    }

    useEffect(() => {

        const getMovies = async():Promise<void> => {

            let address = ''

            if (category === 'top_rated') address = import.meta.env.VITE_TOP_RATED_MOVIES_URL
            else if (category === 'popular') address = import.meta.env.VITE_POPULAR_MOVIES_URL
            else if (category === 'upcoming') address = import.meta.env.VITE_UPCOMING_MOVIES_URL
            else return;
    
            try {

                setLoading(true)
                const URL = `${address}?api_key=${import.meta.env.VITE_API_KEY}&page=${page}`
                const result = await fetch(URL)
                const data = await result.json()
                console.log('data received: ', data)
    
                // Last page reached
                if (data.results.length === 0) {
                    setLoading(false)
                    setHasMore(false)
                    return;
                }
                
                // Inserts into array for the first time.
                if (movieList.length === 0) {
                    setMovieList(data.results)
                } else {
                    // Inserts into array when its not first time.
                    setMovieList(prev => [...prev, ...data.results])
                }
    
                setLoading(false)
    
            } catch (error) {
                setLoading(false)
                console.log(error)
            }
    
        }     

        getMovies()

    }, [category, page])

    
    const getTopRatedMovies = async(isInitial:boolean=false):Promise<void> => {

        // Only permits initial data to be requested when there is no data on movieList array yet and the page that is requesting it is different from (...)
        // Important to stop useEffect from making unnecessary API calls when a component is re-rendered.
        if (isInitial && movieList.length !== 0) return;

        try {
            setLoading(true)
            const URL = `${import.meta.env.VITE_TOP_RATED_MOVIES_URL}?api_key=${import.meta.env.VITE_API_KEY}&page=${page}`
            const result = await fetch(URL)
            const data = await result.json()
            console.log('data received: ', data)

            // Last page reached
            if (data.results.length === 0) {
                setLoading(false)
                setHasMore(false)
                return;
            }
            
            // Inserts into array for the first time.
            if (movieList.length === 0) {
                setMovieList(data.results)
            } else {
                // Inserts into array when its not first time.
                setMovieList(prev => [...prev, ...data.results])
            }
 
            // Updates page for subsequent calls
            setPage((prev) => prev+1)

            setLoading(false)

        } catch (error) {
            setLoading(false)
            console.log(error)
        }

    }

    const getPopularMovies = async(isInitial:boolean=false):Promise<void> => {

        // Only permits initial data to be requested when there is no data on movieList array yet.
        // Important to stop useEffect from making unnecessary API calls when a component is re-rendered.
        if (isInitial && movieList.length !== 0) return;

        try {
            setLoading(true)
            const URL = `${import.meta.env.VITE_POPULAR_MOVIES_URL}?api_key=${import.meta.env.VITE_API_KEY}&page=${page}`
            const result = await fetch(URL)
            const data = await result.json()
            console.log('data received: ', data)

            // Last page reached
            if (data.results.length === 0) {
                setLoading(false)
                setHasMore(false)
                return;
            }
            
            // Inserts into array for the first time.
            if (movieList.length === 0) {
                setMovieList(data.results)
            } else {
                // Inserts into array when its not first time.
                setMovieList(prev => [...prev, ...data.results])
            }

            // Updates page for subsequent calls
            setPage((prev) => prev+1)

            setLoading(false)

        } catch (error) {
            setLoading(false)
            console.log(error)
        }

    }

    const getUpcomingMovies = async(isInitial:boolean=false):Promise<void> => {

        // Only permits initial data to be requested when there is no data on movieList array yet.
        // Important to stop useEffect from making unnecessary API calls when a component is re-rendered.
        if (isInitial && movieList.length !== 0) return;

        try {
            setLoading(true)
            const URL = `${import.meta.env.VITE_UPCOMING_MOVIES_URL}?api_key=${import.meta.env.VITE_API_KEY}&page=${page}`
            const result = await fetch(URL)
            const data = await result.json()
            console.log('data received: ', data)

            // Last page reached
            if (data.results.length === 0) {
                setLoading(false)
                setHasMore(false)
                return;
            }
            
            // Inserts into array for the first time.
            if (movieList.length === 0) {
                setMovieList(data.results)
            } else {
                // Inserts into array when its not first time.
                setMovieList(prev => [...prev, ...data.results])
            }

            // Updates page for subsequent calls
            setPage((prev) => prev+1)

            setLoading(false)

        } catch (error) {
            setLoading(false)
            console.log(error)
        }

    }


    return (
        <MovieListContext.Provider value={{category, movieList, page, loading, hasMore, resetPage, updatePage, resetList, updateCategory, getTopRatedMovies, getPopularMovies, getUpcomingMovies}}>
            {children}
        </MovieListContext.Provider>
    )

}

export default MovieListContext