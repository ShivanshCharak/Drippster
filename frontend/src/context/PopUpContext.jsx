import React, { useState, createContext } from 'react';

// Create the context
export const PopUpContext = createContext();

// Create the provider
export const PopUpContextProvider = ({ children }) => {
    const [popUp, setPopUp] = useState(false);

    return (
        <PopUpContext.Provider value={{ popUp, setPopUp }}>
            {children}
        </PopUpContext.Provider>
    );
};

