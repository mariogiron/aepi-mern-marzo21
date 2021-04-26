import React from 'react';
import { userContext } from './UserProvider';

class Clase extends React.Component {
    render() {
        return (
            <userContext.Consumer>
                {data => (
                    <div className="comp-clase">
                        <p>Component de Clase</p>
                        {data.user && <p>Hola {data.user.nombre}</p>}
                    </div>
                )}
            </userContext.Consumer>
        );
    }
}

export default Clase;