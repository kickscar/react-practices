import React from 'react';
import {useCounterState} from './MyContext';

const Count = () => {
    const [value] = useCounterState();

    return (
        <h4>
           <span>{value}</span> 
        </h4>
    );
};

export default Count;