const nombre = 'Mario';
const identificador = 'mainParrafo';
let color = 'indigo';

const persona = {
    nombre: 'Rocío',
    apellidos: 'García',
    edad: 35
}

function nombreCompleto(pPersona) {
    return pPersona.nombre + ' ' + pPersona.apellidos;
}

function saludar(pPersona) {
    if (pPersona) {
        return <h1 className="rojo">Hola {nombreCompleto(pPersona)}</h1>;
    } else {
        return <h1>Hola persona desconocida</h1>;
    }
}

function saludar2(pPersona) {
    return pPersona ? <h1>Hola {nombreCompleto(pPersona)}</h1> : <h1>Hola desconocido</h1>;
}

const randomNum = Math.random();
if (randomNum > 0.5) {
    color = 'red';
} else {
    color = 'yellow';
}

const atributos = {
    src: 'https://i.pravatar.cc/300',
    className: 'imagen',
    width: (randomNum > 0.5) ? 500 : 100
};

const element = <div>
    {saludar2()}
    <h2 style={{ backgroundColor: color, fontSize: '34px' }}>Subtitulo</h2>
    {/* Comentario sobre el código */}
    <p id={identificador}>Párrafo</p>
    <img {...atributos} />
</div >;

// Llamadas recursivas para la creación de los diferentes elementos

// const elementP = React.createElement('div', { id: identificador }, React.createElement('p', {}, 'Contenido del párrafo'));

ReactDOM.render(element, document.getElementById('root'));