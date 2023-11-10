import React from 'react';

function Incrementor({setValue}) {
    return (
        <div>
            <button onClick={() => {
               setValue((val) => val + 1) 
            }}>
                <strong>+</strong>
            </button>
            {' '}
            <button onClick={() => {
               setValue((val) => val === 0 ? 0 : val - 1) 
            }}>
                <strong>-</strong>
            </button>
        </div>
    );
}

export default Incrementor;