import { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import Curriculum from './Curriculum';

function Empleado(props) {
    // console.log(props.match.params);
    // console.log(props.location.search);

    const [activo, setActivo] = useState(false);

    let redirect = null;
    if (activo) {
        redirect = <Redirect to="/about" />;
    }

    return (
        <>
            {redirect}
            <h3>Detalle del empleado</h3>
            <Route path={props.match.url + "/curriculum"} component={Curriculum} />
        </>);
}

export default Empleado;