import Searchbar from "./Searchbar"
import Filter from "./Filter"
import Information from "./Information"
import { useContext } from "react"
import MovieContext, { MovieContextType } from "../../context/MovieContext"

const Sidebar = () => {

    const {loading, message} = useContext(MovieContext) as MovieContextType

    return (
        <div className="flex flex-col relative justify-between h-screen">
            
            <div className="flex flex-col justify-between gap-5">

                <div className="justify-center items-center flex p-5 bg-rose-700 rounded-lg shadow-lg">
                    <Searchbar/>
                </div>

                <div className="p-5 bg-rose-700 rounded-lg shadow-lg text-white">
                    Color Changer (TODO)
                </div>

                <div className="p-5 bg-rose-700 rounded-lg shadow-lg">
                    <Filter/>
                </div>

                <div className="p-5 bg-rose-700 rounded-lg shadow-lg">
                    <Information loading={loading} message={message}/>
                </div>

            </div>

            <div className="p-5 bg-rose-700 rounded-lg shadow-lg self-end w-full flex flex-col gap-2">
                <div className="text-white text-sm">
                    Developed by <a href="https://github.com/leobez" target="_blank"  className="text-rose-300 hover:text-rose-500 duration-200">Leonardo de Souza Bezerra</a>
                </div>
                <div className="text-white text-sm">
                    Data by <a href="https://www.themoviedb.org/?language=pt-BR" target="_blank" className="text-rose-300 hover:text-rose-500 duration-200">TMDB</a>
                </div>
            </div>

        </div>
    )
}

export default Sidebar