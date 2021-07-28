import React, {Fragment} from 'react';

export default function Message({ no, name, message }) {
    return (
        <li className="Guestbook__List__Item">
            <strong>{ name }</strong>
            <p>
                { message && message.split('\n').map((line, index) => index > 0 ?
                    <span key={`${no}-${index}`}>
                        <br/>
                        { line }
                    </span> : line) }
            </p>
            <strong/>
            <a href=''>삭제</a>
        </li>
    );
}