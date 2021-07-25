import React from 'react';
import CardList from './CardList';

export default class KanbanBoard extends React.Component {
    render() {
        const allCards = this.props.cards;
        let cards = {
            "todo": [],
            "in-progress": [],
            "done": []
        };

        allCards.forEach( e => cards[e.status].push(e) );

        return (
            <div className='KanbanBoard'>
                <CardList key='todo' cards={ cards['todo'] } title='To Do' />
                <CardList key='in-Progress' cards={ cards['in-progress'] } title='In Progress' />
                <CardList key='done' cards={ cards['done'] } title='Done' />
            </div>
        );        
    }
}