import { useState } from 'react';

function CambiaValores() {

    const [state, setState] = useState({
        mensaje: 'Mensaje inicial',
        cont: 0
    });

    const cambiarMensaje = () => {
        setState(state => {
            return { ...state, mensaje: 'Nuevo mensaje' };
        });
    }

    const cambiarContador = () => {
        setState(state => {
            return { ...state, cont: 43 };
        });
    }

    const handleClick = () => {
        cambiarMensaje();
        setTimeout(cambiarContador, 2000);
    }

    return (
        <div>
            <p>Mensaje: {state.mensaje}</p>
            <p>Contador: {state.cont}</p>
            <button onClick={handleClick}>Pulsa</button>
        </div>
    )

}

export default CambiaValores;