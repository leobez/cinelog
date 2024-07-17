import {useEffect, useRef, useContext} from 'react'
import MovieContext, { MovieContextType } from '../../context/MovieContext';

export const useGetByQueryMovies = (run:boolean, page:number, params:any) => {

    const isInitialMount = useRef(true);
    const {GET_movies_byquery} = useContext(MovieContext) as MovieContextType

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

        console.log('running ASYNC_GET_movies_byquery')//
        const ASYNC_GET_movies_byquery = async() => {
          const query = params.get('q')
          if (!query) return;
  
          await GET_movies_byquery(query)
        }

        ASYNC_GET_movies_byquery()
  
    }, [run])

	return {}
}
