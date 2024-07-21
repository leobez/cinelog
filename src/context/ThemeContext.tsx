import { createContext, useState } from "react";

export type ThemeContextType = {
    theme:string,
    updateTheme:(newTheme:string)=>void
}

const ThemeContext = createContext<ThemeContextType|null>(null)

export const ThemeContextProvider = ({children}:any) => {

    /* 
        Possible themes:
            slate
            stone
            amber
            lime
            emerald
            teal
            cyan
            sky'
            indigo
            violet
            fuchsia
            pink
            rose
    */

    const [theme, setTheme] = useState<string>('rose')

    const updateTheme = (newTheme:string) => {
        setTheme(newTheme)
    }

    return (
        <ThemeContext.Provider value={
                {
                    theme,
                    updateTheme
                }
            }>

            {children}

        </ThemeContext.Provider>
    )

}

export default ThemeContext