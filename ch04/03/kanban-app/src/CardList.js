import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

import styles from './CardList.css';

export default class CardList extends React.Component {
    render() {
        return (
            <div className={ styles.CardList }>
                <h1>{ this.props.title }</h1>
                { this.props.cards.map( e => <Card
                    key={ e.id }
                    title={ e.title } 
                    description={ e.description }
                    color={ e.color }
                    tasks={ e.tasks } />) }
            </div>
        );        
    }
}

CardList.propTypes = {
    tille: PropTypes.string,
    cards: PropTypes.arrayOf(PropTypes.object)
}