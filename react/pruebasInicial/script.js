const nombre = 'Mario';

const element = <div>
    <h1 className="rojo">Hola {nombre}</h1>
    <h2>Subtitulo</h2>
    <p>Párrafo</p>
</div>;

ReactDOM.render(element, document.getElementById('root'));