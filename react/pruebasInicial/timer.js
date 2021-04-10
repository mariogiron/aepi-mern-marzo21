function fecha() {
    const element = (
        <div>
            <h2>Fecha:</h2>
            <p>{new Date().toLocaleTimeString()}</p>
        </div>
    );
    ReactDOM.render(element, document.getElementById('fecha'));
}

setInterval(fecha, 1000);