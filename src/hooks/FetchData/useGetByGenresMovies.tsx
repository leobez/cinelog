import {useEffect, useRef, useContext} from 'react'
import MovieContext, { MovieContextType } from '../../context/MovieContext';

export const useGetByGenreMovies = (run:boolean, page:number, params:any) => {

    const isInitialMount = useRef(true);
    const {GET_movies_bygenres} = useContext(MovieContext) as MovieContextType

    useEffect(() => {  

        // Only run this effect if page has actually changed
        if (isInitialMount.current) {
          //console.log('blocked: ref')//
          isInitialMount.current = false
          return;
        } 

        if (!page) {
          //console.log('blocked: page')//
          return;
        } 
  
        //console.log('running ASYNC_GET_movies_bygenres')
        const ASYNC_GET_movies_bygenres = async() => {
          const genresIds = params.get('genres')?.split(',').map((value:string)=>Number(value))
          if (!genresIds) return;
          //console.log('sort and order: ', sort, order) //
          await GET_movies_bygenres(genresIds)
        }
  
        ASYNC_GET_movies_bygenres()
  
    }, [run])

	return {}
}
