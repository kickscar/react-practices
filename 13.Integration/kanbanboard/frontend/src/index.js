import React from 'react';
import ReactDOM from 'react-dom/client';
import KanbanBoard from './KanbanBoard.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <KanbanBoard />
  </React.StrictMode>
);

