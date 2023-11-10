import React from 'react';
import styles from './assets/css/Task.css';

export default function Task({no, name, done, notifyChangeTaskDone}) {
    return (<li className={styles.Task}>
        <input
            type='checkbox'
            checked={done === 'Y'}
            onChange={e => notifyChangeTaskDone(no, e.target.checked ? 'Y' : 'N')}/>
        {name}
        <a href='#' className={styles.Task__remove}/>
    </li>);
}