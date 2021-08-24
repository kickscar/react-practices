import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

export default function TaskList({tasks}) {
    return (
        <div className='TaskList'>
            <ul>
                {tasks.map(task => <Task key={task.no} name={task.name}/>)}
            </ul>
        </div>
    );
}

TaskList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.shape(Task.propTypes))
}