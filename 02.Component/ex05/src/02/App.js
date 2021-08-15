import React, {Fragment, useState} from 'react';
import Hook from './Hook';

export default function App() {
    const [color, setColor] = useState('#000');
    const [show, setShow] = useState(true);

    return (
        <Fragment>
            <h2>ex05 - Hook of Functional Component </h2>
            <button
                onClick={() => setColor(`#${Math.floor((Math.random() * 0x00ffffff)).toString(16)}`)}>
                색상변경
            </button>
            <input type='checkbox' value={show} checked={show} onChange={() => setShow(!show)}/> 컴포넌트 보기
            <br/>
            {show ? <Hook color={color}/> : null}
        </Fragment>
    );
}