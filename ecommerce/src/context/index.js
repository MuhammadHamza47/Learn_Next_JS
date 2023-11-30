'use client'
import {createContext} from 'react'
export const GloablContext = createContext(null);

export default function GlobalState({children}){

    return(
        <GloablContext.Provider value={{}}>{children}</GloablContext.Provider>
    )
}
