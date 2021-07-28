import React from 'react';
import Card from './Card';

export default class CardList extends React.Component {
    render() {
        const cards = [];
        this.props.cards.forEach(element => {
            cards.push(<Card
                key={ element.id }
                title={ element.title } 
                description={ element.description }
                tasks={ element.tasks } />);
        });

        return (
            <div className='CardList'>
                <h1>{ this.props.title }</h1>
                { cards }
            </div>
        );        
    }
}