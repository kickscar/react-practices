import React, {useEffect, useState} from 'react';
import update from 'react-addons-update';
import CardList from "./CardList";
import styles from './assets/css/KabanBoard.css';

export default function KanbanBoard() {
    const [cards, setCards] = useState([]);

    useEffect(async () => {
        try {
            const response = await fetch('/api/cards', {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'applcation/json'
                }
            });

            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();
            if (json.result !== 'success') {
                throw new Error(`${json.result} ${json.message}`);
            }

            setCards(json.data);
        } catch (err) {
            console.error(err);
        }
    }, []);

    const notifyTask = {
        add: async function (cardNo, taskName) {
            try {
                // console.log('notifyTaskAdd', cardNo, taskName);
                const cardIndex = cards.findIndex(card => card.no === cardNo);
                console.log(cardIndex);

                const newTask = {
                    no: null,
                    name: taskName,
                    done: false
                };

                const response = await fetch(`/api/card/${cardNo}/task`, {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'applcation/json'
                    },
                    body: JSON.stringify(newTask)
                });

                if (!response.ok) {
                    throw new Error(`${response.status} ${response.statusText}`);
                }

                const json = await response.json();
                if (json.result !== 'success') {
                    throw new Error(`${json.result} ${json.message}`);
                }

                let newCards = update(cards, {
                    [cardIndex]: {
                        tasks: {
                            $push: [json.data]
                        }
                    }
                });

                setCards(newCards);

            } catch (err) {
                console.error(err);
            }
        }
    }

    return (
        <div className={styles.KanbanBoard}>
            <CardList
                key='ToDo'
                title='ToDo'
                cards={cards.filter(card => card.status == 'ToDo')}
                notifyTask={notifyTask}/>

            <CardList
                key='Doing'
                title='Doing'
                cards={cards.filter(card => card.status == 'Doing')}
                notifyTask={notifyTask}/>

            <CardList
                key='Done'
                title='Done'
                cards={cards.filter(card => card.status == 'Done')}
                notifyTask={notifyTask}/>
        </div>
    );
}