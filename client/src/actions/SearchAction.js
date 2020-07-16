import axios from 'axios'




const GET_PRODUCTS = function searchProducts(product) {
    return (dispatch, getState) =>{
      axios.get(`http://localhost:9000/products?search=${products}`)
        .then(response => {
            dispatch({
                type: GET_PRODUCTS,
                playload: response.data
            })
        })
    }
    
}

export default searchProducts;