import React from 'react';
import GroceryItem from './GroceryItem';

function GroceryList({groceries}) {
    // const groceryItems = [];
    // groceries.forEach((grocery) => {
    //     groceryItems.push(<GroceryItem name={grocery.name} count={grocery.count} />);
    // });

    return (
        <ol className={'grocery-list'}>
            { 
                groceries.map(e => <GroceryItem
                                     key={e.no} 
                                     name={e.name}
                                     count={e.count} />)
            }
        </ol>
    );
}

export default GroceryList;