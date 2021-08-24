import React from 'react';
import Task from './Task';
import styles from './assets/css/TaskList.css';

export default function TaskList({tasks}) {
    return (
        <div className='TaskList'>
            <ul>
                {tasks.map(task => <Task key={task.no} name={task.name}/>)}
            </ul>
        </div>
    );
}