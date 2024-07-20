import { useContext, useState } from "react"
import { TMDB_GENRES } from "../../data/TMDB_GENRES"
import { useNavigate } from "react-router-dom"
import MovieContext, { MovieContextType } from "../../context/MovieContext"
import { IoFilterSharp } from "react-icons/io5";
import { FaDice } from "react-icons/fa";
import { GiMineExplosion, GiTreeDoor, GiKidSlide, GiClown, GiPoliceOfficerHead, GiNewspaper, GiVideoCamera, GiFamilyHouse, GiSpikedDragonHead, GiBookCover, GiGhost, GiMusicalNotes, GiArchiveResearch, GiHearts, GiAlienSkull, GiTv, GiDrippingKnife, GiSubmarineMissile, GiCowboyBoot } from "react-icons/gi";

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

    const navigate = useNavigate()

    const GENRES = Object.entries(TMDB_GENRES)

    const [selectedGenres, setSelectedGenres] = useState<number[]>([])

    const {loading, updateMessage} = useContext(MovieContext) as MovieContextType

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

      if (classList.includes('unselected')) {
        e.target.classList.remove('unselected')
        e.target.classList.add('selected')
        //console.log('SELECTING: ', id)
        addGenre(id)

      } else if (classList.includes('selected')) {
        e.target.classList.remove('selected')
        e.target.classList.add('unselected')
        //console.log('UNSELECTING: ', id)
        removeGenre(id)

      }
    }

    return (
      <>
        <div className="text-left mb-2 text-white"></div>
        {GENRES && 
            <form>
                <div className="grid grid-cols-2 gap-1 h-64 overflow-y-auto scrollbar-thin pr-2">
                    {GENRES.map((genre:any) => {

                      console.log(icons[genre[0]])

                      const IconComponent = icons[genre[0]]

                      console.log(IconComponent)

                      return (
                        <button key={genre[0]} className="h-10 rounded-lg text-center py-1 px-2 text-xs bg-rose-900 hover:bg-rose-950 text-white cursor-pointer unselected text-ellipsis overflow-hidden whitespace-nowrap flex justify-between items-center" id={genre[0]} onClick={toggleGenre} title={genre[1]}>
                            {genre[1]} <IconComponent size={20} fill="white"/>
                        </button>
                      )
                    })}

                </div>
                <div className="h-12 flex w-full gap-2 mt-3">

                    {!loading &&
                      <>
                        <button title="Get a random movie" type="submit" className="text-sm w-1/2 bg-rose-900 hover:bg-rose-950 text-white cursor-pointer rounded-lg shadow-lg flex items-center justify-center gap-2" onClick={handleFilter}> 
                          <IoFilterSharp size={30} fill="white"/>
                        </button>

                        <button title="Filter based on genres" type="submit"  className="text-sm w-1/2 bg-rose-900 hover:bg-rose-950 text-white cursor-pointer rounded-lg shadow-lg flex items-center justify-center gap-2" onClick={handleRandom}> 
                          <FaDice size={30} fill="white"/>
                        </button>
                      </>
                    }

                    {loading &&
                      <>
                        <button title="Get a random movie" type="submit" className="text-sm w-1/2 bg-rose-900 hover:bg-rose-950 text-white cursor-pointer rounded-lg shadow-lg flex items-center justify-center gap-2 disabled"> 
                          <IoFilterSharp size={30}/>
                        </button>
                        
                        <button title="Filter based on genres" type="submit"  className="text-sm w-1/2 bg-rose-900 hover:bg-rose-950 text-white cursor-pointer rounded-lg shadow-lg flex items-center justify-center gap-2 disabled"> 
                          <FaDice size={30}/>
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