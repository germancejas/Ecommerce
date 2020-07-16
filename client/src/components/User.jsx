import React from 'react';
import { Link } from 'react-router-dom';
import { userActions } from '../actions/userActions'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';


export default function User(match) {
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);

    useEffect(() => dispatch(userActions.getUser(match.params.id)),[])



    return (
        <div >
            <div className="card col m-4">
                <div >
                    <div class="card-body">
                        <h5 className="card-title"> {user.userName}</h5>
                        <h1 className="user-name">{user.name}</h1>
                        <h1 className="user-name">{user.lastName}</h1>
                        <h1 className="user-name">{user.email}</h1>
                        <h1 className="user-name">{user.age}</h1>
                        <h1 className="user-name">{user.dni}</h1>
                        <h1 className="user-name">{user.address}</h1>
                        <h1 className="user-name">{user.orders}</h1>
                           <Link to={`/user/${user.id}/edit`} >
                            <button type="button" className="btn btn-secondary btn-sm">
                                Edit
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};
