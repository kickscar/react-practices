import React from 'react';
import GroceryItem from './GroceryItem';

function GroceryList(props) {
    return (
        <ol className={'grocery-list'}>
            <GroceryItem name={'Milk'} count={10}/>
            <GroceryItem name={'Egg'} count={30}/>
            <GroceryItem name={'Bread'} count={20}/>
        </ol>
    );
}

export default GroceryList;