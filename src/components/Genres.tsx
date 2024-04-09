import { useContext, useEffect, useState } from 'react'
import ModeContext, { ModeContextType } from '../context/ModeContext'
import { TMDB_GENRES } from '../data/TMDB_GENRES'

const Genres = () => {

  const {mode} = useContext(ModeContext) as ModeContextType
  const [genres, setGenres] = useState<any[]>([])
  useEffect(() => {console.log('Current genres: ', genres)}, [genres])

  useEffect(() => {

    if (mode === 'game') {
      setGenres(TMDB_GENRES.genres)
    }

    if (mode === 'movie') {
      setGenres(TMDB_GENRES.genres)
    }

  }, [mode])

  const addToFilter = (e:any) => {
    console.log(e.target.id)
  }

  return (
    <div>
      {genres ? (
        <ul>
          {genres.map(genre => (
            <li key={genre.id} id={genre.id} className='p-3 text-sm my-2 bg-color03 text-white font-bold hover:bg-color06 cursor-pointer rounded-lg transition duration-300 hover:translate-x-1 animate-in fade-in' onClick={addToFilter}>
              {genre.name}
            </li>
          ))}
        </ul>
      ) : (
        <></>
      )}

    </div>
  )
}

export default Genres