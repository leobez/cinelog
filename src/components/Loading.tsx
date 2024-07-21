import { useContext } from "react"
import ThemeContext, { ThemeContextType } from "../context/ThemeContext"

type Props = {
    message:string
}

const Loading = ({message}: Props) => {

    const {theme} = useContext(ThemeContext) as ThemeContextType 

    return (
        <div className={`h-full w-full grid place-items-center gap-4 rounded-lg shadow-lg bg-${theme}-700 p-5`}>
            <div className="flex flex-col items-center justify-center gap-3">
                <span className="loading loading-spinner loading-lg text-white"/>
                <p className='font-bold text-white text-sm'>{message}</p>
            </div>
        </div>
    )
}

export default Loading