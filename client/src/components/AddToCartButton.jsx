import React from 'react';
import { productActions } from '../actions/productActions.js';

const pa = productActions;

export default function AddtoCartButton ({id, name}) {  
    function AddItem(){
        pa.addItemToOrder(id) 
        if (name === 'Add to cart') {
        alert('Item successfully added to cart')}
    }
    return ( 
    <div className='addItemToOrder'>
        <button onClick={AddItem}>
             {name}
        </button>
    </div>
    )
}
