import { createContext, useEffect, useState } from "react";

export type MovieContextType = {

    // ListCtegories can be: popular, upcoming, top_rated, by_query, by_genre
    listCategory:string|null;
    updateListCategory:(newCategory:string)=>void;
    list:any[];
    loadingList:boolean;
    updateQuery:(query:string|null)=>void;
    query:string|null;
    getSimilar:(id:number)=>any;
    updateGenres:(genresIds:any)=>void;
    genres:number[]|null;
    updatePage:()=>void;

    // movieCategory can be: by_id, random_by_genre.
    movieCategory:string;
    updateMovieCategory:(newCategory:string)=>void;
    movie: any;
    loadingMovie:boolean;
    updateMovieId:(id:number)=>void;
    movieId:number;
    chooseRandom:(genres:any[])=>Promise<number>;
}

const MovieContext = createContext<MovieContextType|null>(null)

export const MovieListContextProvider = ({children}:any) => {

    // STATES

    // States of movie lists
    const [listCategory, setListCategory]   = useState<string|null>(null)
    const [list, setList] = useState<any[]>([])
    const [page, setPage] = useState<number>(1) 
    const [query, setQuery] = useState<string|null>(null) 
    const [genres, setGenres] = useState<number[]|null>(null)
    const [loadingList, setLoadingList] = useState<boolean>(false)
    const [hasMore, setHasMore] = useState<boolean>(true)

    // States of individual movies
    const [movieCategory, setMovieCategory] = useState<string>('')
    const [movie, setMovie] = useState<any>(null)
    const [movieId, setMovieId] = useState<number>(-1)
    const [random, setRandom] = useState<boolean>(false)
    const [loadingMovie, setLoadingMovie] = useState<boolean>(false)


    // FUNCTIONS
    // Category functions
    const updateListCategory = (newCategory:string):void => {
        const validCategories = ['top_rated', 'popular', 'upcoming', 'by_query', 'by_genre']
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
        const validCategories = ['by_id']
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
                case 'by_genre': 
                    URL = `${import.meta.env.VITE_DISCOVER}/movie?api_key=${import.meta.env.VITE_API_KEY}&sort_by=release_date.desc&page=${page}&with_genres=${genres?.join(',')}`
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

    }, [listCategory, page, query, genres])
 
    const updatePage = ():void => {
        setPage(prev => prev+1)
    }

    const updateQuery = (query:string|null):void => {
        if (!query) {
            console.log('Query null')
            return;
        }
        setPage(1)
        setList([])
        setQuery(query)
    }

    const updateGenres = (genresIds:any):void => {
        if (genres?.length === 0) {
            console.log('No genres')
            return;
        }
        setPage(1)
        setList([])
        setGenres(genresIds)
    }

    const getSimilar = async(id:number):Promise<any> => {

        try {

            setLoadingMovie(true)
            const URL = `${import.meta.env.VITE_SIMILAR}/${id}/similar?api_key=${import.meta.env.VITE_API_KEY}`
            const result = await fetch(URL)
            const data = await result.json()

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

            console.log('SIMILAR MOVIES: ', filteredData)

            setLoadingMovie(false)

            return filteredData

        } catch (error) {
            setLoadingMovie(false)
            console.log(error)
            return;
        }
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

    const chooseRandom = async(genres:any[]):Promise<number> => {

        // Begin API call
        try {

            let moviePool:any[] = []

            setLoadingMovie(true)

            for (let page=1; page<=5; page++) {

                const URL = `${import.meta.env.VITE_DISCOVER}/movie?api_key=${import.meta.env.VITE_API_KEY}&sort_by=release_date.desc&page=${page}&with_genres=${genres?.join(',')}`
                const result = await fetch(URL)
                const data = await result.json()

                // Last page reached
                if (data.results.length === 0) {
                    setLoadingList(false)
                    setHasMore(false)
                    return -1;
                }

                // Filtering only for movies that have a poster to show. Later filter more information.
                let filteredData:any = []
                for (let movie of data.results) {
                    if (movie.poster_path) {
                        filteredData.push(movie)
                    }
                }

                for (let movie of filteredData) {
                    moviePool.push(movie)
                }

            }

            const max = (moviePool.length-1)
            const min = 0
            const randomNum = Math.floor(Math.random() * (max - min + 1) + min)

            setLoadingMovie(false)

            return moviePool[randomNum].id

        } catch (error) {
            setLoadingMovie(false)
            console.log(error)
            return -1;
        }

    }

    return (
        <MovieContext.Provider value={
                {
                    listCategory, updateListCategory, list, loadingList, updateQuery, updatePage, getSimilar, query, updateGenres, genres,
                    movieCategory, updateMovieCategory, movie, loadingMovie, updateMovieId, movieId, chooseRandom
                }
            }>

            {children}

        </MovieContext.Provider>
    )

}

export default MovieContext