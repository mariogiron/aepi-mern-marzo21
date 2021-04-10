import { useState } from "react";

function Lista() {

    const [animales, setAnimales] = useState(['perro', 'pájaro', 'gato', 'caballo']);

    return (
        <div>
            <h3>Lista de animales</h3>
            <ul>
                {animales.map(animal => <li>{animal}</li>)}
            </ul>
        </div>
    );

}

export default Lista;