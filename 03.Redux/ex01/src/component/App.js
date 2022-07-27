import React, {useState, useEffect} from 'react';
import RegisterForm from './RegisterForm';
import SearchBar from './SearchBar';
import Emaillist from './Emaillist';
import './assets/scss/App.scss';

import EmailStore from "../flux/EmailStore";
import EmailActions from "../flux/EmailActions";

export default function App() {
    const [emails, setEmails] = useState(EmailStore.getState());

    const addEmail = function(email) {
        EmailActions.createEmail(email);
    }

    const keywordChanged = function(keyword) {
    }

    useEffect(() => {
        const subscription = EmailStore.addListender(() => {
            setEmails(EmailStore.getState());
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
