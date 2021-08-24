import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import styles from './assets/css/TaskList.css';

export default function TaskList({cardNo, tasks, notifyTask}) {
    return (
        <div className='TaskList'>
            <ul>
                {tasks.map(task => <Task key={task.no} name={task.name}/>)}
            </ul>
            <input
                type='text'
                className={styles['TaskList--add-task']}
                placeholder='태스크 추가'
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        notifyTask.add(cardNo, e.target.value);
                        e.target.value = '';
                    }
                }}/>
        </div>
    );
}

TaskList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.shape(Task.propTypes))
}