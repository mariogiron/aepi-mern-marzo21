import { useEffect, useState } from 'react';

function Mensaje(props) {

    const [cont, setCont] = useState(0);

    useEffect(() => {
        console.log('Se modifica el mensaje');
    }, [props.texto]);

    useEffect(() => {
        console.log('Se modifica el contador');
    }, [cont]);

    return (
        <div>
            <p>El mensaje es: {props.texto}</p>
            <p>Contador: {cont}</p>
            <button onClick={() => setCont(cont + 1)}>Incrementa</button>
        </div>
    )
}

export default Mensaje;