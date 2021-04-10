function Saludo({ nombre, children }) {
    console.log(children);
    return <h3>Hola a {nombre}</h3>;
}

export default Saludo;