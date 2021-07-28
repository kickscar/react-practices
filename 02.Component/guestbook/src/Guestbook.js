import React from 'react';
import WriteForm from './WriteForm';
import MessageList from './MessageList';
import styles from './assets/css/Guestbook.css';

import messages from './assets/json/messages.json';

export default function Guestbook() {
    return (
        <div className={ styles.Guestbook }>
            <img src={logo} />
            <h1>방명록</h1>
            <WriteForm />
            <MessageList messages={ messages }/>
        </div>
    );
}