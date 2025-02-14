import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
    );

console.log(root)
console.log("=======");

//console.log(root._internalRoot.containerInfo);
console.log("=======");
console.log(root._internalRoot.current);


