import React, { createContext, useEffect, useState } from 'react';

const UserDataContext = createContext();

const UserDataContextProvider = ({ children }) => {
    // const [test, setTest] = useState([]);
    return (
        <UserDataContext.Provider value={null}>
            {children}
        </UserDataContext.Provider>
    );
};

export { UserDataContext, UserDataContextProvider };