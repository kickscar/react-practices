import React, {useState, useEffect} from 'react';
import SearchBar from './SearchBar';
import Emaillist from './Emaillist';

export default function EmaillistApp() {
    const [emails, setEmails] = useState([]);
    const [keyword, setKeyword] = useState('');

    const notifyKeywordChanged = function (keyword) {
        setKeyword(keyword);
    }

    useEffect(async () => {
        try {
            const response = await fetch('/api');
            const json = await response.json();

            setEmails(json.data);
        } catch (err) {
            console.error('Error: fetch and parsing data', err);
        }
    }, []);

    return (
        <div className='EmaillistApp'>
            <SearchBar keyword={keyword} callback={notifyKeywordChanged}/>
            <Emaillist emails={emails} keyword={keyword}/>
        </div>
    )
}
