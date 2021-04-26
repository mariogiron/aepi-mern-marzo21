import './App.css';
import { connect } from 'react-redux';
import Formulario from './components/Formulario';
import ListaProductos from './components/ListaProductos';
import Saludo from './components/Saludo';

function App({ contactos }) {
  return (
    <div className="App">
      <div className="contactos">
        {contactos.map((contacto) => (
          <div className="contacto">
            <h4>{contacto.nombre}</h4>
            <p>{contacto.telefono}</p>
          </div>
        ))}
      </div>
      <ListaProductos />
      <Saludo />
      <Formulario />
    </div>
  );
}

const mapStateToProps = state => ({ contactos: state.root.contactos });

export default connect(mapStateToProps)(App);
