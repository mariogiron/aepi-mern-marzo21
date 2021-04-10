import { useState } from 'react';
import './App.css';
import Lista from './components/Lista';

function App() {

  const [mostrar, setMostrar] = useState(true);

  let contenido = null;
  if (mostrar) {
    contenido = <p className="tres">Otro contenido</p>;
  } else {
    contenido = <p className="tres">Otro contenido FALSE</p>;
  }

  return (
    <div className="App">

      <Lista />

      <button onClick={e => setMostrar(!mostrar)}>Mostrar / Ocultar</button>

      {
        mostrar ?
          <p className="uno">Contenido</p> :
          <p className="uno">No hay contenido</p>
      }

      {
        mostrar ?
          <p className="dos">Se muestra el contenido</p> :
          null
      }

      {contenido}

      {mostrar &&
        <p className="cuatro">Más contenido</p>}

      {(() => {
        if (mostrar) {
          return <p className="cinco">Último contenido</p>;
        }
      })()}
    </div>
  );
}

export default App;
