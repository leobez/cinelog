import { useEffect } from 'react'
import { useGetTopRatedMovies } from '../hooks/movie/useGetTopRatedMovies'
import MovieCard from '../components/MovieCard'

type Props = {}

const Home = (props: Props) => {

  const {loading, error, list} = useGetTopRatedMovies()

  useEffect(() => {
    console.log('top rated list: ', list)
  }, [list])

  return (
    <div className='h-full p-4'>

      <div role="tablist" className="tabs tabs-bordered">
        <a role="tab" className="tab">Top Rated Movies</a>
        <a role="tab" className="tab">Popular</a>
        <a role="tab" className="tab">Upcoming</a>
      </div>

      <div className='divider'/>

      <div className='grid grid-cols-4 gap-4'>
        {list.map((movie) => (
          <div key={movie.id} className='border-2 border-black h-80 hover:opacity-50'>
            <MovieCard MovieInfo={movie}/>
          </div>
        ))}
      </div>

      <div className='p-4'>
        Load More
      </div>

    </div>
  )
}

export default Home