import React from 'react';
import Clock01 from './Clock01';
import Clock02 from './Clock02';
import Clock03 from './Clock03';

function Contents(props) {
    const now = new Date();

    return (
        <>
            <p>특징 III: JSX 표현식</p>
            <Clock01 />
            <Clock02 />
            <Clock03
                hours={ now.getHours() }
                minutes={ now.getMinutes() }
                seconds={ now.getSeconds() } />
        </>
    );
}

export default Contents;