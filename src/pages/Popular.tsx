import { useContext, useEffect} from 'react'
import MovieContext, { MovieContextType } from '../context/MovieContext'
import MovieList from '../components/MovieList'
import Loading from '../components/Loading'
import { useInitialLoading } from '../hooks/useInitialLoading'
import Title from '../components/MovieListPages/Title'
import LoadMoreButton from '../components/MovieListPages/LoadMoreButton'
import { useGetPopularMovies } from '../hooks/FetchData/useGetPopularMovies'

const Popular = () => {
    
    const {
        updateCategory, 
        updatePage, 
        page, 
        loading, 
        list, 
        run, 
    } = useContext(MovieContext) as MovieContextType
    
    // Update category state to 'popular'
    useEffect(() => {
      updateCategory('popular')
    }, [])

    // Handles the call to fetching data function
    useGetPopularMovies(run, page)

    // Initial loading
    const {initialLoading} = useInitialLoading(list)

    const handleUpdatePage = () => {
      updatePage()
    }


    if (initialLoading) {
      return (
        <Loading message="Initial loading ..."/>
      )
    }

    return (
      <div className="flex flex-col gap-2">
        <Title title="Popular Movies"/>

        {list && list.length > 0 && 
          <MovieList movieList={list}/>
        }

        {loading && 
          <Loading message="Loading ..."/>
        }

        <LoadMoreButton LoadMoreFunc={handleUpdatePage} loadingState={loading}/>
      </div>

    )
}

export default Popular