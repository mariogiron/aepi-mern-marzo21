import React, { useReducer, useContext } from 'react';

const DataContext = React.createContext();

export function useDataContext() {
    return useContext(DataContext);
}

const initialState = {
    mensaje: '',
    activo: true
}

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'CHANGE_ACTIVO': {
            return {
                ...state,
                activo: !state.activo
            }
        }
    }
    return state;
}

export function DataProvider({ children }) {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <DataContext.Provider value={{ state, dispatch }}>
            {children}
        </DataContext.Provider>
    );
}