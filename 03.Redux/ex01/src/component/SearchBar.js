import React from 'react';
import styles from './assets/scss/SearchBar.scss';

export default function SearchBar({keyword, callback}) {
    return (
        <div className={styles.Searchbar}>
            <input type='text' placeholder='찾기' onChange={e => callback(e.target.value)}/>
        </div>
    )
}