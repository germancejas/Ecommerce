import React, { useState } from 'react';
import styles from '../Css/Cards.module.css';

export default function SearchBar({ onSearch }) {
    const [product, setProduct] = useState([]);
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            onSearch(product);
            setProduct([]);
        }}>
            <input className={styles.input}
                type="text"
                placeholder="Buscar..."
                value={product}
                onChange={e => setProduct(e.target.value)} />
            <input className={styles.greenBtn} type="submit" value="Buscar" />
        </form>
    );
}