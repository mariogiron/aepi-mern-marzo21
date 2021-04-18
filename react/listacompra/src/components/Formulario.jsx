import { useState } from 'react';

function Formulario(props) {

    const [producto, setProducto] = useState({
        nombre: '',
        categoria: 'carniceria'
    })

    const handleChange = (event) => {
        setProducto({
            ...producto,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.productoCreado(producto);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group mb-4">
                <label>Nombre del producto</label>
                <input type="text"
                    className="form-control"
                    value={producto.nombre}
                    name="nombre"
                    onChange={handleChange}
                />
            </div>
            <div className="form-group mb-4">
                <label>Categoría</label>
                <select
                    name="categoria"
                    className="form-control"
                    value={producto.categoria}
                    onChange={handleChange}
                >
                    <option value="hogar">Hogar</option>
                    <option value="pescaderia">Pescadería</option>
                    <option value="carniceria">Carnicería</option>
                    <option value="panaderia">Panadería</option>
                </select>
            </div>
            <input type="submit" value="Enviar" className="btn btn-info" />
        </form>
    );
}

export default Formulario;