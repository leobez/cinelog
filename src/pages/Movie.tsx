import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useGetMovieById } from '../hooks/useGetMovieById'

const Movie = () => {
    
    const {id} = useParams()

    const {loading, error, movie} = useGetMovieById(Number(id))

    useEffect(() => {
        console.log(movie)
    }, [movie])

    if (loading) {
        return (<div className='loading-spinner'></div>)
    } 

    if (movie) {
        
        return (
            <div className='flex justify-center flex-col overflow-y-scroll scrollbar-thin p-4'>
                
                <div className='flex justify-center gap-4 '>

                    <div className='h-[700px] flex'>
                        <img src={`${import.meta.env.VITE_POSTER_URL}/${movie.poster_path}`} alt={movie.title} className='h-full w-full object-contain' />
                    </div>

                    <div className='flex flex-col gap-4'>
                        
                        <div className='text-left'>
                            <p>{movie.title}</p>
                            <p>{movie.original_title}</p>
                        </div>

                        <div className='flex gap-2'>
                            {movie.genres.map((genre:any) => (
                                <div key={genre.id} className='badge p-3'>{genre.name}</div>
                            ))}
                        </div>

                        <div className='w-[450px] text-justify' >
                            <p>{movie.overview}</p>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                <tr className='text-center'>
                                    <th>Release date</th>
                                    <th>Status</th>
                                    <th>Runtime</th>
                                </tr>
                                </thead>
                                <tbody>
                                {/* row 1 */}
                                <tr className='text-center'>
                                    <td>{movie.release_date}</td>
                                    <td>{movie.status}</td>
                                    <td>{movie.runtime} min</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <div className="stats shadow bg-slate-100">
                            
                            <div className="stat">
                                <div className="stat-figure text-secondary">
                                </div>
                                <div className="stat-title">Popularity</div>
                                <div className="stat-value text-xl">{movie.popularity}</div>
                            </div>
                            
                            <div className="stat">
                                <div className="stat-figure text-secondary">
                                </div>
                                <div className="stat-title">Vote average</div>
                                <div className="stat-value text-xl">{movie.vote_average}</div>
                            </div>
                            
                            <div className="stat">
                                <div className="stat-figure text-secondary">
                                </div>
                                <div className="stat-title">Vote count</div>
                                <div className="stat-value text-xl">{movie.vote_count}</div>
                            </div>
                        </div>

                        <details className="collapse bg-slate-100">
                            <summary className="collapse-title text-xl font-medium text-left">Produção</summary>
                            <div className="collapse-content text-left border-t-2 border-slate-200 pt-4 animate-in"> 
                                <p>Budget: <span className='font-bold'>{movie.budget}</span></p>
                                <p>Revenue: <span className='font-bold'>{movie.revenue}</span></p>
                                <p>Pais de origem</p>
                                <p>Linguagem original</p>
                                <p>Linguagens faladas</p>
                                <p>Compania de produção</p>
                                <p>Paises de produção</p>
                            </div>
                        </details>

                    </div>

                </div>
                
                {movie.collection && 
                    <div>
                        Coleção
                    </div>
                }

                <div className='h-96'>Similar movies...</div>

            </div>
        )
    }

    
}

export default Movie