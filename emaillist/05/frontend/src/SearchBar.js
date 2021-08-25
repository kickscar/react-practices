import React from 'react';
import PropTypes from 'prop-types';
import styles from './assets/scss/SearchBar.scss';

export default function SearchBar({keyword, callback}) {
    return (
        <div className={styles.Searchbar}>
            <input type='text' placeholder='찾기' value={keyword} onChange={e => callback(e.target.value)}/>
        </div>
    )
}

SearchBar.propTypes = {
    keyword: PropTypes.string.isRequired,
    callback: PropTypes.func.isRequired
}