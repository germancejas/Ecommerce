import React from 'react';
// import {style} from '../Css/Cards.module.css'
//import Card from './Card.jsx';
import { Link } from 'react-router-dom';
//import style from './Cards.module.css'
import Cat from './Cat.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { categoryActions } from '../actions/categoryActions.js';
import { useEffect } from 'react';
import store from '../store.js';
import { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const ca = categoryActions;

export default function Categories() {
    const dispatch = useDispatch();
    const categories = useSelector(store => store.categories)


    useEffect(() => dispatch(ca.getCategories()), []);
    const [dropdownOpen, setOpen] = useState(false);

    const toggle = () => setOpen(!dropdownOpen);


    return (
        <div>
            <div >
                <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle className='mt-3 mb-3' caret>
                        Categories
                </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header>{categories.categories.map(c => <Cat
                            key={c.id}
                            id={c.id}
                            name={c.name}

                        />)}</DropdownItem>
                    </DropdownMenu>
                </ButtonDropdown>

            </div>
            <div >
                <div >
                    <Link to={`/products/${categories.categories.id}/addcat`}>
                        <button type="button" className="btn btn-secondary btn-sm">Agregar Categoria</button>
                    </Link>
                </div>
            </div>
        </div>



    );
}
