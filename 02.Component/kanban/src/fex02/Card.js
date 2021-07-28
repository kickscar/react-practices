import React from 'react';
import TaskList from "./TaskList";
import styles from '../assets/scss/Card.scss';

export default function Card({ card, title, description, status, tasks }) {
    const styleSideColor = {
        position: 'absolute',
        zIndex: -1,
        top: 0,
        bottom: 0,
        left: 0,
        width: 3,
        backgroundColor: status === 'Doing' ? '#bd8D31' : (status === 'ToDo' ? '#3a7e28' : '#222')
    };

    return (
        <div className={styles.Card}>
            <div style={ styleSideColor } />
            <div className={styles.Card__Title}>{ title }</div>
            <div className={styles.Card__Details}>
                { description }
                <TaskList tasks={ tasks }/>
            </div>
        </div>

    );
}