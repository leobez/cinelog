import { createContext, useState } from "react";

export type ThemeContextType = {
    theme:string|null,
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

    const [theme, setTheme] = useState<string|null>(localStorage.getItem('theme') !== null ? localStorage.getItem('theme') : 'slate')

    const updateTheme = (newTheme:string) => {
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
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