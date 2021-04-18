import './App.css';
import { useState } from 'react';
import Main from './components/Main';
import Test from './components/Test';

function App() {

  const [estilos, setEstilos] = useState({
    backgroundColor: 'green',
    color: 'white'
  });

  const cambiarColor = (bgColor) => {
    setEstilos({
      ...estilos, backgroundColor: bgColor
    });
  }

  const cambiarColorTexto = (event) => {
    setEstilos({ ...estilos, color: event.target.value });
  }

  return (
    <div className="App">
      <div>
        <button onClick={() => cambiarColor('red')}>Rojo</button>
        <button onClick={() => cambiarColor('indigo')}>Indigo</button>
        <button onClick={() => cambiarColor('goldenrod')}>Goldenrod</button>
      </div>
      <div>
        <input type="text" value={estilos.color} onChange={cambiarColorTexto} />
      </div>
      <div>
        <input
          type="range"
          min="12" max="120" step="1"
          onChange={(event) => setEstilos({ ...estilos, fontSize: `${event.target.value}px` })} />
      </div>

      <p style={estilos}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, molestiae.</p>

      <Main />

      <Test />

    </div >
  );
}

export default App;