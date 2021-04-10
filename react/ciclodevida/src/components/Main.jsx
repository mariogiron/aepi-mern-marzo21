import { Component } from 'react';

class Main extends Component {

    // Mounting
    constructor(props) {
        super(props);
        this.state = { contador: 0 };
        console.log('[Mounting] constructor');
    }

    // Mounting
    // Updating
    static getDerivedStateFromProps(props, state) {
        console.log('[Mounting/Updating] getDerivedStateFromProps', props, state);
        return state;
    }

    // Mounting
    componentDidMount() {
        console.log('[Mounting] componentDidMount');
    }

    // Updating
    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Updating] shouldComponentUpdate');
        return true;
    }

    // Updating
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Updating] getSnapshotBeforeUpdate');
        return { mensaje: 'Hola' };
    }

    // Updating
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Updating] componentDidUpdate', prevState, this.state);
        // if (this.state.contador % 2 == 0) {
        //     this.setState({ contador: this.state.contador + 1 });
        // }
    }

    componentWillUnmount() {
        // tareas de limpieza del componente
    }

    handleClick = () => {
        this.setState({ contador: this.state.contador + 1 });
    }

    // Mounting
    // Updating
    render() {
        console.log('[Mounting/Updating] render');
        return <>
            <h1>Componente Main {this.state.contador}</h1>
            <button onClick={this.handleClick}>Incrementa</button>
        </>;
    }
}

export default Main;