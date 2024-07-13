import { useContext, useEffect, useState } from 'react'
import MovieContext, { MovieContextType } from '../context/MovieContext'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { TMDB_GENRES } from "../data/TMDB_GENRES"
import Loading from '../components/Loading'

const Random = () => {

    const navigate = useNavigate()

    const {GET_movie_randombygenres} = useContext(MovieContext) as MovieContextType

    const [genres, setGenres] = useState<string[]>([])
    const [params] = useSearchParams()
    const [LoadingRandom, setLoadingRandom] = useState<boolean>(true)

    useEffect(() => {

        const ASYNC_GET_movie_randombygenres = async() => {

            const genresIds = params.get('genres')?.split(',').map((value:string)=>Number(value))
            if (!genresIds) return;

            const genresNames = genresIds?.map((genreId:number) => TMDB_GENRES[genreId])
            if (!genresNames) return;
            setGenres(genresNames)

            const tempId = await GET_movie_randombygenres(genresIds)
            setLoadingRandom(false)

            if (!tempId) return;

            setLoadingRandom(false)
            navigate(`/movie/${tempId}`)
        }

        ASYNC_GET_movie_randombygenres()

    }, [])

    return (
        <>  
            {LoadingRandom && genres.length > 0 && <Loading message={`Loading random based on genres: ${genres.join(',')}`}/>}
            {LoadingRandom && genres.length===1 && genres[0]==='0' && <Loading message={`Loading random`}/>}
        </>
    )
}

export default Random