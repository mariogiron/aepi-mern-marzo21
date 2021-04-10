import React from 'react';

class Despedida extends React.Component {
    render() {
        const nombre = this.props.nombre;
        return <h2>Adios {nombre}!</h2>;
    }
}

export default Despedida;