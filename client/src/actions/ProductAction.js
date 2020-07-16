import axios from 'axios';

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const MODIFY_PRODUCT = 'MODIFY_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCT_BY_ID = 'GET_PRODUCT_BY_ID';
export const GET_PRODUCT_BY_CATEGORY = 'GET_PRODUCT_BY_CATEGORY';
export const ADD_ITEM_TO_ORDER = 'ADD_ITEM_TO_ORDER';
export const DELETE_ITEM_FROM_ORDER = 'DELETE_ITEM_FROM_ORDER';
// export const REMOVE_ITEM_FROM_ORDER = 'REMOVE_ITEM_FROM_ORDER';

export function getProducts() {
    return (dispatch, getState) => {
        axios.get(`http://localhost:9000/products`)
            .then(response => {
                dispatch({
                    type: GET_PRODUCTS,
                    payload: response.data
                })
            })
    }

}

export function getProductById(id) {
    return (dispatch, getState) => {
        axios.get(`http://localhost:9000/products/${id}`)
            .then(response => {
                dispatch({
                    type: GET_PRODUCT_BY_ID,
                    payload: response.data
                })
            })
    }

}

export function modifyProduct(id,data) {
    return (dispatch, getState) => {
        axios.put(`http://localhost:9000/products/${id}`, data)
            .then(response => {
                dispatch({
                    type: MODIFY_PRODUCT,
                    payload: response.data
                })
            })
    }

}

export function addProduct(product) {
    return (dispatch, getState) => {
        axios.post(`http://localhost:9000/products/`, product)
            .then(response => {
                dispatch({
                    type: ADD_PRODUCT,
                    payload: response.data
                })
            })
    }

}

export function getProductByCategory() {
    return (dispatch, getState) => {
        axios.get(`http://localhost:9000/products/findByCat`)
            .then(response => {
                dispatch({
                    type: GET_PRODUCT_BY_CATEGORY,
                    payload: response.data
                })
            })
    }

}

export function addItemToOrder (id){
    return (dispatch, getState) => {
      axios.get('http://localhost:9000/products/' + id)
         .then(response => {
              dispatch({
              type: ADD_ITEM_TO_ORDER,
                payload: response.data
            });
        })
    };
}

export function deleteItemFromOrder (id){
    return (dispatch) => {
      axios.delete('http://localhost:9000/products/' + id)
         .then(response => {
              dispatch({
              type: DELETE_ITEM_FROM_ORDER,
                payload: response.data
            })
        })
    }
}
