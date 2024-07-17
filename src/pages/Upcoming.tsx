import { useContext, useEffect} from 'react'
import MovieContext, { MovieContextType } from '../context/MovieContext'
import MovieList from '../components/MovieList'
import Loading from '../components/Loading'
import { useInitialLoading } from '../hooks/useInitialLoading'
import Title from '../components/MovieListPages/Title'
import LoadMoreButton from '../components/MovieListPages/LoadMoreButton'
import { useGetUpcomingMovies } from '../hooks/FetchData/useGetUpcomingMovies'

const Upcoming = () => {

    const {
        updateCategory, 
        updatePage, 
        page, 
        loading, 
        list, 
        run, 
    } = useContext(MovieContext) as MovieContextType

    // Update category state to 'top_rated'
    useEffect(() => {
      updateCategory('upcoming')
    }, [])

    // Handles the call to fetching data function
    useGetUpcomingMovies(run, page)

    // Initial loading
    const {initialLoading} = useInitialLoading(list)

    // Function to update page
    const handleUpdatePage = () => {
      updatePage()
    }

    if (initialLoading) {
      return (
        <Loading message="Initial loading ..."/>
      )
    } 

    return (
      <>
        <Title title="Upcoming Movies"/>

        {list && list.length > 0 && 
          <MovieList movieList={list}/>
        }

        {loading && 
          <Loading message="Loading ..."/>
        }

        <LoadMoreButton LoadMoreFunc={handleUpdatePage} loadingState={loading}/>
      </>
    )
}

export default Upcoming