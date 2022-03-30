import React, {useState} from 'react';
import PropTypes from 'prop-types';
import update from 'react-addons-update';
import TaskList from "./TaskList";
import Task from "./Task";
import styles from './assets/scss/Card.scss';

export default function Card({no, title, description, status}) {
    const [showDetails, setShowDetails] = useState(false);
    const [tasks, setTasks] = useState([]);

    const styleSideColor = {
        position: 'absolute',
        zIndex: -1,
        top: 0,
        bottom: 0,
        left: 0,
        width: 3,
        backgroundColor: status === 'Doing' ? '#bd8D31' : (status === 'ToDo' ? '#3a7e28' : '#222')
    };

    const notifyChangeTaskDone = async (no, done) => {
        try {
            const response = await fetch(`/api/task/${no}`, {
                method: 'put',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json'
                },
                body: `done=${done}`
            });

            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();
            if (json.result !== 'success') {
                throw new Error(`${json.result} ${json.message}`);
            }
            
            const newTasks = update(tasks, {
                [tasks.findIndex(task => task.no === json.data.no)]: {
                    done: {
                        $set: json.data.done
                    }
                }
            });

            setTasks(newTasks);

        } catch (err) {
            console.error(err);
        }
    }

    const notifyAddTask = async (taskName) => {
        try {
            // console.log('notifyTaskAdd', cardNo, taskName);
            const newTask = {
                no: null,
                name: taskName,
                done: 'N',
                cardNo: no
            };

            const response = await fetch(`/api/task`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
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

            setTasks([json.data, ...tasks]);

        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className={styles.Card}>
            <div style={styleSideColor}/>
            <div
                className={
                    showDetails ?
                        [styles.Card__Title, styles.Card__Title__Open].join(' ') :
                        styles.Card__Title
                }
                onClick={ async () => {
                    if(!showDetails) {
                        try {
                            const response = await fetch(`/api/task?cardNo=${no}`, {
                                method: 'get',
                                headers: {
                                    'Accept': 'application/json'
                                }
                            });
                
                            if (!response.ok) {
                                throw new Error(`${response.status} ${response.statusText}`);
                            }
                
                            const json = await response.json();
                            if (json.result !== 'success') {
                                throw new Error(`${json.result} ${json.message}`);
                            }
                
                            setTasks(json.data);

                        } catch (err) {
                            console.log(err.message);
                        }
                    }

                    setShowDetails(!showDetails);
                }}>
                {title}
            </div>
            {
                showDetails ?
                    <div className={styles.Card__Details}>
                        {description}
                        <TaskList
                            cardNo={no}
                            tasks={tasks}
                            notifyAddTask={notifyAddTask}
                            notifyChangeTaskDone={notifyChangeTaskDone}/>
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