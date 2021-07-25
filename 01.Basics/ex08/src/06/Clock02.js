import React from 'react';

export default function () {
    const date = new Date();

    const hours = date.getHours();
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const seconds = ('0' + date.getSeconds()).slice(-2);

    return (
        <div>
            {('0' + (hours == 0 ? 12 : (hours > 12 ? hours - 12 : hours))).slice(-2)}
            :
            {minutes}
            :
            {seconds}
            {hours > 12 ? 'PM' : 'AM'}
        </div>
    );
}