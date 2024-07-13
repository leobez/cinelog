import { useContext, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import MovieContext, { MovieContextType } from '../context/MovieContext'
import ImageSlider from '../components/Imageslider'
import Loading from '../components/Loading'
import { useInitialLoadingMovie } from '../hooks/useInitialLoadingMovie'

const Movie = () => {
    
    /* 
        RELEVANT INFORMATION FROM MOVIE 
            movie.budget                : number
            movie.genres                : any[]
            movie.id                    : number
            movie.origin_country        : string[]
            movie.original_language     : string
            movie.original_title        : string
            movie.overview              : string
            movie.popularity            : number
		    movie.poster_path           : string
            movie.production_companies  : any[]
            movie.production_countries  : any[]
            movie.release_date          : string
            movie.revenue               : number
            movie.runtime               : number
            movie.spoken_languages      : any[]
            movie.title                 : string
            movie.vote_average          : number
            movie.vote_count            : number
    */

    const validateInfo = (movie:any):void => {

            let missingInfo = []

            if (!movie.budget) {
                missingInfo.push('budget')
            }    

            if (!movie.genres || !movie.genres.length) {
                missingInfo.push('genres')
            }   

            if (!movie.id) {
                missingInfo.push('id')
            }     

            if (!movie.origin_country || !movie.origin_country.length) {
                missingInfo.push('origin country')
            }     

            if (!movie.original_language || !movie.original_language.length) {
                missingInfo.push('original language')
            } 

            if (!movie.original_title || !movie.original_title.length) {
                missingInfo.push('original title')
            }  

            if (!movie.overview || !movie.overview.length) {
                missingInfo.push('overview')
            }  

            if (!movie.popularity) {
                missingInfo.push('popularity')
            }  
             
            if (!movie.poster_path || !movie.poster_path.length) {
                missingInfo.push('poster path')
            }  

            if (!movie.production_companies || !movie.production_companies.length) {
                missingInfo.push('production companies')
            }  

            if (!movie.production_countries || !movie.production_countries.length) {
                missingInfo.push('production countries')
            }  
  
            if (!movie.release_date || !movie.release_date.length) {
                missingInfo.push('release date')
            }  
    
            if (!movie.revenue) {
                missingInfo.push('revenue')
            } 

            if (!movie.runtime) {
                missingInfo.push('runtime')
            }     

            if (!movie.spoken_languages || !movie.spoken_languages.length) {
                missingInfo.push('spoken languages')
            }      

            if (!movie.title || !movie.title.length) {
                missingInfo.push('title')
            }   
              
            if (!movie.vote_average) {
                missingInfo.push('vote average')
            }           

            if (!movie.vote_count) {
                missingInfo.push('vote count')
            }  
            
            return missingInfo
    }

    // TODO: VALIDATE ALL INFO FROM MOVIE -> ONLY SHOW THE ONES THAT ARE REAL. OTHERS JUST PUT SEPARATE IN A BOX

    const {id} = useParams()

    const [movie, setMovie] = useState<any>(null)
    const [similarMovies, setSimilarMovies] = useState<any[]>([])
    const {GET_movie_byid, GET_movies_similar, loading} = useContext(MovieContext) as MovieContextType

    // Initial loading
    const {initialLoading:initialLoadingMovie} = useInitialLoadingMovie(movie) 

    useEffect(() => {

        const ASYNC_GET_movie_byid_and_similar = async() => {

            const tempMovie = await GET_movie_byid(Number(id))
            if (!tempMovie) return;
            // Validate info that isnt in there
            const missingInfo = validateInfo(tempMovie)
            console.log('missing info: ', missingInfo)
            console.log('movie: ', tempMovie)
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

        <div className='flex items-center flex-col scrollbar-thin border-color05 gap-4 overflow-hidden h-full'>
            
            {/* MOVIE */}
            <div className='flex justify-center gap-4 '>

                {/* POSTER */}
                <div className='flex w-3/6 min-h-full border-color05 border-2'>
                    <img src={`${import.meta.env.VITE_POSTER_URL}/${movie.poster_path}`} alt={movie.title} className='h-full w-full object-cover' />
                </div>

                {/* INFORMATION */}
                <div className='flex flex-col gap-4 w-3/6'>
                    
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
                    
                    {/* RELEASE DATE, STATUS AND RUNTIME */}
                    <div className="overflow-x-auto w-full">
                        <table className="table">
                            {/* head */}
                            <thead>
                            <tr className='text-center'>
                                <th>Release date</th>
                                <th>Runtime</th>
                            </tr>
                            </thead>
                            <tbody>
                            {/* row 1 */}
                            <tr className='text-center'>
                                <td>{movie.release_date}</td>
                                <td>{movie.runtime} min</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* POPULARITY AND VOTE INFO. */}
                    <div className="overflow-x-auto w-full">
                        <table className="table">
                            {/* head */}
                            <thead>
                            <tr className='text-center'>
                                <th>Popularity</th>
                                <th>Vote average</th>
                                <th>Vote count</th>
                            </tr>
                            </thead>
                            <tbody>
                            {/* row 1 */}
                            <tr className='text-center'>
                                <td>{movie.popularity}</td>
                                <td>{movie.vote_average}</td>
                                <td>{movie.vote_count}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    {/* PRODUCTION DETAILS */}
                    <div>
                        <button className='border-2 border-color05 w-full p-2 hover:bg-color05 hover:text-white' onClick={toggleProdDetail}>
                            Production details
                        </button>
                        <div className='relative'>
                            <div className='h-72 w-full hidden top-0 border-2 border-color05 p-2 text-left animate-in -translate-x-full duration-400 absolute -right-full z-40 bg-white overflow-y-auto scrollbar-thin' id='prod-detail' ref={prodDetail} >
                                <table className="table">
                                    <tbody>
                                    {/* row 1 */}
                                    <tr>
                                        <td>Budget</td>
                                        <td className='font-bold'>{movie.budget}</td>
                                    </tr>

                                    {/* row 2 */}
                                    <tr>
                                        <td>Revenue</td>
                                        <td className='font-bold'>{movie.revenue}</td>
                                    </tr>

                                    {/* row 3 */}
                                    <tr>
                                        <td>Origin country</td>
                                        <td className='font-bold'>
                                            {movie.origin_country.map((country:string, index:number) => (
                                                <span key={index}>{country} </span>
                                            ))}
                                        </td>
                                    </tr>

                                    {/* row 4 */}
                                    <tr>
                                        <td>Original Language</td>
                                        <td className='font-bold'>{movie.original_language}</td>
                                    </tr>

                                    {/* row 5 */}
                                    <tr>
                                        <td>Production companies</td>
                                        <td className='font-bold'>
                                            {movie.production_companies.map((compan:any) => (
                                                <div key={compan.id}>
                                                    <div>{compan.name} [{compan.origin_country}]</div>
                                                    {/* <img src={`${import.meta.env.VITE_POSTER_URL}/${compan.logo_path}`} alt={compan.name} className='h-12 w-12 object-contain'/> */}
                                                </div>
                                        ))}
                                        </td>
                                    </tr>

                                    {/* row 6 */}
                                    <tr>
                                        <td>Production countries</td>
                                        <td className='font-bold'>
                                            {movie.production_countries.map((country:any, index:number) => (
                                                <div key={index}>
                                                    <div>{country.name} [{country.iso_3166_1}]</div>
                                                </div>
                                        ))}
                                        </td>
                                    </tr>   

                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div className='w-full h-[1px] bg-color05 my-2'/>

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