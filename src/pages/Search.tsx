import { useSearchParams } from "react-router-dom"
import MovieList from "../components/MovieList"
import { useContext, useEffect} from "react"
import MovieContext, { MovieContextType } from "../context/MovieContext"
import Loading from "../components/Loading"
import { useInitialLoading } from "../hooks/useInitialLoading"
import Title from "../components/MovieListPages/Title"
import LoadMoreButton from "../components/MovieListPages/LoadMoreButton"
import { useGetByQueryMovies } from "../hooks/FetchData/useGetByQueryMovies"

const Search = () => {

      const {
        updateCategory, 
        updatePage, 
        page, 
        loading, 
        list, 
        run, 
    } = useContext(MovieContext) as MovieContextType

    // Get genres in params
    const [params] = useSearchParams()

    // Update category state to 'byquery'
    useEffect(() => {
      updateCategory(`byquery?q=${params.get('q')}`)
    }, [params])

    // Initial loading
    const {initialLoading} = useInitialLoading(list)

    useGetByQueryMovies(run, page, params)

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
        {params && 
          <Title title={`Query: ${params.get('q')}`}/>
        }

        {list && list.length > 0 && 
          <MovieList movieList={list}/>
        }

        <LoadMoreButton LoadMoreFunc={handleUpdatePage} loadingState={loading}/>
      </div>
    )
}

export default Search