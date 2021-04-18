import { useEffect, useState } from 'react';

export default function Contador() {

    const [cont, setCont] = useState(0);

    useEffect(() => {
        if (cont !== 0 && (cont % 3 === 0)) {
            alert('Múltiplo de 3');
        }
    }, [cont]);

    return (
        <div>
            <p>Valor contador: {cont}</p>
            <button onClick={() => setCont(cont + 1)}>Incrementa</button>
        </div>
    )
}