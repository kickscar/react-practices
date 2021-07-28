import React from 'react';
import Message from './Message';
import styles from './assets/scss/MessageList.scss';

export default function MessageList({ messages }) {
    return (
        <ul className={ styles.Message__List }>
            {  messages.map(message => <Message key={ `guestbook_message_${message.no}` }
                                                no={ message.no }
                                                name={ message.name }
                                                message={message.message}/>) }
        </ul>
    );
}