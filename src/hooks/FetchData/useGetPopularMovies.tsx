import {useEffect, useRef, useContext} from 'react'
import MovieContext, { MovieContextType } from '../../context/MovieContext';

export const useGetPopularMovies = (run:boolean, page:number) => {

    const isInitialMount = useRef(true);
    const {GET_movies_popular} = useContext(MovieContext) as MovieContextType

    useEffect(() => {  

        // Only run this effect if page has actually changed
        if (isInitialMount.current) {
          console.log('blocked: ref')//
          isInitialMount.current = false
          return;
        } 

        if (!page) {
          console.log('blocked: page')//
          return;
        } 
  
        console.log('running ASYNC_GET_movies_popular')//
        const ASYNC_GET_movies_popular = async() => {
            await GET_movies_popular()
        }
    
        ASYNC_GET_movies_popular()
  
    }, [run])

	return {}
}
