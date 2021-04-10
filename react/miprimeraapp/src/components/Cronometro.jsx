import { Component } from 'react';

class Cronometro extends Component {

    constructor(props) {
        super(props);

        this.state = {
            contador: 10,
            mensaje: 'Este es mi mensaje'
        };

        // No es la mejor manera de hacerlo!
        const interval = setInterval(() => {
            // Modificamos el estado a través de la función setState
            this.setState({
                contador: this.state.contador - 1
            });

            // Si el contador es menor que 5 modifico el mensaje
            if (this.state.contador < 5) {
                this.setState({ mensaje: 'La cuenta es menor que 5' });
            }

            if (this.state.contador === 0) {
                clearInterval(interval);
            }
        }, 1000);
    }

    render() {
        return <div>
            <h2>{this.state.contador}</h2>
            <h3>{this.state.mensaje}</h3>
        </div>;
    }
}

export default Cronometro;