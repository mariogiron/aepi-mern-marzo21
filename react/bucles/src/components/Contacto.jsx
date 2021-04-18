function Contacto({ contacto, modificar, borrar }) {
    return (
        <div className="contacto" key={contacto.id}>
            <p>{contacto.nombre} {contacto.apellidos}</p>
            <p>{contacto.email}</p>
            <button onClick={() => borrar(contacto.id)}>Borrar</button>
            <input
                type="text"
                value={contacto.nombre}
                onChange={(event) => modificar(event, contacto.id)} />
        </div>
    );
}

export default Contacto;