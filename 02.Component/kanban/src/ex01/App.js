import React from 'react';
import KanbanBoard from './KanbanBoard';
import cards from './data.json';
import './App.scss';

export default function App() {
    return (
        <KanbanBoard cards={ cards }/>
    );
}