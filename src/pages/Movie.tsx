import { useContext, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import MovieContext, { MovieContextType } from '../context/MovieContext'
import ImageSlider from '../components/Imageslider'
import Loading from '../components/Loading'
import { useInitialLoadingMovie } from '../hooks/useInitialLoadingMovie'
import Table from '../components/Movie/Table'
import { getMovieMissingInfo } from '../utils/getMovieMissingInfo'
import { toggleComponent } from '../utils/toggleComponent'

const Movie = () => {

    const {
        GET_movie_byid, 
        GET_movies_similar, 
        loading
    } = useContext(MovieContext) as MovieContextType

    const {id} = useParams()

    const [missingInfo, setMissingInfo] = useState<string[]>([])
    const [movie, setMovie] = useState<any>(null)
    const [similarMovies, setSimilarMovies] = useState<any[]>([])

    // Initial loading
    const {initialLoading:initialLoadingMovie} = useInitialLoadingMovie(movie) 

    useEffect(() => {

        const ASYNC_GET_movie_byid_and_similar = async() => {

            const tempMovie = await GET_movie_byid(Number(id))
            if (!tempMovie) return;
            const tempMissingInfo = getMovieMissingInfo(tempMovie)
            setMissingInfo(tempMissingInfo)
            setMovie(tempMovie)

            const tempList = await GET_movies_similar(Number(id))
            if (!tempList) return;
            setSimilarMovies(tempList)
        }
          
        ASYNC_GET_movie_byid_and_similar()
     
    }, [id])

    const prodDetailRef:any = useRef<HTMLDivElement>()
    const missingInfoRef:any = useRef<HTMLDivElement>()

    if (initialLoadingMovie) {
        return (
          <Loading message="Initial loading ..."/>
        )
    }

    if (loading) {
        return (
          <Loading message="loading ..."/>
        )
    }

    return (

        <div className='flex items-center flex-col scrollbar-thin border-color05 gap-4 overflow-hidden h-full relative mt-2'>

            {/* MISSING INFO */}
            {missingInfo && missingInfo.length > 0 && 
                <div className='bg-rose-700 w-full p-5 rounded-lg shadow-lg flex flex-col'>

                    <div className='w-fit self-end'>
                        <button 
                            className='rounded-lg bg-rose-900 shadow-lg py-2 px-4 self-end font-bold text-white hover:bg-rose-950' 
                            onClick={() => toggleComponent(missingInfoRef)}
                        >
                            ?
                        </button>
                    </div>

                    <div className='relative text-sm self-end'>
                        <div 
                            className='w-64 h-fit mt-1 hidden top-0 rounded-lg shadow-lg border p-5 border-rose-900 text-left animate-in -translate-x-full duration-400 absolute z-40 bg-rose-900 text-white overflow-y-auto scrollbar-thin' 
                            id='prod-detail' 
                            ref={missingInfoRef}
                        >   
                        <p className='font-bold text-white'>The following information are missing in this movie:</p>
                        <ul className='list-disc pl-4'>
                            {missingInfo.map((info:string, index:number) => (
                                <li key={index} className='text-white'>
                                    {info};
                                </li>
                            ))}
                        </ul>
                        </div>
                    </div>

                </div>
            }

            {/* MOVIE */}
            <div className='flex justify-center gap-4 sm:flex-row flex-col bg-rose-700 p-5 rounded-lg shadow-lg'>

                {/* POSTER */}
                <div className='flex sm:w-3/6 w-full sm:min-h-full h-[500px] shadow-lg rounded-lg'> 
                    <img src={`${import.meta.env.VITE_POSTER_URL}/${movie.poster_path}`} alt={movie.title} className='h-full w-full object-cover object-top rounded-lg' />
                </div>

                {/* INFORMATION */}
                <div className='flex flex-col gap-4 sm:w-3/6 w-full'>
                    
                    {/* TITLE */}
                    <div className='text-left w-full'>
                        <p title='Title' className='text-white'>{movie.title}</p>
                        <div className='w-full h-[1px] bg-white my-2'></div>
                        <p title='Original title' className='text-white'>{movie.original_title}</p>
                    </div>

                    {/* GENRES */}
                    <div className='flex flex-wrap gap-2 w-full' >
                        {movie.genres.map((genre:any) => (
                            <div key={genre.id} className='badge bg-rose-950 text-white p-4 border-none shadow-lg' title='Genres'>{genre.name}</div>
                        ))}
                    </div>
                    
                    {/* OVERVIEW */}
                    <div className='text-justify w-full' >
                        <p title='Overview' className='text-white'>{movie.overview}</p>
                    </div>
                    
                    {/* RELEASE DATE AND RUNTIME */}
                    <div className="overflow-x-auto w-full">
                        <Table 
                            head={['Release Date', 'Runtime']} 
                            rows={[[movie.release_date, movie.runtime]]}
                            position='text-center'
                        />
                    </div>

                    {/* POPULARITY AND VOTE INFO. */}
                    <div className="overflow-x-auto w-full">
                        <Table 
                            head={['Popularity', 'Vote average', 'Vote count']} 
                            rows={[[movie.popularity, movie.vote_average, movie.vote_count]]}
                            position='text-center'
                        />
                    </div>
                    
                    {/* PRODUCTION DETAILS */}
                    <div>
                        <button className='w-full rounded-lg bg-rose-900 shadow-lg p-4 self-end font-bold text-white hover:bg-rose-950' onClick={() => toggleComponent(prodDetailRef)}>
                            Production details
                        </button>
                        <div className='relative'>
                            <div className='h-72 mt-1 w-full hidden top-0 shadow-lg rounded-lg p-5 text-left animate-in -translate-x-full duration-400 absolute -right-full z-40 bg-rose-900 overflow-y-auto scrollbar-thin text-white' id='prod-detail' ref={prodDetailRef}>
                                <div className='max-w-72 overflow-hidden'>
                                <Table
                                    head={[]}
                                    rows={[
                                            ['Budget', movie.budget], 
                                            ['Revenue', movie.revenue],
                                            ['Origin Country', movie.origin_country.join(',')],
                                            ['Original Language', movie.original_language],
                                            ['Production Companies', movie.production_companies.map((compan:any) => (compan.name)).join(',')],
                                            ['Production Countries', movie.production_countries.map((country:any) => (country.name)).join(',')]
                                        ]}
                                    position='text-left'
                                /> 
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            
            {/* SIMILAR MOVIES */}
            {similarMovies && similarMovies.length > 0 &&
                <div className='w-full rounded-lg bg-rose-700 shadow-lg p-5'>  
                    <div className='text-left mb-2 text-white font-bold'>Similar movies</div>  
                    <div className='mb-5'>
                        <ImageSlider movies={similarMovies}/>
                    </div>       
                </div>
            }

        </div>

    )
    
}

export default Movie