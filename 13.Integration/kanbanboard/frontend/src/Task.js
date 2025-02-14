import React from 'react';
import {_Task, Task_Remove} from './assets/scss/Task.scss';

const Task = ({no, name, done}) => {
    return (
        <li className={_Task}>
            <input
                type='checkbox'
                checked={done === 'Y'} />
            {' '}    
            {name}     
            {' '}    
            <a
                href='#'
                className={Task_Remove} />
        </li>
    );
};

export default Task;