import { createContext, useState, type ReactNode, type SetStateAction } from "react";
import type React from "react";

interface ContextProps {
    selected: string,
    setSelected: React.Dispatch<SetStateAction<string>>
}

export const SelectedContext = createContext<ContextProps | null>(null)

interface ProviderProps {
    children: ReactNode
}

export function SelectedProvider({children}:ProviderProps){

    const [selected, setSelected] = useState<string>("All")

    return(

        <SelectedContext.Provider value={{selected, setSelected}}>
            {children}
        </SelectedContext.Provider>
    )
} 