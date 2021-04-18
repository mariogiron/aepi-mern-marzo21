import { Component } from 'react';
import Contacto from './Contacto';

class Lista extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contactos: [
                { id: '001', nombre: 'Pedro', apellidos: 'Martín', email: 'pedro@gmail.com', activo: true },
                { id: '002', nombre: 'Sara', apellidos: 'Ramírez', email: 'sara@gmail.com', activo: true },
                { id: '003', nombre: 'Lara', apellidos: 'Robles', email: 'lara@gmail.com', activo: false },
                { id: '004', nombre: 'Luis', apellidos: 'García', email: 'luis@gmail.com', activo: false },
                { id: '005', nombre: 'Almudena', apellidos: 'Díaz', email: 'almudena@gmail.com', activo: true },
            ]
        }
    }

    borrarContacto = (index) => {
        //! No se modifica directamente los objetos contenidos en el STATE
        // Creamos un objeto nuevo igual al que tenemos en el STATE
        // Modificamos el objeto nuevo
        // Asignamos el objeto nuevo al STATE
        // const nuevoContactos = this.state.contactos.slice();

        const nuevoContactos = this.state.contactos.filter((contacto) => {
            return contacto.id != index
        });
        this.setState({ contactos: nuevoContactos });

        // const nuevoContactos = [...this.state.contactos];
        // nuevoContactos.splice(index, 1);
        // this.setState({
        //     contactos: nuevoContactos
        // });
    }

    modificarNombre = (event, index) => {
        // const contacto = { ...this.state.contactos[index] };
        const contacto = this.state.contactos.find(contacto => contacto.id === index);
        contacto.nombre = event.target.value;

        const copiaContactos = [...this.state.contactos];
        copiaContactos[index] = contacto;
        this.setState({ contactos: copiaContactos });
    }

    render() {
        return (
            <div className="contactos">
                {this.state.contactos.map((item, index) => (
                    <Contacto
                        contacto={item}
                        modificar={this.modificarNombre}
                        borrar={this.borrarContacto}
                    />
                ))}
            </div>
        );
    }

}

export default Lista;