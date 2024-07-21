import { createContext, useState } from "react";

export type ThemeContextType = {
    theme:string,
    updateTheme:(newTheme:string)=>void
    possibleThemes:string[]
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
            sky
            indigo
            violet
            fuchsia
            pink
            rose
    */

    const possibleThemes = [
        'slate',
        'stone',
        'red',
        'amber',
        'yellow',
        'lime',
        'emerald',
        'teal',
        'cyan',
        'sky',
        'indigo',
        'violet',
        'fuchsia',
        'pink',
        'rose',
    ]

    const [theme, setTheme] = useState<string>('slate')

    const updateTheme = (newTheme:string) => {
        setTheme(newTheme)
    }

    return (
        <ThemeContext.Provider value={
                {
                    theme,
                    updateTheme,
                    possibleThemes
                }
            }>

            {children}

        </ThemeContext.Provider>
    )

}

export default ThemeContext