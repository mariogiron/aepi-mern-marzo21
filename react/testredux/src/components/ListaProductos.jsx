import { connect } from 'react-redux';
import * as actionTypes from '../store/actions';

function ListaProductos(props) {
    return (<div className="lista-productos">
        <h1>Lista de productos</h1>
        <p>Stock: {props.stock}</p>
        <button onClick={props.onAddProduct}>Agrega un producto</button>
        <button onClick={props.onChangeMensaje}>Cambia el mensaje</button>
    </div>);
}

const mapStateToProps = state => ({ stock: state.stock });

const mapDispatchToProps = (dispatch) => {
    return {
        onAddProduct: () => dispatch({ type: actionTypes.ADD_PRODUCT }),
        onChangeMensaje: () => dispatch({ type: actionTypes.MENSAJE_CHANGE, value: 'Valor fijo' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListaProductos);