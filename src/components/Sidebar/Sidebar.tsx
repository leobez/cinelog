import { useEffect } from "react"
import { TMDB_GENRES } from "../../data/TMDB_GENRES"
import Searchbar from "./Searchbar"

const Sidebar = () => {

    const GENRES = Object.entries(TMDB_GENRES)
    useEffect(() => {
        console.log(GENRES)
    }, [GENRES])

    return (
        <div className="h-full flex flex-col relative">

            <div className="h-32 justify-center items-center flex p-2">
                <Searchbar/>
            </div>

            <div className="p-2">
                <div className="text-left mb-2">Filter by genres</div>
                {GENRES && 
                    <form>
                        <div className="grid grid-cols-3 gap-1">
                            {GENRES.map((genre:any) => (
                                <div key={genre[0]} className="border border-black text-left p-1 text-sm">
                                    {genre[1]}
                                </div>
                            ))}
                        </div>
                        <div className="h-12 flex w-fit gap-1 mt-3">
                            <button type="submit" className="border-2 border-black px-4 py-1 hover:bg-black hover:text-white cursor-pointer"> Filter </button>
                            <button type="submit"  className="border-2 border-black px-4 py-1 hover:bg-black hover:text-white cursor-pointer"> Random movie </button>
                        </div>
                    </form>
                }


            </div>

            <div className="absolute bottom-0 h-16 border-t-2 border-black grid place-items-center p-2">
                Desenvolvido por Leonardo de Souza Bezerra
                API: IMDB e ??
            </div>

        </div>
    )
}

export default Sidebar