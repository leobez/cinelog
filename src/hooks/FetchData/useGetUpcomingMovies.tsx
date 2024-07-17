import {useEffect, useRef, useContext} from 'react'
import MovieContext, { MovieContextType } from '../../context/MovieContext';

export const useGetUpcomingMovies = (run:boolean, page:number) => {

    const isInitialMount = useRef(true);
    const {GET_movies_upcoming} = useContext(MovieContext) as MovieContextType

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
  
        console.log('running ASYNC_GET_movies_upcoming')//
        const ASYNC_GET_movies_upcoming = async() => {
            await GET_movies_upcoming()
        }
    
        ASYNC_GET_movies_upcoming()
  
    }, [run])

	return {}
}
