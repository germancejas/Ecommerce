import React from 'react';
// import style from './Forms.module.css';
//import { useForm } from 'react-hook-form';
import Card from './Card.jsx'

export default function CatCards(props) {
    // const { register } = useForm();
    // const onSubmit = data => console.log(data);
    console.log(props)
    
    const handleSubmit = function (e) {
        e.preventDefault();
        var url = 'http://localhost:9000/products/findByCat/';
        var data = {
            categoryId: e.target.categoryId.value

        };
        

        fetch(url, {
            method: 'GET', //POST
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => console.log(res))
        .catch(err => console.log(err))
    }

    return (
        <div className='cards'>
            <div className='cards'>
                {props.product.map(p => <Card 
                    onSubmit={handleSubmit} 
                    key={p.id}
                    id={p.id}
                    name={p.name}
                    brand={p.brand}
                    package={p.packaging}
                    description={p.description}
                    price={p.price}
                    categories={p.categories}


                />)}
            </div>

            </div>
    )
}


