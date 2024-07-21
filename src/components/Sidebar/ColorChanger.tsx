import { useContext } from "react"
import ThemeContext, { ThemeContextType } from "../../context/ThemeContext"

const ColorChanger = () => {

    const {possibleThemes, updateTheme} = useContext(ThemeContext) as ThemeContextType 

    const handleClick = (e:any):void => {
        e.preventDefault()
        updateTheme(e.target.id)
    }

    return (
        <div className="grid grid-cols-5 gap-2 place-items-center">
            {possibleThemes && possibleThemes.map(((possibleTheme:string, index:number) => (
                <button key={index} id={`${possibleTheme}`} className={`bg-${possibleTheme}-600 h-6 w-6 rounded-full`} title={`${possibleTheme}`} onClick={handleClick}/>
            )))}
        </div>
    )
}

export default ColorChanger