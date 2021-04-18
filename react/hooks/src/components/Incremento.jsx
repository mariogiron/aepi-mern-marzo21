import { useState, useEffect } from 'react';

function Incremento() {

    const [contador, setContador] = useState(0);

    const incrementar = () => {
        console.log('Incrementar');
        setContador(contador => contador + 1);
    }

    const handleClick = () => {
        incrementar();
        incrementar();
        incrementar();
    }

    return <div>
        <p>Cont: {contador}</p>
        <button onClick={handleClick}>Pulsa!</button>
    </div>

}

export default Incremento;