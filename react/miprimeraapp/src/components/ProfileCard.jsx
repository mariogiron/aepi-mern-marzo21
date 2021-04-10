import { Component } from 'react';

class ProfileCard extends Component {

    constructor(props) {
        super(props);
        // Cada vez que modificamos el contenido de STATE, forzamos el render del componente
        this.state = {
            titulo: 'Este es el título',
            descripcion: 'Descripción del profile'
        }
    }

    render() {
        return <div>
            <h3>{this.state.titulo}</h3>
            <p>{this.state.descripcion}</p>
        </div>
    }
}

export default ProfileCard;