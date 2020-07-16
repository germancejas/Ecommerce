import React, {useEffect} from 'react';
import Imagen from '../img/beerImage.jpg';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../actions/userActions';

    // const users = useSelector(state => state.users);
    // const user = useSelector(state => state.authentication.user);
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(userActions.getAll());
    // }, []);
    // function handleDeleteUser(id) {
    //     dispatch(userActions.delete(id));
    // }

   

export default function Home() {
    return (
        <div className="m-5">
             <h1>Hi !</h1>
             <p>You're logged in !!</p>
            <img src={Imagen} alt='imagen no encontrada' className="img-thumbnail" />
            <Link to='/products'>
                <div>
                    <button type="button" className="btn btn-secondary btn-lg m-2">Entrar</button>
                </div>
            </Link>
        </div>
    )
}