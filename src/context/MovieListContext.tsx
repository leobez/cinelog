import { createContext, useState } from "react";

export type MovieListContextType = {
    movieList: any[];
    addToMovieList: (newMovies:any[]) => void;
    resetMovieList: () => void;
    page: number;
    updatePage: () => void;
}

const MovieListContext = createContext<MovieListContextType|null>(null)

export const MovieListContextProvider = ({children}:any) => {

    const [movieList, setMovieList] = useState<any[]>([])
    const [page, setPage] = useState<number>(1)

    const updatePage = ():void => {
        setPage(prev => prev+1)
    }

    const addToMovieList = (newMovies:any[]):void => {
        if (movieList.length === 0) {
            setMovieList(newMovies)
        } else {
            setMovieList((prev) => [...prev, ...newMovies])
        }
    }

    const resetMovieList = () => {
        setMovieList([])
    }

    return (
        <MovieListContext.Provider value={{movieList, addToMovieList, resetMovieList, page, updatePage}}>
            {children}
        </MovieListContext.Provider>
    )

}

export default MovieListContext