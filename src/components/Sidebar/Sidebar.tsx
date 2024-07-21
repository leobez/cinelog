import Searchbar from "./Searchbar"
import Filter from "./Filter"
import { useContext, useRef } from "react"
import ThemeContext, { ThemeContextType } from "../../context/ThemeContext"
import ColorChanger from "./ColorChanger"
import { toggleComponent } from "../../utils/toggleComponent"

const Sidebar = () => {

    //const {loading, message} = useContext(MovieContext) as MovieContextType
    const {theme} = useContext(ThemeContext) as ThemeContextType 

    const colorChangerRef:any = useRef()

    return (
        <div className="flex flex-col relative justify-between h-screen">
            
            <div className="flex flex-col justify-between gap-5">

                <div className={`justify-center items-center flex p-5 bg-${theme}-700 rounded-lg shadow-lg`}>
                    <Searchbar/>
                </div>

                <div className={`p-5 bg-${theme}-700 rounded-lg shadow-lg text-white w-fit`}>
                    <button className={`h-12 w-12 relative shadow-lg rounded-full bg-${theme}-950 hover:opacity-60`} onClick={() => toggleComponent(colorChangerRef)}>
                        <div className="absolute top-0 translate-x-[14px] translate-y-[3px]  h-5 w-5 bg-sky-700 rounded-full"/>
                        <div className="absolute left-0 translate-x-[4px] -translate-y-[5px] h-5 w-5 bg-purple-700 rounded-full"/>
                        <div className="absolute right-0 -translate-x-[4px] -translate-y-[5px] h-5 w-5 bg-rose-700 rounded-full"/>
                    </button>
                    <div className="relative ">
                        <div ref={colorChangerRef} className={`w-56 hidden shadow-lg bg-${theme}-950 p-5 rounded-lg animate-in slide-in-from-left-full absolute w-full mt-1 duration-400`}>
                            <div className="text-left font-bold text-white mb-5">Select a color scheme:</div>
                            <ColorChanger/>
                        </div>
                    </div>
                </div>

                <div className={`p-5 bg-${theme}-700 rounded-lg shadow-lg`}>
                    <Filter/>
                </div>

            </div>

            <div className={`p-5 bg-${theme}-700 rounded-lg shadow-lg self-end w-full flex flex-col gap-2`}>
                <div className="text-white text-sm">
                    Developed by <a href="https://github.com/leobez" target="_blank"  className={`text-${theme}-300 hover:text-${theme}-500 duration-200`}>Leonardo de Souza Bezerra</a>
                </div>
                <div className="text-white text-sm">
                    Data by <a href="https://www.themoviedb.org/?language=pt-BR" target="_blank" className={`text-${theme}-300 hover:text-${theme}-500 duration-200`}>TMDB</a>
                </div>
            </div>

        </div>
    )
}

export default Sidebar