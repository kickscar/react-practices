import React from 'react';
import KanbanBoard from './KanbanBoard';
import cards from './data.json';
import './App.css';

export default function App() {
    return (
        <KanbanBoard cards={ cards }/>
    );
}