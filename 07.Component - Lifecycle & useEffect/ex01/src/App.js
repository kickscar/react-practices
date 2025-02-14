import React, {useState} from 'react';
import LifeCycle from './LifeCycle';

export default function App() {
    const [color, setColor] = useState('#000000');
    const [show, setShow] = useState(true);

    return (
        <>
            <h2>{'ex01 - Component LifeCycle'}</h2>
            <button
                onClick={() => setColor(`#${Math.floor((Math.random() * 0x00ffffff)).toString(16)}`)}>
                {'색상변경'}
            </button>
            <br/>
            <input type='checkbox' checked={show} onChange={e => setShow(!show)}/>
            <span>{'컴포넌트 보기'}</span>
            {
                show ?
                    <LifeCycle color={color}/> :
                    null
            }
        </>
    );
}