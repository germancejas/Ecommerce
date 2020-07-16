
import React from 'react';
import style from '../Css/Forms.module.css';
// import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { productActions } from '../actions/productActions.js';
import { useEffect, useState } from 'react';
import { categoryActions } from '../actions/categoryActions';

const ca = categoryActions
const pa = productActions

export default function Form(match) {
    const dispatch = useDispatch();
    const products = useSelector(store => store.products)
    const categories = useSelector(store => store.categories)
    
    let cats = categories.categories
    let prods = products.products

    useEffect(() => {
        dispatch(pa.getProductById(match.match.params.id))
        dispatch(ca.getCategories())
    },[]);  
                    const [input, setInput] = useState({
                        brand:"",
                        name: "",
                        package: "",
                        price: 0,
                        description: "",
                        imageUrl: "",
                        categoryName:[]
                    })
    
    console.log(input)
    const handleInputChange = function(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
                       
        })
    }
    const handleSubmit = function (e) {
        e.preventDefault()
        dispatch(() => dispatch(pa.modifyProduct(match.match.params.id, input)));
    }
    function showCategories (categories){
        if (categories !== undefined){
            return categories.map(c => 
                <option>
                   {c.name}
                </option>)
        }
    }

    return (
            <div className={style.container}>
            <form onChange={handleInputChange} > 
                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label htmlFor="inputBrand">Brand</label>
                        <input name='brand' type="text" className="form-control" id="inputBrand" defaultValue={prods.brand} required />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputName">Name</label>
                        <input name='name' type="text" className="form-control" id="inputName" defaultValue={prods.name} required />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="inputDescription">Description</label>
                    <input name='description' type="text" className="form-control" id="inputDescription" defaultValue={prods.description} required />
                </div>  ​
                <div className="form-group col-md-4">
                    <label htmlFor="inputPackage">Package</label>
                    <select name='package' id="inputPackage"  className="form-control" required>
                        <option value>Choose...</option>
                        <option>473cc</option>
                        <option>710cc</option>
                        <option>745cc</option>
                        <option>750cc</option>
                        <option>1000cc</option>
                    </select>
                </div>
                <div className="form-group col-md-2">
                    <label htmlFor="inputPrice">Price</label>
                    <input name='price' type="text" className="form-control" id="inputPrice" defaultValue={prods.price} required />
                </div>
                
                <div className="form-group">
                    <label htmlFor="exampleFormControlFile1">Upload your product image</label>
                    <input name="image" type="file" className="form-control-file" id="exampleFormControlFile1" />
                </div>
                <div className="form-group2">
                    <label for="exampleFormControlSelect2">Select category</label>
                    <select name="categoryName" className='categoryId' multiple className="form-control" id="inputCategoryId">
                        {showCategories(cats)}
                    </select>
                </div>
                <Link to={`/products/${prods.id}`}>
                    <input type="submit" onClick={handleSubmit} />
                </Link>
            </form>
        </div>
    )
}