import React from 'react';

class FormularioPersona extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            persona: {
                nombre: 'Raul',
                apellidos: 'Martínez',
                edad: 43
            },
            mensaje: 'Este es el mensaje',
            contador: 0
        }
    }

    handleClick = () => {
        console.log(this.state.persona);
    }

    modificarNombre = (event) => {
        this.setState({
            persona: {
                ...this.state.persona,
                nombre: event.target.value
            }
        });
    }

    modificarNombreV2 = (event) => {
        const personaCopy = { ...this.state.persona };
        personaCopy.nombre = event.target.value;
        this.setState({ persona: personaCopy });
    }

    modificarCampo = (event, field) => {
        const personaCopy = { ...this.state.persona };
        personaCopy[field] = event.target.value;
        this.setState({ persona: personaCopy });
    }

    modificarCampoV2 = (event, field) => {
        this.setState({
            persona: {
                ...this.state.persona,
                [field]: event.target.value
            }
        });
    }

    render() {
        return (
            <div>
                <div>
                    <p>{this.state.persona.nombre}</p>
                    <p>{this.state.persona.apellidos}</p>
                    <p>{this.state.persona.edad}</p>
                </div>
                <input
                    type="text"
                    value={this.state.persona.nombre}
                    onChange={e => this.modificarCampoV2(e, 'nombre')}
                />
                <input
                    type="text"
                    value={this.state.persona.apellidos}
                    onChange={e => this.modificarCampo(e, 'apellidos')}
                />
                <input
                    type="text"
                    value={this.state.persona.edad}
                    onChange={e => this.modificarCampo(e, 'edad')}
                />
                <button onClick={this.handleClick}>Enviar</button>
            </div>
        );
    }
}

export default FormularioPersona;