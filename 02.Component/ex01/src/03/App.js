import React from 'react';
import FoodList from './FoodList';

export default function () {
    const foods = [{
        name: 'Bread',
        quantity: 20
    }, {
        name: 'Egg',
        quantity: 10
    }, {
        name: 'Milk',
        quantity: 10
    }];

    return (
        <FoodList foods={foods}/>
    );
}
