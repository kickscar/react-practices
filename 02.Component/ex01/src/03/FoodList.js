import React from 'react';
import FoodListItem from './FoodListItem';

export default function ({foods}) {
    return (
        <ul>
            {foods.map((food) => <FoodListItem key={food.name} name={food.name} quantity={food.quantity}/>)}
        </ul>
    );
}
