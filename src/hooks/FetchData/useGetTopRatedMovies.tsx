import {useEffect, useRef, useContext} from 'react'
import MovieContext, { MovieContextType } from '../../context/MovieContext';

export const useGetTopRatedMovies = (run:boolean, page:number) => {

    const isInitialMount = useRef(true);
    const {GET_movies_toprated} = useContext(MovieContext) as MovieContextType

    useEffect(() => {  

        // Only run this effect if page has actually changed
        if (isInitialMount.current) {
          //console.log('blocked: ref')
          isInitialMount.current = false
          return;
        } 

        if (!page) {
          //console.log('blocked: page')
          return;
        } 
  
        //console.log('running ASYNC_GET_movies_toprated')
        const ASYNC_GET_movies_toprated = async() => {
            await GET_movies_toprated()
        }
    
        ASYNC_GET_movies_toprated()
  
    }, [run])

	return {}
}
