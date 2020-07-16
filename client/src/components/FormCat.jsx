import React from 'react';
import style from '../Css/Forms.module.css';
//import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { categoryActions } from '../actions/categoryActions.js';
import { useEffect } from 'react';

const ca = categoryActions;

export default function FormCat(match) {

  const dispatch = useDispatch();
  const categories = useSelector(store => store.categories)
  
  

      useEffect(() => dispatch(ca.addCategory(match.match.params.id)),[]);

  

    return (
        <div className={style.container}>
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputName">Name</label>
                        <input name='name' type="text" className="form-control" id="inputName"  required />
                    </div>
                </div>
                <input type="submit" />
            </form>
        </div>
    )
}