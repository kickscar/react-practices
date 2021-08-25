import React from 'react';
import styles from './assets/scss/SearchBar.scss';

export default function SearchBar() {
    return (
        <div className={styles.Searchbar}>
            <input type='text' placeholder='찾기'/>
        </div>
    );
}