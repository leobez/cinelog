import Searchbar from "./Searchbar"
import Filter from "./Filter"
import Information from "./Information"
import { useContext } from "react"
import MovieContext, { MovieContextType } from "../../context/MovieContext"

const Sidebar = () => {

    const {loading, message} = useContext(MovieContext) as MovieContextType

    return (
        <div className="flex flex-col relative justify-between h-screen gap-8">
            
            <div className="flex flex-col justify-between gap-10">
                <div className="justify-center items-center flex p-2">
                    <Searchbar/>
                </div>

                <div className="p-2">
                    <Filter/>
                </div>

                <div className="w-full p-2">
                    <Information loading={loading} message={message}/>
                </div>
            </div>

            <div className="px-2 self-end">
                <div>
                    <p>Developed by <a href="https://github.com/leobez" target="_blank"  className="text-purple-900">Leonardo de Souza Bezerra</a></p>
                    <p>Data by <a href="https://www.themoviedb.org/?language=pt-BR" target="_blank" className="text-purple-900">TMDB</a></p>
                </div>
            </div>

        </div>
    )
}

export default Sidebar