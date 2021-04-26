import logo from './logo.svg';
import './App.css';
import Formulario from './components/Formulario';
import ListaClientes from './components/ListaClientes';

function App() {
  return (
    <div className="App">
      <Formulario />
      <ListaClientes />
    </div>
  );
}

export default App;
