import React, {useState} from 'react';
import RegisterForm from './RegisterForm';
import SearchBar from './SearchBar';
import Emaillist from './Emaillist';
import './assets/scss/App.scss';
import data from './assets/json/data.json';

export default function App() {
    const [emails] = useState(data);
    const [keyword, setKeyword] = useState('');

    const notifyKeywordChanged = function (keyword) {
        setKeyword(keyword);
    }

    return (
        <div className={'App'}>
            <RegisterForm/>
            <SearchBar keyword={keyword} callback={notifyKeywordChanged}/>
            <Emaillist emails={emails} keyword={keyword}/>
        </div>
    );
}
