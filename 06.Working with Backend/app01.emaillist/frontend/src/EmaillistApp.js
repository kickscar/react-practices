import React, {useState, useEffect} from 'react';
import SearchBar from './SearchBar';
import Emaillist from './Emaillist';

export default function App() {
    const [emails, setEmails] = useState([]);
    const [keyword, setKeyword] = useState('');

    useEffect(async () => {
        try {
            const response = await fetch('/api', {
                method: 'get',
                mode: 'same-origin',                    // no-cors, cors, *same-origin
                credentials: 'same-origin',             // include, *same-origin, omit
                cache: 'default',                       // *default, no-cache, reload, force-cache, only-if-cached
                headers: {
                    'Content-Type': 'application/json', // cf. 'Content-Type': 'application/x-www-form-urlencoded'
                    'Accept': 'applcation/json'
                },
                redirect: 'follow',                     // manual, *follow, error
                referrer: 'no-referrer',                // no-referrer, *client
                body: null                              // body data type must match "'Content-Type" header, set null when method is 'GET'
            });

            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();

            if (json.result !== 'success') {
                throw new Error(`${json.result} ${json.message}`);
            }

            setEmails(json.data);

        } catch (err) {
            console.error(err);
        }
    }, []);

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
