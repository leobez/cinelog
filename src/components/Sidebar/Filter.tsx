import { useContext, useEffect, useState } from "react"
import { TMDB_GENRES } from "../../data/TMDB_GENRES"
import { useNavigate } from "react-router-dom"
import MovieContext, { MovieContextType } from "../../context/MovieContext"

const Filter = () => {

    const navigate = useNavigate()

    const GENRES = Object.entries(TMDB_GENRES)

    const [selectedGenres, setSelectedGenres] = useState<number[]>([])

    const {loading, updateWarning} = useContext(MovieContext) as MovieContextType

    useEffect(() => {
      console.log('selectedGenres: ', selectedGenres)
    }, [selectedGenres])

    const addGenre = (id:number) => {
      setSelectedGenres((prev:any)=>[...prev, id])
    } 

    const removeGenre = (id:number) => {
      setSelectedGenres((prev:any)=>prev.filter((genreId:number)=>genreId!=id))
    } 

    const handleFilter = (e:any):void => {
      e.preventDefault()
      const args = selectedGenres.join(',')
      if (!args || args.length === 0) {
        updateWarning('Select at least on genre to filter')
        return;
      }
      navigate(`/bygenre?genres=${args}`)
    }

    const handleRandom = async(e:any):Promise<void> => {
      e.preventDefault()
      const args = selectedGenres.join(',')
      if (!args || args.length === 0) {
        updateWarning('Select at least on genre to randomize')
        return;
      }
      navigate(`/random?genres=${args}`)
    }

    // ADD LIMIT TO GENRES THAT CAN BE SELECTED
    const toggleGenre = (e:any):void => {
      e.preventDefault()
      
      const classList:any[] = Object.values(e.target.classList)
      const id = Number(e.target.id)

      console.log(classList)

      if (classList.includes('unselected')) {
        e.target.classList.remove('unselected')
        e.target.classList.add('selected')
        console.log('SELECTING: ', id)
        addGenre(id)

      } else if (classList.includes('selected')) {
        e.target.classList.remove('selected')
        e.target.classList.add('unselected')
        console.log('UNSELECTING: ', id)
        removeGenre(id)

      }

      console.log(classList)
    }

    return (
      <>
        <div className="text-left mb-2">Filter randomize a movie based on genres:</div>
        {GENRES && 
            <form>
                <div className="grid grid-cols-3 gap-1">
                    {GENRES.map((genre:any) => (
                        <button key={genre[0]} className="border-2 border-color05 text-left p-1 text-sm hover:bg-color05 hover:text-white cursor-pointer unselected text-ellipsis overflow-hidden whitespace-nowrap" id={genre[0]} onClick={toggleGenre}>
                            {genre[1]}
                        </button>
                    ))}
                </div>
                <div className="h-12 flex w-full gap-1 mt-3">

                    {!loading &&
                      <>
                        <button type="submit" className="w-1/2 border-2 border-color05 hover:bg-color05 hover:text-white cursor-pointer" onClick={handleFilter}> 
                          Filter 
                        </button>
                        <button type="submit"  className="w-1/2 border-2 border-color05 hover:bg-color05 hover:text-white cursor-pointer" onClick={handleRandom}> 
                          Random 
                        </button>
                      </>
                    }

                    {loading &&
                      <>
                        <button type="submit" className="w-1/2 border-2 border-color05 bg-color05 text-white cursor-pointer disabled"> 
                          Filter 
                        </button>
                        <button type="submit"  className="w-1/2 border-2 border-color05 bg-color05 text-white cursor-pointer disabled"> 
                          Random
                        </button>
                      </>
                    }

                </div>
            </form>
        }
      </>
    )

}

export default Filter