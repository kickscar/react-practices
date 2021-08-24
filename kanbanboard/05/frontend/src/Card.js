import React, {useState} from 'react';
import PropTypes from 'prop-types';
import TaskList from "./TaskList";
import Task from "./Task";
import styles from './assets/scss/Card.scss';

export default function Card({no, title, description, tasks, status, notifyTask}) {
    const [showDetails, setShowDetails] = useState(true);

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
            <div style={styleSideColor}/>
            <div
                className={
                    showDetails ?
                        [styles.Card__Title, styles.Card__Title__Open].join(' ') :
                        styles.Card__Title
                }
                onClick={() => setShowDetails(!showDetails)}>
                {title}
            </div>
            {
                showDetails ?
                    <div className={styles.Card__Details}>
                        {description}
                        <TaskList
                            cardNo={no}
                            tasks={tasks}
                            notifyTask={notifyTask}/>
                    </div> :
                    null
            }
        </div>
    );
}

Card.propTypes = {
    // title: PropTypes.string.isRequired,
    title: (props, propName, componentName) => (!props[propName] || typeof props[propName] !== 'string' || props[propName].length > 50) ? new Error(`${propName} in ${componentName} is longer than 50 characters`) : null,
    description: PropTypes.string,
    status: PropTypes.string.isRequired,
    tasks: PropTypes.arrayOf(PropTypes.shape(Task.propTypes))
}