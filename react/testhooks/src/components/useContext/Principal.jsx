import React, { useState } from 'react';
import Clase from "./Clase";
import Funcional from "./Funcional";
import { UserProvider } from './UserProvider';
import { useLocalStorage } from '../customHook/custom';

import { useDataContext } from '../useReducer/DataProvider';

export function Principal() {

    const { state, dispatch } = useDataContext();

    const [value, setValue] = useLocalStorage('token', '');

    function handleClick() {
        setValue((new Date()).toString());
    }

    return (
        <UserProvider>
            <div className="comp-principal">
                <p>{value}</p>
                <button onClick={() => dispatch({ type: 'CHANGE_ACTIVO' })}>Cambia activo</button>
                {state.activo ? 'Estado activo' : 'Estado inactivo'}
                <Funcional />
                <Clase />
                <button onClick={handleClick}>LOCAL STORAGE</button>
            </div>
        </UserProvider>
    );
}