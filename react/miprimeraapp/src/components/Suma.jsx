import { useState } from "react";

const Suma = ({ numA, numB, sumaFinalizada }) => {

    const [resultado, setResultado] = useState(0);

    const handleClick = () => {
        const res = numA + numB;
        setResultado(res);
        sumaFinalizada(res);
    }

    return (
        <div>
            <p>{numA} + {numB}</p>
            <button onClick={handleClick}>SUMA</button>
            <p>{resultado}</p>
        </div>
    );
}

export default Suma;