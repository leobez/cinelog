import { useContext, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import MovieContext, { MovieContextType } from '../context/MovieContext'
import ImageSlider from '../components/Imageslider'
import Loading from '../components/Loading'
import { useInitialLoadingMovie } from '../hooks/useInitialLoadingMovie'
import Table from '../components/Movie/Table'
import { getMovieMissingInfo } from '../utils/getMovieMissingInfo'

const Movie = () => {

    const {id} = useParams()

    const [missingInfo, setMissingInfo] = useState<string[]>([])
    const [movie, setMovie] = useState<any>(null)
    const [similarMovies, setSimilarMovies] = useState<any[]>([])
    const {GET_movie_byid, GET_movies_similar, loading} = useContext(MovieContext) as MovieContextType

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

    const prodDetail:any = useRef<HTMLDivElement>()
    const toggleProdDetail = () => {
        const classNames = prodDetail.current.className.split(' ')
        if (classNames.includes('hidden')) {
            // Make it visible
            prodDetail.current.classList.remove('hidden')
            prodDetail.current.classList.add('block')

        } else if (classNames.includes('block')) {
            // Make it invisible
            prodDetail.current.classList.remove('block')
            prodDetail.current.classList.add('hidden')
        }
    }

    const missingInfoEl:any = useRef<HTMLDivElement>()
    const toggleMissingInfoEl = () => {
        const classNames = missingInfoEl.current.className.split(' ')
        if (classNames.includes('hidden')) {
            // Make it visible
            missingInfoEl.current.classList.remove('hidden')
            missingInfoEl.current.classList.add('block')

        } else if (classNames.includes('block')) {
            // Make it invisible
            missingInfoEl.current.classList.remove('block')
            missingInfoEl.current.classList.add('hidden')
        }
    }

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

        <div className='flex items-center flex-col scrollbar-thin border-color05 gap-4 overflow-hidden h-full relative'>

            {/* MISSING INFO */}
            {missingInfo && missingInfo.length > 0 && 
                <div className='self-end'>
                    <div className='w-64 flex flex-col'>
                        <button 
                            className='border-2 border-black py-2 px-4 self-end font-bold hover:bg-black hover:text-white' 
                            onClick={toggleMissingInfoEl}
                        >
                            ?
                        </button>
                    </div>
                    <div className='relative text-sm'>
                        <div 
                            className='h-fit w-full mt-[0.5px] hidden top-0 border-2 border-color05 p-2 text-left animate-in -translate-x-full duration-400 absolute -right-full z-40 bg-white overflow-y-auto scrollbar-thin' 
                            id='prod-detail' 
                            ref={missingInfoEl}
                        >   
                        <p className='font-bold'>The following information are missing in this movie:</p>
                        <ul className='list-disc pl-4'>
                            {missingInfo.map((info:string, index:number) => (
                                <li key={index}>
                                    {info};
                                </li>
                            ))}
                        </ul>
                        </div>
                    </div>
                </div>
            }

            {/* MOVIE */}
            <div className='flex justify-center gap-4 sm:flex-row flex-col'>

                {/* POSTER */}
                <div className='flex sm:w-3/6 w-full sm:min-h-full h-[500px] border-color05 border-2'>
                    <img src={`${import.meta.env.VITE_POSTER_URL}/${movie.poster_path}`} alt={movie.title} className='h-full w-full object-cover object-top' />
                </div>

                {/* INFORMATION */}
                <div className='flex flex-col gap-4 sm:w-3/6 w-full'>
                    
                    {/* TITLE */}
                    <div className='text-left w-full'>
                        <p title='Title'>{movie.title}</p>
                        <div className='w-full h-[1px] bg-color05 my-2'></div>
                        <p title='Original title'>{movie.original_title}</p>
                    </div>

                    {/* GENRES */}
                    <div className='flex flex-wrap gap-2 w-full'>
                        {movie.genres.map((genre:any) => (
                            <div key={genre.id} className='badge p-3' title='Genres'>{genre.name}</div>
                        ))}
                    </div>
                    
                    {/* OVERVIEW */}
                    <div className='text-justify w-full' >
                        <p title='Overview'>{movie.overview}</p>
                    </div>
                    
                    {/* RELEASE DATE AND RUNTIME */}
                    <div className="overflow-x-auto w-full">
                        <Table 
                            head={['Release Date', 'Runtime']} 
                            rows={[[movie.release_date, movie.runtime]]}
                        />
                    </div>

                    {/* POPULARITY AND VOTE INFO. */}
                    <div className="overflow-x-auto w-full">
                        <Table 
                            head={['Popularity', 'Vote average', 'Vote count']} 
                            rows={[[movie.popularity, movie.vote_average, movie.vote_count]]}
                        />
                    </div>
                    
                    {/* PRODUCTION DETAILS */}
                    <div>
                        <button className='border-2 border-color05 w-full p-2 hover:bg-color05 hover:text-white' onClick={toggleProdDetail}>
                            Production details
                        </button>
                        <div className='relative'>
                            <div className='h-72 mt-[0.5px] w-full hidden top-0 border-2 border-color05 p-2 text-left animate-in -translate-x-full duration-400 absolute -right-full z-40 bg-white overflow-y-auto scrollbar-thin' id='prod-detail' ref={prodDetail}>
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
                                />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            
            <div className='h-[1px] border-black border w-full mb-2 mt-4'/>

            {/* SIMILAR MOVIES */}
            {similarMovies && similarMovies.length > 0 &&
                <div className='w-full'>  
                    <div className='text-left mb-2'>Similar movies:</div>  
                    <div className='mb-5'>
                        <ImageSlider movies={similarMovies}/>
                    </div>       
                </div>
            }

        </div>

    )
    
}

export default Movie