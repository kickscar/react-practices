import React from 'react';
import PropTypes from 'prop-types';
import Card from "./Card";
import styles from "./assets/css/CardList.css";

export default function CardList({title, cards}) {
    return (
        <div className={styles.CardList}>
            <h1>{title}</h1>
            {cards.map(card => <Card
                key={card.no}
                no={card.no}
                title={card.title}
                description={card.description}
                status={card.status} />)}
        </div>
    )
}

CardList.propTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.arrayOf(PropTypes.shape(Card.propTypes))
}