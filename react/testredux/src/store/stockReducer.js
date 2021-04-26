import * as actionTypes from './actions';

const initialState = {
    stock: 100
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
    }
    return state;
}

export default reducer;