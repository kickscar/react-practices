import React from 'react';

function App() {
    // const App = document.createElement('div');
    // App.textContent = "Hello Wolrd!";
    const App = React.createElement('div', null, 'Hello World!');

    return App;
}

export {App};