import * as actionTypes from './actions';

const initialState = {
    logged: false,
    mensaje: 'Mensaje inicial',
    contactos: []
}

const reducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case actionTypes.MENSAJE_CHANGE: {
            return {
                ...state,
                mensaje: action.value
            }
        }
        case actionTypes.ADD_CONTACTO: {
            return {
                ...state,
                contactos: state.contactos.concat(action.value)
            }
        }
    }
    return state;
}

export default reducer;