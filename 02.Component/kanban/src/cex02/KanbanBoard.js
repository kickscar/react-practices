import React from 'react';
import CardList from './CardList';

import styles from './KanbanBoard.css';

export default class KanbanBoard extends React.Component {
    render() {
        return (
            <div className={ styles.KanbanBoard }>
                <CardList key='todo' cards={ this.props.cards.filter( e => e.status === 'todo') } title='To Do' />
                <CardList key='in-Progress' cards={ this.props.cards.filter( e => e.status === 'in-progress') } title='In Progress' />
                <CardList key='done' cards={ this.props.cards.filter( e => e.status === 'done') } title='Done' />
            </div>
        );        
    }
}