import { useContext, useState } from "react"
import { TMDB_GENRES } from "../../data/TMDB_GENRES"
import { useNavigate } from "react-router-dom"
import MovieContext, { MovieContextType } from "../../context/MovieContext"
import { IoFilterSharp } from "react-icons/io5";
import { FaDice } from "react-icons/fa";
import { GiMineExplosion, GiTreeDoor, GiKidSlide, GiClown, GiPoliceOfficerHead, GiNewspaper, GiVideoCamera, GiFamilyHouse, GiSpikedDragonHead, GiBookCover, GiGhost, GiMusicalNotes, GiArchiveResearch, GiHearts, GiAlienSkull, GiTv, GiDrippingKnife, GiSubmarineMissile, GiCowboyBoot } from "react-icons/gi";
import ThemeContext, { ThemeContextType } from "../../context/ThemeContext";

const icons:any = {
    28:GiMineExplosion,  //Action
    12:GiTreeDoor,  //Adventure
    16:GiKidSlide ,  //Animation
    35:GiClown ,  //Comedy
    80:GiPoliceOfficerHead,  //Crime
    99:GiNewspaper ,  //Documentary
    18:GiVideoCamera ,  //Drama
    10751:GiFamilyHouse ,  //Family
    14:GiSpikedDragonHead ,  //Fantasy
    36:GiBookCover ,  //History
    27:GiGhost,  //Horror
    10402:GiMusicalNotes ,  //Music
    9648:GiArchiveResearch ,  //Mystery
    10749:GiHearts ,  //Romance
    878:GiAlienSkull ,  //Science Fiction
    10770:GiTv ,  //TV Movie
    53:GiDrippingKnife ,  //Thriller
    10752:GiSubmarineMissile ,  //War
    37:GiCowboyBoot ,  // Western
}
  
const Filter = () => {

    const {theme} = useContext(ThemeContext) as ThemeContextType 

    const navigate = useNavigate()

    const GENRES = Object.entries(TMDB_GENRES)

    const [selectedGenres, setSelectedGenres] = useState<number[]>([])

/*     useEffect(() => {
      console.log('selectedGenres: ', selectedGenres)
    }, [selectedGenres]) */

    const {loading, updateMessage} = useContext(MovieContext) as MovieContextType

    const addGenre = (id:number) => {
      if (selectedGenres.length >= 3) return;
      setSelectedGenres((prev:any)=>[...prev, id])
    } 

    const removeGenre = (id:number) => {
      setSelectedGenres((prev:any)=>prev.filter((genreId:number)=>genreId!=id))
    } 

    const handleFilter = (e:any):void => {
      e.preventDefault()
      const args = selectedGenres.join(',')
      if (!args || args.length === 0) {
        updateMessage('Select at least one genre to filter', 'orange')
        return;
      }
      navigate(`/bygenre?genres=${args}`)
    }

    const handleRandom = async(e:any):Promise<void> => {
      e.preventDefault()
      const args = selectedGenres.join(',')
      if (!args || args.length === 0) {
        updateMessage('Select at least one genre to randomize', 'orange')
        return;
      }
      navigate(`/random?genres=${args}`)
    }

    const toggleGenre = (e:any):void => {
      e.preventDefault()
      
      const classList:any[] = Object.values(e.target.classList)
      const id = Number(e.target.id)

      //console.log(classList)

      if (classList.includes(`bg-${theme}-800`)) {
        if (selectedGenres.length < 3) {
          e.target.classList.remove(`bg-${theme}-800`)
          e.target.classList.add(`bg-${theme}-950`)
          //console.log('SELECTING: ', id)
          addGenre(id)
        }
      } else if (classList.includes(`bg-${theme}-950`)) {
        e.target.classList.remove(`bg-${theme}-950`)
        e.target.classList.add(`bg-${theme}-800`)
        //console.log('UNSELECTING: ', id)
        removeGenre(id)
      }
    }

    return (
      <>
        {GENRES && 
            <form>
                <div>
                  <p className="text-white text-left pt-2 pb-4">Select your preferred movie genres (max: 3)</p>
                </div>
                <div className="grid grid-cols-2 gap-1 h-64 overflow-y-auto scrollbar-thin pr-2">
                    {GENRES.map((genre:any) => {

                      const IconComponent = icons[genre[0]]

                      return (
                        <button key={genre[0]} className={`h-10 rounded-lg text-center py-1 px-2 text-xs bg-${theme}-800 hover:bg-${theme}-950 text-white cursor-pointer text-ellipsis overflow-hidden whitespace-nowrap flex justify-between items-center`} id={genre[0]} onClick={toggleGenre} title={genre[1]}>
                            {genre[1]} <IconComponent size={20} fill="white" style={{pointerEvents: 'none'}}/>
                        </button>
                      )
                    })}

                </div>

                <div className="h-12 flex w-full gap-2 mt-3">

                    {!loading &&
                      <>
                        <button 
                          title="Filter based on genres" 
                          type="submit" 
                          className={`text-sm w-1/2 bg-${theme}-900 hover:bg-${theme}-950 text-white cursor-pointer rounded-lg shadow-lg flex items-center justify-center gap-2`} 
                          onClick={handleFilter}
                        > 
                          Filter
                          <IoFilterSharp size={30} fill="white" style={{pointerEvents: 'none'}}/>
                        </button>

                        <button 
                          title="Get a random movie" 
                          type="submit"  
                          className={`text-sm w-1/2 bg-${theme}-900 hover:bg-${theme}-950 text-white cursor-pointer rounded-lg shadow-lg flex items-center justify-center gap-2`} 
                          onClick={handleRandom}
                        > 
                          Random
                          <FaDice size={30} fill="white" style={{pointerEvents: 'none'}}/>
                        </button>
                      </>
                    }

                    {loading &&
                      <>
                        <button 
                          title="Get a random movie" 
                          type="submit" 
                          className={`text-sm w-1/2 bg-${theme}-900 hover:bg-${theme}-950 text-white cursor-pointer rounded-lg shadow-lg flex items-center justify-center gap-2 disabled`}
                          disabled
                        > 
                          <IoFilterSharp size={30} style={{pointerEvents: 'none'}}/>
                        </button>
                        
                        <button 
                          title="Filter based on genres" 
                          type="submit"  
                          className={`text-sm w-1/2 bg-${theme}-900 hover:bg-${theme}-950 text-white cursor-pointer rounded-lg shadow-lg flex items-center justify-center gap-2 disabled`}
                          disabled
                        > 
                          <FaDice size={30} style={{pointerEvents: 'none'}}/>
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