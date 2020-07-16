import React from 'react';
import Image from '../img/beerProduct.jpg';
import style from '../Css/Product.module.css';
import { Link } from 'react-router-dom';
import { productActions } from '../actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const pa = productActions

export default function ProductItem(match) {
    const dispatch = useDispatch();
    const products = useSelector(store => store.products);
    
        
    useEffect(() => dispatch(pa.getProductById(match.match.params.id)),[])
        
    let categories = products.products.categories;
    
    function showCategories(categories){
        if(categories !== undefined) {
            return categories.map(c =>
                <li>
                    {c.name}
                </li>)
        }
    }
    
    return (
        <div>
            <div className={style.productContainer}>
                <div>
                    <img src={Image} alt={Image} />
                    <div>
                        <h5 className="card-title"> {products.products.name} </h5>
                        <p className="card-text"> {products.products.brand} </p>
                        <p className="card-text">
                            <small className="text-muted">
                                {products.products.description}
                            </small>
                        </p>
                        <ul className="card-text">
                        {showCategories(categories)} 
                        </ul>
                    </div>
                </div>
            </div>
            <div className={style.container}>
                <div className={style.btn}>
                    <Link to={`/products/${products.products.id}/edit`} >
                        <button type="button"
                            className="btn btn-secondary btn-sm">
                            Edit
                    </button>
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}