import React, {useState} from 'react';

import Count from './Count';
import Incrementor from './Incrementor';

export default function () {
    const [value, setValue] = useState(0);

    return (
        <>
            <h2>ex04 - Context Provider I</h2>
            <Count value={value} />
            <Incrementor setValue={setValue} />
            <br/>
        </>
    );
}