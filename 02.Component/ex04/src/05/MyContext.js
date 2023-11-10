import React, {createContext, useState, useContext} from 'react';

const _MyContext = createContext("");

export const MyContext = ({children}) => {
    const counter = useState(0);

    return (
        <_MyContext.Provider value={counter}>{children}</_MyContext.Provider>
    );
}

export const useCounterState = () => {
    return useContext(_MyContext);
}

