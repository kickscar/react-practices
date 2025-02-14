import React from 'react';
import TaskList from './TaskList';
import {_Card, Card_Title, Card_Title_Open}from './assets/scss/Card.scss';

const Card = ({title, description, tasks}) => {
    return (
        <div className={_Card}>
            <div
                className={[Card_Title, Card_Title_Open].join(' ')}>
                {title}
            </div>
            <div>
                {description}
                <TaskList tasks={tasks} />
            </div>
        </div>
    );
};

export default Card;