import React, {useState, useEffect} from 'react';
import RegisterForm from './RegisterForm';
import SearchBar from './SearchBar';
import Emaillist from './Emaillist';
import './assets/scss/App.scss';

export default function App() {
    const [emails, setEmails] = useState([]);
    const [keyword, setKeyword] = useState('');

    useEffect(async () => {
        try {
            const response = await fetch('/api', {
                method: 'get',
                mode: 'cors',                           // no-cors, cors, *same-origin
                credentials: 'same-origin',             // include, *same-origin, omit
                cache: 'default',                       // *default, no-cache, reload, force-cache, only-if-cached
                headers: {
                    'Content-Type': 'application/json', // cf. 'Content-Type': 'application/x-www-form-urlencoded'
                    'Accept': 'application/json'
                },
                redirect: 'follow',                     // manual, *follow, error
                referrer: 'client',                     // no-referrer, *client
                body: null                              // body data type must match "'Content-Type" header, set null when method is 'GET'
            });

            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();

            if (json.result !== 'success') {
                throw new Error(`${json.result} ${json.message}`);
            }

            console.log(json.data);
            
            setEmails(json.data);

        } catch (err) {
            console.error(err);
        }
    }, []);

    const notifyEmailAdd = async function(email) {
        try {
            const response = await fetch('/api', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body:JSON.stringify(email)
            });

            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();

            if(json.result !== 'success') {
                throw new Error(`${json.result} ${json.message}`);
            }

            setEmails([json.data, ...emails]);
        } catch (err) {
            console.error(err);
        }    
    }

    const notifyKeywordChanged = async function(keyword) {
        try {
            const response = await fetch(`/api?kw=${keyword}`, {
                method: 'get',
                mode: 'cors',                           // no-cors, cors, *same-origin
                credentials: 'same-origin',             // include, *same-origin, omit
                cache: 'default',                       // *default, no-cache, reload, force-cache, only-if-cached
                headers: {
                    'Content-Type': 'application/json', // cf. 'Content-Type': 'application/x-www-form-urlencoded'
                    'Accept': 'application/json'
                },
                redirect: 'follow',                     // manual, *follow, error
                referrer: 'client',                     // no-referrer, *client
                body: null                              // body data type must match "'Content-Type" header, set null when method is 'GET'
            });

            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();

            if(json.result !== 'success') {
                throw new Error(`${json.result} ${json.message}`);
            }
            
            setEmails(json.data);
            setKeyword(keyword);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className={'App'}>
            <RegisterForm notifyEmailAdd={notifyEmailAdd}/>
            <SearchBar keyword={keyword} notifyKeywordChanged={notifyKeywordChanged}/>
            <Emaillist emails={emails} keyword={keyword}/>
        </div>
    )
}
