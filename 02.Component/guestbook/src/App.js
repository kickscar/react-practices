import React, {useRef} from 'react';
import Guestbook from './Guestbook';
import './assets/scss/App.scss';

export default function App() {
    const outterRef = useRef(null);
    const innerRef = useRef(null);

    return (
        <div
            ref={ outterRef }
            className={'App'}
            onScroll={ e => {
            console.log(outterRef.current.scrollTop, ':', outterRef.current.clientHeight, ':', innerRef.current.clientHeight);
        } }>
            <div
                ref={ innerRef }>
                <Guestbook />
            </div>
        </div>
    );
}