import React, {useRef} from 'react';
import './assets/scss/App.scss';

export default function App() {
    const outerRef = useRef(null);
    const innerRef = useRef(null);

    return (
        <div
            ref={outerRef}
            className={'App'}
            onScroll={e => {
                console.log(outerRef.current.scrollTop, outerRef.current.clientHeight, innerRef.current.clientHeight)
            }}>
            <div ref={innerRef}>
                <ul>
                    {
                        Array.from({length:100}, (_, i) => i+1).map(e => <li key={e}>{`아이텀 ${e}입니다.`}</li>)
                    }
                </ul>
            </div>
        </div>
    );
}