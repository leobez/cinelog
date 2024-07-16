import Searchbar from "./Searchbar"
import Filter from "./Filter"
import Information from "./Information"
import { useContext } from "react"
import MovieContext, { MovieContextType } from "../../context/MovieContext"

const Sidebar = () => {

    const {loading, error, warning} = useContext(MovieContext) as MovieContextType

    return (
        <div className="h-full flex flex-col relative justify-between">
            
            <div className="flex flex-col justify-between gap-10">
                <div className="justify-center items-center flex p-2">
                    <Searchbar/>
                </div>

                <div className="p-2">
                    <Filter/>
                </div>

                <div className="w-full p-2">
                    <Information loading={loading} error={error} warning={warning}/>
                </div>
            </div>

            <div className="grid place-items-center p-2 w-full border-black border-t-2">
                <p>Developed by <a href="https://github.com/leobez" target="_blank"  className="text-purple-900">Leonardo de Souza Bezerra</a></p>
                <p>Data by <a href="https://www.themoviedb.org/?language=pt-BR" target="_blank" className="text-purple-900">TMDB</a></p>
            </div>

        </div>
    )
}

export default Sidebar