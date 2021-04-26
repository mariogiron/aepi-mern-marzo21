import { connect } from 'react-redux';
import * as actionTypes from '../store/actions';

function Saludo(props) {
    return (
        <div className="saludo">
            <p>{props.msg}</p>
            <p>Stock en Saludo: {props.stock}</p>
            <input type="text" onChange={event => props.onMensajeChange(event.target.value)} />
        </div>
    );
}

const mapStateToProps = state => ({ msg: state.root.mensaje, stock: state.products.stock });

const mapDispatchToProps = dispatch => {
    return {
        onMensajeChange: inputText => dispatch({ type: actionTypes.MENSAJE_CHANGE, value: inputText })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Saludo);