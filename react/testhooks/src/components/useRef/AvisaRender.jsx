import { useEffect, useState, useRef } from "react";

function AvisaRender() {

    const cont = useRef(0);
    const [mensaje, setMensaje] = useState('Hola');
    const prevMensaje = useRef('');
    const inputRef = useRef();

    useEffect(() => {
        // setCont(cont + 1);
        cont.current = cont.current + 1;
        console.log(inputRef.current.value);
    });

    useEffect(() => {
        prevMensaje.current = mensaje;
    }, [mensaje]);

    function handleClick() {
        inputRef.current.focus();
    }

    return (<div>
        <p>Count Render: {cont.current}</p>
        <p>Mensaje: {mensaje}</p>
        <p>Mensaje Anterior: {prevMensaje.current}</p>
        <input type="text" value={mensaje} onChange={(event) => setMensaje(event.target.value)} />
        <input type="text" ref={inputRef} />
        <button onClick={handleClick}>FOCUS!</button>
    </div>);

}

export default AvisaRender;