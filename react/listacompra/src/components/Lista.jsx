function Lista({ productos }) {
    return (
        <div className="productos">
            {productos.map((producto) => {
                const nombreMayus = producto.nombre.toUpperCase();
                return <div>
                    <p>{nombreMayus}</p>
                    <p>{producto.categoria}</p>
                </div>;
            })}
        </div >
    );
}

export default Lista;