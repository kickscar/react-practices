import React, {useState} from 'react';
import SearchBar from './SearchBar';
import Emaillist from './Emaillist';
import '../../assets/scss/App.scss';

import data from '../../assets/json/data.json';

export default function Index() {
    const [emails] = useState(data);
    const [keyword, setKeyword] = useState('');

    const notifyKeywordChanged = function (keyword) {
        setKeyword(keyword);
    }

    return (
        <div className='EmaillistApp'>
            <SearchBar keyword={keyword} callback={notifyKeywordChanged}/>
            <Emaillist emails={emails} keyword={keyword}/>
        </div>
    )
}
