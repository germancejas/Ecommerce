import { categoryConstants }from '../constants/categoryConstants';

const cc = categoryConstants

const inicialState = {
    categories:[],
};

export  function CategoryReducer ( state= inicialState, action){
    if (action.type === cc.GET_CATEGORIES ){
        return {
            ...state,
            categories: action.payload

        }
    }
    if (action.type === cc.ADD_CATEGORY ){
        return {
            ...state,
            categories: action.payload

        }
    }
    return state;
}