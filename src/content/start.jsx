import { createContext, useState } from "react";

export const State = createContext()


export const StatePriveder = ({ children }) => {
    const [kurslar, setKurslar] = useState('Kurslar');
    const data = {kurslar, setKurslar}

    return <State.Provider value={data}>{ children }</State.Provider>
}