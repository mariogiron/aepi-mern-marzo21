import { useState, useCallback } from 'react';
import MuestraDoble from './MuestraDoble';

function Main() {

    const [numero, setNumero] = useState(4);
    const [mensaje, setMensaje] = useState('');

    const getDoble = useCallback(() => {
        return numero * 2;
    }, [numero]);

    return (<>
        <p>{numero}</p>
        <p>{mensaje}</p>
        <button onClick={() => setNumero(numero + 1)}>Incrementa</button>
        <input type="text" onChange={(event) => setMensaje(event.target.value)} />
        <MuestraDoble getDoble={getDoble} />
    </>)

}

export default Main;