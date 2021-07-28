import React from 'react';

import styles from './TaskList.css'

export default class TaskList extends React.Component {
    render(){
        return (
            <div className={ styles.TaskList }>
                <ul>
                    { this.props.tasks.map(e => <li className={ styles.TaskList__Task }>
                        <input type='checkbox' defaultChecked={ true } /> { e.name }
                        <a href='#' className={ styles['TaskList__Task--remove'] } />
                    </li>) }
                </ul>
            </div>
        );
    }
}