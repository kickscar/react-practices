import React from 'react';
import PropTypes from 'prop-types';
import styles from './assets/scss/SearchBar.scss';

export default function SearchBar({keyword, notifyKeywordChanged}) {
    return (
        <div className={styles.Searchbar}>
            <input type='text' placeholder='찾기' value={keyword} onChange={e => notifyKeywordChanged(e.target.value)}/>
        </div>
    )
}

SearchBar.propTypes = {
    keyword: PropTypes.string.isRequired,
    notifyKeywordChanged: PropTypes.func.isRequired
}