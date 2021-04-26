import { useEffect } from "react";

function MuestraDoble({ getDoble }) {

    useEffect(() => {
        console.log('Render de MuestraDoble');
    }, [getDoble]);

    return <h2>{getDoble()}</h2>;
}

export default MuestraDoble;