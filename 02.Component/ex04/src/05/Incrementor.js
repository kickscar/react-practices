import React from 'react';
import {useCounterState} from './MyContext';

function Incrementor() {
    const [, setCounter] = useCounterState();

    return (
        <div>
            <button onClick={() => {
                setCounter((val) => val + 1); 
            }}>
                <strong>+</strong>
            </button>
            {' '}
            <button onClick={() => {
               setCounter((val) => val === 0 ? 0 : val + 1); 
            }}>
                <strong>-</strong>
            </button>
        </div>
    );
}

export default Incrementor;