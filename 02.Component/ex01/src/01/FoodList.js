import React, {Component} from 'react';
import FoodListItem from './FoodListItem';

export default class extends Component {
    render() {
        return (
            <ul>
                <FoodListItem name='Bread' quantity='20'/>
                <FoodListItem name='Egg' quantity='10'/>
                <FoodListItem name='Milk' quantity='30'/>
            </ul>
        );
    }
}
