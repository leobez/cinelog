import Searchbar from "./Searchbar"
import Filter from "./Filter"
import Information from "./Information"
import { useContext } from "react"
import MovieContext, { MovieContextType } from "../../context/MovieContext"

const Sidebar = () => {

    const {loading, error, warning} = useContext(MovieContext) as MovieContextType

    return (
        <div className="h-full flex flex-col relative">

            <div className="h-32 justify-center items-center flex p-2">
                <Searchbar/>
            </div>

            <div className="p-2">
                <Filter/>
            </div>

            <div className="w-full p-2">
                <Information loading={loading} error={error} warning={warning}/>
            </div>

            <div className="absolute bottom-0 border-t-2 border-color05 grid place-items-center p-2 w-full">
                <p>Developed by Leonardo de Souza Bezerra</p>
                <p>API's used: TMDB e ??</p>
            </div>

        </div>
    )
}

export default Sidebar