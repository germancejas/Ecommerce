import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { putUser, deleteUser } from '../actions/userActions.js';
import { useEffect } from 'react';
import { useState } from 'react';

export default function FormEditUser(props) {
    // const { register, handleSubmit, watch, errors } = useForm();
    const dispatch = useDispatch();
    const User = useSelector(store => store.user)
    const Orders = useSelector(store => store.orders)
    
    
    
    
    const handleSubmit = function (e) {
        e.preventDefault();
        dispatch(putUser(state));
    }

    const [state, setState] = useState({
        userName: "",
        name: "",
        lastName: "",
        email: "",
        password: "",
        age: "",
        dni: "",
        address: "",
        orders:""
    });
    const handleInputChange = function (e) {
        setState({
            ...state,
            [e.target.name]: e.target.value,

        })
    }
    const onClose = function (e){
        e.preventDefault();
        dispatch(deleteUser(state));
    }
    return (
        <div>
            <form onSubmit={handleSubmit} onChange={handleInputChange}>
                <div class="row m-5">
                    <div class="col">
                        <input name='userName' type="text" class="form-control" placeholder="User Name" required />
                    </div>
                    <div class="col">
                        <input name='name' type="text" class="form-control" placeholder="Name" required />
                    </div>

                </div>
                <div class="row m-5">
                    <div class="col">
                        <input name='lastName' type="text" class="form-control" placeholder="Last name" required />
                    </div>
                    <div class="col">
                        <input name='email' type="text" class="form-control" placeholder="Email" required />
                    </div>

                </div>
                <div class="row m-5">
                    <div class="col">
                        <input name='password' type="text" class="form-control" placeholder="Password" required />
                    </div>
                    <div class="col">
                        <input name='age' type="text" class="form-control" placeholder="Age" required />
                    </div>

                </div>
                <div class="row m-5">
                    <div class="col">
                        <input name='dni' type="text" class="form-control" placeholder="DNI" required />
                    </div>
                    <div class="col">
                        <input name='address' type="text" class="form-control" placeholder="Address" required />
                    </div>
                    <button type="onClick" onClose={onClose} className="btn btn-primary col-6" >Eliminar</button>
                </div>
                <button type="submit"  className="btn btn-primary col-6" >Submit</button>
            </form>
        </div>
    )
}