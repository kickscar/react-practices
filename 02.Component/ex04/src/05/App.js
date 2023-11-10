import React, {useState} from 'react';

import {MyContext} from './MyContext';
import Count from './Count';
import Incrementor from './Incrementor';

export default function App () {
    return (
        <MyContext>
            <>
                <h2>ex04 - Context Provider II</h2>
                <Count />
                <Incrementor />
            </>
        </MyContext>
    );
}