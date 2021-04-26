import React, { useContext, useState } from 'react';

export const userContext = React.createContext();

export function useUserContext() {
    return useContext(userContext);
}

export function UserProvider({ children }) {

    const [user, setUser] = useState({ nombre: 'Sara', email: 'sara@gmail.com' });

    function cambiaLogin() {
        if (!user) {
            setUser({
                nombre: 'Mario',
                email: 'mario@gmail.com'
            });
        } else {
            setUser(null);
        }
    }

    return (
        <userContext.Provider value={{ user, cambiaLogin }}>
            {children}
        </userContext.Provider>
    );
}