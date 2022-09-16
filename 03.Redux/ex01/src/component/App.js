import React, {useState, useEffect} from 'react';
import RegisterForm from './RegisterForm';
import SearchBar from './SearchBar';
import Emaillist from './Emaillist';
import './assets/scss/App.scss';

import AppStore from "../store/AppStore";
import AppAction from "../store/AppAction";

export default function App() {
    const [emails, setEmails] = useState(AppStore.getState());

    const addEmail = function(email) {
        AppAction.createEmail(email);
    }

    const keywordChanged = function(keyword) {
    }

    useEffect(() => {
        const subscription = AppStore.subsribe(() => {
            setEmails(AppStore.getState());
        });

        return () => {
            subscription.remove();
        }
    }, []);

    return (
        <div className={'App'}>
            <RegisterForm callback={addEmail}/>
            <SearchBar callback={keywordChanged}/>
            <Emaillist emails={emails} />
        </div>
    )
}
