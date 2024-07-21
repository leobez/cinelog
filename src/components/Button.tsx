import { useContext } from "react";
import ThemeContext, { ThemeContextType } from "../context/ThemeContext";

type Props = {
    text:string;
    loading:boolean;
    func:(e:any)=>void;
}

const Button = ({text,loading,func}: Props) => {

    const {theme} = useContext(ThemeContext) as ThemeContextType 

    return (
        <>
            {!loading && 
                <button 
                    type="submit" 
                    className={`text-sm rounded-lg shadow-lg bg-${theme}-900 p-4 text-white hover:bg-${theme}-950`}
                    onClick={func}
                    >
                    {text}
                </button>
            }

            {loading && 
                <button 
                    type="submit" 
                    className={`text-sm rounded-lg shadow-lg bg-${theme}-900 p-4 text-white disabled hover:bg-${theme}-950`}
                    >
                    Loading...
                </button>}
        </>
    )
}

export default Button