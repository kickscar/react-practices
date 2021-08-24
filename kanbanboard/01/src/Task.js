import React from 'react';
import styles from './assets/css/Task.css';

export default function Task({name}) {
    return (
        <li className={styles.Task}>
            <input type='checkbox' defaultChecked={true}/>
            {name}
            <a href='#' className={styles['TaskList__Task--remove']}></a>
        </li>
    );
}