import axios from 'axios'
import { categoryConstants } from '../constants/categoryConstants';


export const categoryActions = {
    getCategories,
    addCategory,

}

const cc = categoryConstants


function getCategories() {
    return (dispatch, getState) =>{
      axios.get(`http://localhost:9000/categories`)
        .then(response => {
            dispatch({
                type: cc.GET_CATEGORIES,
                payload: response.data
            })
        })
    }
    
}

function addCategory() {
    return (dispatch, getState) =>{
      axios.get(`http://localhost:9000/categories`)
        .then(response => {
            dispatch({
                type: cc.ADD_CATEGORY,
                payload: response.data
            })
        })
    }
    
}