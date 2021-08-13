import React from 'react';
import KanbanBoard from './KanbanBoard';
import cards from './data.json';
import './_ex_upload_.scss';

export default function App() {
    return (
        <KanbanBoard cards={ cards }/>
    );
}