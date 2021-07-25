import React from 'react';

export default function () {
    const message = 'Hello World';
    const h1Style = {
        width: 180,
        height: 30,
        padding: 5,
        color: '#fff',
        backgroundColor: '#ee9900'
    };

    return (
        <h1 style={ h1Style }>{ message }</h1>
    );
}