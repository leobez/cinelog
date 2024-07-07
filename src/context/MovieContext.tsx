import { createContext, useEffect, useState } from "react";

export type MovieContextType = {

    category:string;
    updateCategory:(newCategory:string) => void;
    consoleCategory:() => void;

    list: any[]
    updateList:(newList:any[]) => void;
    appendToList:(listToAppend:any[]) => void;
    resetList:() => void;
    consoleList:() => void

    movieById:any
    getMovieById:(id:number)=>Promise<void>;
    resetMovieById:()=>void;

    movieByGenres:any[];
    getMovieByGenres:(lang:string, genres:number[])=>Promise<void>;
    resetMovieByGenres:()=>void;

    page: number;
    updatePage:() => void;
    resetPage:() => void;
    consolePage:() => void;

    loading: boolean;
    hasMore: boolean;
}

const MovieContext = createContext<MovieContextType|null>(null)

export const MovieListContextProvider = ({children}:any) => {

    // Attributes
    const [category, setCategory] = useState<string>('top_rated')
    const [list, setList] = useState<any[]>([])
    const [movieById, setMovieById] = useState<any>(null)
    const [movieByGenres, setMovieByGenres] = useState<any[]>([])
    const [page, setPage] = useState<number>(1)
    const [loading, setLoading] = useState<boolean>(false)
    const [hasMore, setHasMore] = useState<boolean>(true)

    // METHODS

    // Category methods
    const updateCategory = (newCategory:string):void => {
        const validCategories = ['top_rated', 'popular', 'upcoming']
        if (validCategories.includes(newCategory)) {
            // Only reset list and page when user actually changes categories.
            if (category !== newCategory) {
                resetList()
                resetPage()
            }
            setCategory(newCategory)
        } else {
            console.log("Invalid Category.")
        }
    } 
    const consoleCategory = ():void => {
        console.log(category)
    }


    // List methods
    const updateList = (newList:any[]):void => {
        setList(newList)
    }
    const appendToList = (listToAppend:any[]):void => {
        setList((prev) => [...prev, ...listToAppend])
    }
    const resetList = ():void => {
        setList([])
    }
    const consoleList = ():void => {
        console.log(list)
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
                
                if (list.length === 0) {
                    // Inserts into array for the first time.
                    updateList(data.results)
                } else {
                    // Inserts into array when its not first time.
                    appendToList(data.results)
                }
    
                setLoading(false)
    
            } catch (error) {
                setLoading(false)
                console.log(error)
            }
    
        }     

        getMovies()

    }, [category, page])


    // MovieById methods
    const getMovieById = async(id:number):Promise<void> => {
        try {
            const URL = `${import.meta.env.VITE_FIND_BY_ID}/${id}?api_key=${import.meta.env.VITE_API_KEY}`
            setLoading(true)
            const result = await fetch(URL)
            const data = await result.json()
            console.log(data)
            setMovieById(data)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }
    const resetMovieById = ():void => {
        setMovieById(null)
    }

    // MovieByGenres methods
    const getMovieByGenres = async(lang:string, genres:number[]):Promise<void> => {
        try {
            const genreIds = genres.map((genre:any) => genre.id)
            const URL = `${import.meta.env.VITE_DISCOVER}/movie?api_key=${import.meta.env.VITE_API_KEY}&language=${lang}&sort_by=release_date.desc&page=1&with_genres=${genreIds.join(',')}`
            setLoading(true)
            const result = await fetch(URL)
            const data = await result.json()
            console.log('data.results: ', data.results)
            
            let filteredData:any = []

            for (let movie of data.results) {
                if (movie.poster_path) {
                    filteredData.push(movie)
                }
            }

            console.log('filteredData: ', filteredData)
            setMovieByGenres(filteredData)
            setLoading(false)

        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }
    const resetMovieByGenres = ():void => {
        setMovieByGenres([])
    }

    // Page methods
    const updatePage = ():void => {
        setPage(prev => prev+1)
    }
    const resetPage = ():void => {
        setPage(1)
    }
    const consolePage = ():void => {
        console.log(page)
    }


    return (
        <MovieContext.Provider value={
                {
                    category, updateCategory, consoleCategory,
                    list, updateList, appendToList, resetList, consoleList,
                    movieById, getMovieById, resetMovieById,
                    movieByGenres, getMovieByGenres, resetMovieByGenres,
                    page, updatePage, resetPage, consolePage,
                    loading, hasMore
                }
            }>

            {children}

        </MovieContext.Provider>
    )

}

export default MovieContext