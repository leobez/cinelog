import { createContext, useEffect, useState } from "react";

export type MovieContextType = {

    // ListCtegories can be: popular, upcoming, top_rated, by_query, similar
    listCategory:string|null;
    updateListCategory:(newCategory:string)=>void;
    list:any[];
    loadingList:boolean;
    updateQuery:(query:string|null)=>void;
    updatePage:()=>void;
    updateSimilar:(id:number)=>void;
    similar:number|null;
    query:string|null;

    // movieCategory can be: by_id, random_by_genre.
    movieCategory:string;
    updateMovieCategory:(newCategory:string)=>void;
    movie: any;
    loadingMovie:boolean;
    updateMovieId:(id:number)=>void;
    movieId:number;
}

const MovieContext = createContext<MovieContextType|null>(null)

export const MovieListContextProvider = ({children}:any) => {

    // STATES

    // States of movie lists
    const [listCategory, setListCategory]   = useState<string|null>(null)
    const [list, setList] = useState<any[]>([])
    const [page, setPage] = useState<number>(1) 
    const [query, setQuery] = useState<string|null>(null) 
    const [similar, setSimilar] = useState<number|null>(null) // number represents id of movie you wish to search for similars to.
    const [loadingList, setLoadingList] = useState<boolean>(false)
    //const [hasMore, setHasMore] = useState<boolean>(true)

    // States of individual movies
    const [movieCategory, setMovieCategory] = useState<string>('')
    const [movie, setMovie] = useState<any>(null)
    const [movieId, setMovieId] = useState<number>(-1)
    //const [random, setRandom] = useState<boolean>(false)
    const [loadingMovie, setLoadingMovie] = useState<boolean>(false)


    // FUNCTIONS
    // Category functions
    const updateListCategory = (newCategory:string):void => {
        const validCategories = ['top_rated', 'popular', 'upcoming', 'by_query', 'similar']
        if (validCategories.includes(newCategory)) {
            // Only reset list and page when user actually changes categories.
            if (listCategory !== newCategory) {
                setPage(1)
                setList([])
            }
            setListCategory(newCategory)
        } else {
            console.log("Invalid Category.")
        }
    } 

    const updateMovieCategory = (newCategory:string):void => {
        const validCategories = ['by_id', 'random']
        if (validCategories.includes(newCategory)) {
            // Only reset list and page when user actually changes categories.
            if (movieCategory !== newCategory) {
                setMovie(null)
            }
            setMovieCategory(newCategory)
        } else {
            console.log("Invalid Category.")
        }
    } 

    // Updates list of movies when following states are changed: listCategory, page, query, genres.
    useEffect(() => {

        if (!listCategory) return;

        const updateList = async():Promise<void> => {

            let URL = ''
    
            // Build URL based on which category is currently being used
            switch (listCategory) {
                case 'top_rated':
                    URL = `${import.meta.env.VITE_TOP_RATED_MOVIES_URL}?api_key=${import.meta.env.VITE_API_KEY}&page=${page}`
                    break;
                case 'popular':
                    URL = `${import.meta.env.VITE_POPULAR_MOVIES_URL}?api_key=${import.meta.env.VITE_API_KEY}&page=${page}`
                    break;
                case 'upcoming':
                    URL = `${import.meta.env.VITE_UPCOMING_MOVIES_URL}?api_key=${import.meta.env.VITE_API_KEY}&page=${page}`
                    break;
                case 'by_query':
                    URL = `${import.meta.env.VITE_QUERY}/movie?query=${query}&api_key=${import.meta.env.VITE_API_KEY}&page=${page}`
                    break;
                case 'similar': 
                    URL = `${import.meta.env.VITE_SIMILAR}/${similar}/similar?api_key=${import.meta.env.VITE_API_KEY}`
                    break;
                default:
                    console.log('invalid listCategory');
                    break;
            }

            console.log('URL: ', URL)
    
            // Begin API call
            try {
    
                setLoadingList(true)
                const result = await fetch(URL)
                const data = await result.json()
                console.log('data received: ', data) // remove
    
                // Last page reached
                if (data.results.length === 0) {
                    setLoadingList(false)
                    setHasMore(false)
                    return;
                }
                
                // Filtering only for movies that have a poster to show. Later filter more information.
                let filteredData:any = []
                for (let movie of data.results) {
                    if (movie.poster_path) {
                        filteredData.push(movie)
                    }
                }
                console.log('filteredData: ', filteredData) // remove
    
                if (list.length === 0) {
                    // Inserts into array for the first time.
                    setList(filteredData)
                } else {
                    // Inserts into array when its not first time.
                    setList((prev) => [...prev, ...filteredData])
                }
    
                setLoadingList(false)
    
            } catch (error) {
                setLoadingList(false)
                console.log(error)
            }
        }    

        updateList()

    }, [listCategory, page, query])
 
    const updatePage = ():void => {
        setPage(prev => prev+1)
    }

    const updateQuery = (query:string|null):void => {
        if (!query) {
            console.log('Query null')
            return;
        }
        setList([])
        setQuery(query)
    }

    const updateSimilar = (id:number):void => {
        setSimilar(id)
    }

    // Updates movie when following states are changed: movieCategory, movieId (...)
    useEffect(() => {

        if (!movieCategory) return;

        const updateMovie = async():Promise<void> => {

            let URL = ''
    
            // Build URL based on which category is currently being used
            switch (movieCategory) {
                case 'by_id':
                    URL = `${import.meta.env.VITE_FIND_BY_ID}/${movieId}?api_key=${import.meta.env.VITE_API_KEY}`
                    break;
                case 'random': // 
                    URL = ``
                    break;
                default:
                    console.log('invalid movieCategory');
                    break;
            }
    
            // Begin API call
            try {

                setLoadingMovie(true)
                const result = await fetch(URL)
                const data = await result.json()
                console.log('data received: ', data) // remove
                setMovie(data)
                setLoadingMovie(false)

            } catch (error) {
                setLoadingMovie(false)
                console.log(error)
            }
        }    

        updateMovie()

    }, [movieCategory, movieId])

    const updateMovieId = (id:number) => {
        setMovieId(id)
    } 

/*     const getMovieByGenres = async(lang:string, genres:number[]):Promise<void> => {
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
    } */

    return (
        <MovieContext.Provider value={
                {
                    listCategory, updateListCategory, list, loadingList, updateQuery, updatePage, updateSimilar, similar, query,
                    movieCategory, updateMovieCategory, movie, loadingMovie, updateMovieId, movieId
                }
            }>

            {children}

        </MovieContext.Provider>
    )

}

export default MovieContext