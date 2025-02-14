import React from 'react';
import Header from './Header';
import Contents from './Contents';

function App() {
    const ref = React.useRef(null);
    const [count, setCount] = React.useState('hello!');

    return (
        <div
            id='App'
            ref={ref}>
            {'Hello World'}
            {count}
        </div>
    );

    // return React.createElement('div', {id: 'App'}, React.createElement(Header, null), React.createElement(Contents, null));
}

export {App};