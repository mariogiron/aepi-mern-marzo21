import { useState } from 'react';

function Formulario() {
    // Two Way Binding

    const [mensaje, setMensaje] = useState('Prueba inicial');

    function modificarMensaje(event) {
        setMensaje(event.target.value);
    }

    return (
        <>
            <p>{mensaje}</p>
            <input type="text" value={mensaje} onChange={modificarMensaje} />
        </>
    );
}

export default Formulario;