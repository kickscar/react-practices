import React, {Fragment} from 'react';

import Incrementor01 from './Incrementor01';
import Incrementor02 from './Incrementor02';

export default function () {
    return (
        <Fragment>
            <h2>ex03 - Inline Handler</h2>
            <Incrementor01 begin={1} step={1}/>
            <br/>
            <Incrementor02 begin={10} step={10}/>
        </Fragment>
    );
}