import Searchbar from "./Searchbar"
import Filter from "./Filter"

const Sidebar = () => {

    return (
        <div className="h-full flex flex-col relative">

            <div className="h-32 justify-center items-center flex p-2">
                <Searchbar/>
            </div>

            <div className="p-2">
                <Filter/>
            </div>

            <div className="absolute bottom-0 h-16 border-t-2 border-black grid place-items-center p-2">
                Desenvolvido por Leonardo de Souza Bezerra
                API: TMDB e ??
            </div>

        </div>
    )
}

export default Sidebar