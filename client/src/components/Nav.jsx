import React from 'react';
import Logo from '../img/beerIcon.png'
import SearchBar from './SearchBar.jsx';
import '../Css/Nav.css';
import { Link } from 'react-router-dom';
import carrito from '../img/logoshop.png'
import style from '../Css/Nav.css';

function Nav({ onSearch }) {
    return (
        <div className={style.container}>
            <nav className="navbar navbar-dark bg-light">
                <Link to='/'>
                    <div className="navbar-brand text-dark" href="#">
                        <img src={Logo} width="60" height="60" alt="" loading="lazy" /> Beer O'clock!
            </div>
                </Link>
                <SearchBar onSearch={onSearch} />
                <Link to='/formuser'>
                    <div className="navbar-brand text-dark" href="#">
                        <p>Sign up</p>
                    </div>
                </Link>
                <Link to='/admin'>
                    <div className="navbar-brand text-dark" href="#">
                        <p>Admin</p>
                    </div>
                </Link>
                <Link to={`/user/:id`}>
                    <div className="navbar-brand text-dark" href="#">
                        <p>User</p>
                    </div>
                </Link>
                <Link to='/order'>
                    <div>
                        <img src={carrito} width='60' height='60' alt='' />
                    </div>
                </Link>
            </nav>
        </div>
    );
};

export default Nav;