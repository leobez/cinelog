import { useContext } from "react";
import ThemeContext, { ThemeContextType } from "../context/ThemeContext";

type Props = {
    func:(e:any)=>void;
}

const HiddenMenuButton = ({func}: Props) => {

  const {theme} = useContext(ThemeContext) as ThemeContextType 

  return (
    <button className={`bg-${theme}-700 h-full z-30 p-3 shadow-lg rounded-lg flex lg:hidden flex-col items-center justify-center gap-2 hover:bg-${theme}-400`} onClick={func}>
        <span className={`rounded-md w-8 h-1 bg-${theme}-950`}></span>
        <span className={`rounded-md w-8 h-1 bg-${theme}-950`}></span>
        <span className={`rounded-md w-8 h-1 bg-${theme}-950`}></span>
    </button>
  )
}

export default HiddenMenuButton