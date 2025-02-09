import React from 'react';

function App() {
    
    const h1Style = {
        width: 200,
        height: '50px',
        padding: 20,
        color: '#111',
        backgroundColor: '#eeff99'
    };

    return (
        <div id={'App'}>
            <h1 style={h1Style}>inline styling</h1>
        </div>
    );
}

export default App;