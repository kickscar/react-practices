import React, {useState} from 'react';
import Hook from './Hook';

export default function App() {
    const [color, setColor] = useState('#000');
    const [show, setShow] = useState(true);

    return (
        <>
            <h2>ex02 - React Hook(useEffect) of Functional Component </h2>
            <button
                onClick={() => setColor(`#${Math.floor((Math.random() * 0x00ffffff)).toString(16)}`)}>
                {'색상변경'}
            </button>
            <br/>
            <input type='checkbox' checked={show} onChange={e => setShow(!show)}/>
            <span>{'컴포넌트 보기'}</span>
            {
                show ?
                    <Hook color={color}/> :
                    null
            }
        </>
    );
}