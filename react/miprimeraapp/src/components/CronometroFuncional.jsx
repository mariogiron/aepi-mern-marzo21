import { useState } from 'react';

function CronometroFuncional() {

    // const [state, setState] = useState({
    //     contador: 0,
    //     mensaje: 'Dentro de componente Funcional'
    // });

    const [contador, setContador] = useState(0);
    const [mensaje, setMensaje] = useState('Mensaje del componente');

    function handleClick(event, pTexto) {
        // Cada vez que utilicemos los métodos set, se fuerza la renderización del componente
        console.log(pTexto);
        setContador(contador + 1);
    }

    return <div>
        <h2>CronometroFuncional: {contador}</h2>
        <h3>Mensaje: {mensaje}</h3>
        <button onClick={(event) => {
            handleClick(event, 'Texto desde dentro del evento');
        }}>Incrementa</button>
    </div>;

}

export default CronometroFuncional;