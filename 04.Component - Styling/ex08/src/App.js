import React from 'react';
import GroceryList from './GroceryList';
import {title} from './assets/scss/App.scss';

function App() {
    const groceries = [
        {no: 1, name: 'Egg', count: 10},
        {no: 2, name: 'Milk', count: 20},
        {no: 3, name: 'Bread', count: 30}
    ];

    return (
        <div id={'App'}>
            <h1 className={title}>{'Grocery List'}</h1>
            <GroceryList groceries={groceries} />
        </div>
    );
}

export default App;