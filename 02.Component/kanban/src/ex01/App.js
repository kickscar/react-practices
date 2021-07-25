import React from 'react';
import KanbanBoard from './KanbanBoard';
import data from './data.json';

export default class App extends React.Component {
    render() {
        return (
            <div className='App'>
                <KanbanBoard cards={ data }/>
            </div>
        );        
    }
}