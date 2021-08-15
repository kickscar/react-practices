import React from 'react';
import PropTypes from 'prop-types';

export default function SearchBar({keyword, callback}) {
    return (
        <div className='Searchbar'>
            찾기: <input type='text' placeholder='search' value={keyword} onChange={e => callback(e.target.value)}/>
        </div>
    )
}

SearchBar.propTypes = {
    keyword: PropTypes.string.isRequired,
    callback: PropTypes.func.isRequired
}