import React from 'react';
import style from '../Css/Forms.module.css';
//import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { productActions } from '../actions/productActions.js';
import { useEffect, useState } from 'react';
import { categoryActions } from '../actions/categoryActions.js';
const ca = categoryActions;
const pc = productActions;


export default function Form() {
    
    const dispatch = useDispatch();
    const categories = useSelector(store => store.categories)
    let cats = categories.categories
    
    useEffect(() => dispatch(ca.getCategories()),[]);
           
    const [input, setInput] = useState({
        brand:"",
        name: "",
        package: "",
        price: 0,
        description: "",
        imageUrl: "",
        categoryName:[]
    })

    const handleInputChange = function(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
                       
        })
    }
    
    const handleSubmit = function (e) {
        e.preventDefault()
        dispatch(() => dispatch(pc.addProduct(input)));
    }
    console.log(input)
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
                        <input name='brand' type="text" className="form-control" id="inputBrand" required />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputName">Name</label>
                        <input name='name' type="text" className="form-control" id="inputName" required />
                    </div>
                </div>
                <div className="form-group">
                    <label for="inputDescription">Description</label>
                    <input name='description' type="text" className="form-control" id="inputDescription"  required />
                </div>
                <div className="form-row">

                    <div className="form-group col-md-4">
                        <label htmlFor="inputPackage">Package</label>
                        <select name='package' id="inputPackage" className="form-control" required>
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
                        <input name='price' type="text" className="form-control" id="inputPrice" required />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlFile1">Upload your product image</label>
                    <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                </div>
                
                <div class="form-group">
                    <label for="exampleFormControlSelect2">Select category</label>
                    <select name="categoryName" multiple className="form-control" id="inputCategoryId">
                        {showCategories(cats)}
                    </select>

                    
                </div>
                <Link to='/products'>
                    <input type="submit" onClick={handleSubmit} />
                </Link>
            </form>
        </div>
    )
}
