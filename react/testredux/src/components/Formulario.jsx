import { useState } from "react";
import { connect } from "react-redux";
import * as actionTypes from '../store/actions';

function Formulario(props) {

    const [contacto, setContacto] = useState({
        nombre: '',
        telefono: ''
    });

    function onFieldChange(event, field) {
        setContacto({
            ...contacto,
            [field]: event.target.value
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.onContactoAdd(contacto);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre</label>
                    <input
                        type="text"
                        name="nombre"
                        id=""
                        onChange={(event) => {
                            onFieldChange(event, 'nombre');
                        }}
                    />
                </div>
                <div>
                    <label>Teléfono</label>
                    <input
                        type="text"
                        name="telefono"
                        id=""
                        onChange={(event) => {
                            onFieldChange(event, 'telefono');
                        }}
                    />
                </div>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        onContactoAdd: (newContact) => dispatch({ type: actionTypes.ADD_CONTACTO, value: newContact })
    }
}

export default connect(null, mapDispatchToProps)(Formulario);