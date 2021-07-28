import React from 'react';

export default class TaskList extends React.Component {
    render(){
        let tasks = [];
        this.props.tasks.forEach(e => {
            tasks.push(<li className='TaskList__Task'>
                <input type='checkbox' defaultChecked={ true } /> { e.name }
                <a href='#' className='TaskList__Task--remove' />
            </li>);
        });

        return (
            <div className='TaskList'>
                <ul>
                    { tasks }
                </ul>
            </div>
        );        
    }
}