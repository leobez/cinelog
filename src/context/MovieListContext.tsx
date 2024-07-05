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
}

const MovieListContext = createContext<MovieListContextType|null>(null)

export const MovieListContextProvider = ({children}:any) => {

    // Attributes
    const [category, setCategory] = useState<string>('top_rated')
    const [list, setList] = useState<any[]>([])
    const [page, setPage] = useState<number>(1)
    const [loading, setLoading] = useState<boolean>(false)
    const [hasMore, setHasMore] = useState<boolean>(true)

    // Methods
    // Category methods
    const updateCategory = (newCategory:string):void => {
        const validCategories = ['top_rated', 'popular', 'upcoming']
        if (validCategories.includes(newCategory)) {
            resetList()
            resetPage()
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

    return (
        <MovieListContext.Provider value={
                {
                    category, updateCategory, consoleCategory,
                    list, updateList, appendToList, resetList, consoleList,
                    page, updatePage, resetPage, consolePage,
                    loading, hasMore
                }
            }>

            {children}

        </MovieListContext.Provider>
    )

}

export default MovieListContext