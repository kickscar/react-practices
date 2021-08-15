import React from "react";
import styels from './assets/scss/SessionAmPm.scss';

export default function SessionAmPm({session}) {
    return (
        <div className={styels.AmPm}>
            <div>
                <p className={styels[session === 'am' ? 'on' : 'off']}>am</p>
            </div>
            <div>
                <p className={styels[session === 'pm' ? 'on' : 'off']}>pm</p>
            </div>
        </div>
    );
}