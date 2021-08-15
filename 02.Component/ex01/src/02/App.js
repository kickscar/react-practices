import React, {Component} from 'react';
import FoodList from './FoodList';

export default class extends Component {
    constructor() {
        super(...arguments);

        this.foods = [{
            name: 'Bread',
            quantity: 20
        }, {
            name: 'Egg',
            quantity: 10
        }, {
            name: 'Milk',
            quantity: 10
        }];
    }

    render() {
        return (
            <FoodList foods={this.foods}/>
        );
    }
}