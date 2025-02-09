import React from 'react';
import GroceryList from './GroceryList';
import './assets/css/App.css';

function App(props) {
    return (
        <div id={'App'}>
            <h1 className={'title'}>{'Grocery List'}</h1>
            <GroceryList />
        </div>
    );
}

export default App;