import axios from 'axios';
import { productConstants} from '../constants/productConstants'

// export const REMOVE_ITEM_FROM_ORDER = 'REMOVE_ITEM_FROM_ORDER';
export const productActions = {
    searchProducts,
    getProducts,
    getProductById,
    modifyProduct,
    addProduct,
    getProductByCategory,
    addItemToOrder,
    deleteItemFromOrder
}
 
 
 const pc = productConstants
 
function searchProducts(products) {
    return (dispatch, getState) =>{
      axios.get(`http://localhost:9000/products?search=${products}`)
        .then(response => {
            dispatch({
                type: pc.SEARCH_PRODUCTS,
                playload: response.data
            })
        })
    }
    
}
 
function getProducts() {
    return (dispatch, getState) => {
        axios.get(`http://localhost:9000/products`)
            .then(response => {
                dispatch({
                    type: pc.GET_PRODUCTS,
                    payload: response.data
                })
            })
    }

}

function getProductById(id) {
    return (dispatch, getState) => {
        axios.get(`http://localhost:9000/products/${id}`)
            .then(response => {
                dispatch({
                    type: pc.GET_PRODUCT_BY_ID,
                    payload: response.data
                })
            })
    }

}

function modifyProduct(id,data) {
    return (dispatch, getState) => {
        axios.put(`http://localhost:9000/products/${id}`, data)
            .then(response => {
                dispatch({
                    type: pc.MODIFY_PRODUCT,
                    payload: response.data
                })
            })
    }

}

function addProduct(product) {
    return (dispatch, getState) => {
        axios.post(`http://localhost:9000/products/`, product)
            .then(response => {
                dispatch({
                    type: pc.ADD_PRODUCT,
                    payload: response.data
                })
            })
    }

}

function getProductByCategory() {
    return (dispatch, getState) => {
        axios.get(`http://localhost:9000/products/findByCat`)
            .then(response => {
                dispatch({
                    type: pc.GET_PRODUCT_BY_CATEGORY,
                    payload: response.data
                })
            })
    }

}

function addItemToOrder (id){
    return (dispatch, getState) => {
      axios.get('http://localhost:9000/products/' + id)
         .then(response => {
              dispatch({
              type: pc.ADD_ITEM_TO_ORDER,
                payload: response.data
            });
        })
    };
}
function deleteItemFromOrder (id){
    return (dispatch) => {
      axios.delete('http://localhost:9000/products/' + id)
         .then(response => {
              dispatch({
              type: pc.DELETE_ITEM_FROM_ORDER,
                payload: response.data
            })
        })
    }
}
