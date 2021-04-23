import * as actionTypes from './actions';

const initialState = {
    stock: 100,
    logged: false,
    mensaje: 'Mensaje inicial'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_PRODUCT: {
            return {
                ...state,
                stock: state.stock + 1
            }
        }
        case actionTypes.REMOVE_PRODUCT: {
            return {
                ...state,
                stock: state.stock - 1
            }
        }
        case actionTypes.MENSAJE_CHANGE: {
            return {
                ...state,
                mensaje: action.value
            }
        }
    }
    return state;
}

export default reducer;