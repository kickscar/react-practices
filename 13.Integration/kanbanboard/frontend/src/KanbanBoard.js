import React, {useState} from 'react';
import CardList from './CardList.js';
import './assets/scss/KanbanBoard.scss';

import data from './assets/json/data.js';

const KanbanBoard = () => {
    const [cards, setCards] = useState(data);

    return (
            <div className={'Kanban_Board'}>
                <CardList 
                    key={'To Do'}
                    title={'To Do'}
                    cards={cards.filter(card => card.status === 'ToDo')} />
                <CardList
                    key={'Doing'}
                    title={'Doing'}
                    cards={cards.filter(card => card.status === 'Doing')} />
                <CardList
                    key={'Done'}
                    title={'Done'}
                    cards={cards.filter(card => card.status === 'Done')} />
                </div>
    );
};

export default KanbanBoard;