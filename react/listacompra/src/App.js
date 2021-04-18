import { useState } from 'react';
import './App.css';
import Formulario from './components/Formulario';
import Lista from './components/Lista';

function App() {

  const [productosAComprar, setProductosAComprar] = useState([]);

  const onProductoCreado = (productoNuevo) => {
    // const productosCopia = [...productosAComprar];
    // productosCopia.push(productoNuevo);
    // setProductosAComprar(productosCopia);

    setProductosAComprar([...productosAComprar, productoNuevo]);
  }

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-6">
          <Formulario productoCreado={onProductoCreado} />
        </div>
        <div className="col-6">
          <Lista productos={productosAComprar} />
        </div>
      </div>
    </div>
  );
}

export default App;
