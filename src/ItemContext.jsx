import React, { useState, createContext } from 'react';

export const ItemContext = createContext();

export const ItemProvider = (props) => {

    const [item, setItem] = useState([

    ]);

    return (
        <ItemContext.Provider value={[item, setItem]} >
            { props.children}
        </ItemContext.Provider>
    );

}