import MovieCard from "../components/MovieCard";
import { useGetMovies } from "../hooks/useGetMovies"

const Home = () => {

    // Get top rated movies
    const {loading, list, updatePage, hasMore} = useGetMovies("top_rated")

    const handleScroll = (e:any) => {
      const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
      if (bottom) { 
        updatePage()
      }
    }

    return (
      <div className="grid gap-5 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 overflow-y-auto scrollbar-thin max-h-full" onScroll={handleScroll}>

        {list && list.map((movie:any, index:number) => (
          <div key={`${movie.id}/${index}`} className="border-2 border-black h-80 hover:opacity-50">
            <MovieCard movie={movie} />
          </div>
        ))}

        {loading && <div className="loading-spinner"></div>}
        {!hasMore && <div>Acabou!</div>}

      </div>

    )
}

export default Home