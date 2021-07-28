import React from 'react';
import Message from './Message';

export default function MessageList({ messages }) {
    return (
        <ul className="Guestbook__List">
            {  messages.map(message => <Message key={ `guestbook_message_${message.no}` }
                                                no={ message.no }
                                                name={ message.name }
                                                message={message.message}/>) }
        </ul>
    );
}