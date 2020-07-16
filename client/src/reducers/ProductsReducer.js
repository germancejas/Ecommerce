import { productConstants } from '../constants/productConstants';

const inicialState = {
    products:[],
};

export  function ProductsReducer ( state= inicialState, action){
    if (action.type === productConstants.GET_PRODUCTS ){
        return {
            ...state,
            products: action.payload

        }
    }
    if (action.type === productConstants.GET_PRODUCT_BY_ID ){
        return {
            ...state,
            products: action.payload

        }
    }
    if (action.type === productConstants.MODIFY_PRODUCT ){
        return {
            ...state,
            products: action.payload

        }
    }
    if (action.type === productConstants.ADD_PRODUCT ){
        return {
            ...state,
            products: action.payload

        }
    }
    return state;
}