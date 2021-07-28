import React from 'react';
import WriteForm from './WriteForm';
import MessageList from './MessageList';
import styles from './assets/scss/Guestbook.scss';

import messages from './assets/json/messages.json';

export default function Guestbook() {
    return (
        <div className={ styles.Guestbook }>
            <h1>방명록</h1>
            <WriteForm />
            <MessageList messages={ messages }/>
        </div>
    );
}