import { useContext } from "react";
import { RiMore2Line } from "react-icons/ri";
import ThemeContext, { ThemeContextType } from "../../context/ThemeContext";
type Props = {
    LoadMoreFunc:()=>void
    loadingState:boolean
}

const LoadMoreButton = ({LoadMoreFunc, loadingState}: Props) => {

    const {theme} = useContext(ThemeContext) as ThemeContextType 

    return (
        <div className={`flex justify-center bg-${theme}-700 rounded-lg shadow-lg p-5`}>
            <div className="w-11/12 flex justify-end text-sm">
                {!loadingState && 
                    <button 
                        type="submit" 
                        className={`text-sm rounded-lg shadow-lg bg-${theme}-900 p-4 text-white hover:bg-${theme}-950 flex justify-between items-center`}
                        onClick={LoadMoreFunc}
                        >
                        Load more <RiMore2Line size={20} fill="white"/>
                    </button>
                }

                {loadingState && 
                    <button 
                        type="submit" 
                        className={`text-sm rounded-lg shadow-lg bg-${theme}-950 p-4 text-white disabled`}
                        >
                        Load more <RiMore2Line size={20} fill="white"/>
                    </button>
                }            
            </div>
        </div>
    )
}

export default LoadMoreButton