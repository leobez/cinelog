import { useSearchParams } from "react-router-dom"
import MovieList from "../components/MovieList"
import { useContext, useEffect, useState } from "react"
import MovieContext, { MovieContextType } from "../context/MovieContext"

const Search = () => {

    const {updateListCategory, updateQuery, query, list} = useContext(MovieContext) as MovieContextType

    const [q, setQ] = useState<string|null>(null)
    const [params, setParams] = useSearchParams()

    useEffect(() => {
        console.log(params.get('q'))
        setQ(params.get('q'))
    }, [params])
    
    useEffect(() => {
        updateQuery(q)
    }, [q])

    useEffect(() => {
        console.log('query: ', query)
        updateListCategory('by_query')
    }, [query])

    return (
        <>
         {list.length > 0 &&
          <MovieList movieList={list}/>
        }
        {/* else ... */}
      </>
    )
}

export default Search