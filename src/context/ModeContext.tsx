import { createContext, useState } from "react";

// Tipo do context
export type ModeContextType = {
    mode: string;
    toggleMode: () => void;
}

const ModeContext = createContext<ModeContextType|null>(null)

export const ModeContextProvider = ({children}:any) => {

    const [mode, setMode] = useState<string>('movie')

    const toggleMode = () => {
        setMode(prevMode => prevMode === 'game' ? 'movie' : 'game')
    }

    return (
        <ModeContext.Provider value={{mode, toggleMode}}>
            {children}
        </ModeContext.Provider>
    )

}

export default ModeContext