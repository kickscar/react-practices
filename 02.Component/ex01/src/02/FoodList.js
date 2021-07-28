import React, { Component } from 'react';
import FoodListItem from './FoodListItem';

export default class extends Component {
    render() {
        return (
            <ul>
                { this.props.foods.map((food) => <FoodListItem key={food.name} name={food.name} quantity={food.quantity} />) }
            </ul>
        );        
    }
}
