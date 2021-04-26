import { useDataContext } from '../useReducer/DataProvider';
import { useUserContext } from './UserProvider';

function Funcional() {

    const data = useUserContext();
    const { state } = useDataContext();

    return (
        <div className="comp-funcional">
            <p>Componente Funcional</p>
            {data.user && <p>Tu email es: {data.user.email}</p>}
            {state.activo && <p>Tu estado es ACTIVO</p>}
            <button onClick={data.cambiaLogin}>Cambia Login</button>
        </div>
    );
}

export default Funcional;