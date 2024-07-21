import { useContext } from "react"
import ThemeContext, { ThemeContextType } from "../../context/ThemeContext"

type Props = {
    title:string
}

const Title = ({title}: Props) => {

    const {theme} = useContext(ThemeContext) as ThemeContextType 

    return (
        <div className={`flex justify-center bg-${theme}-700 p-5 rounded-lg shadow-lg`}>
            <div className="text-lg w-11/12 flex justify-start text-white font-bold">
                {title}
            </div>
        </div>
    )
}

export default Title