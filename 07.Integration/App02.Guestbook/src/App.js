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
                if(outterRef.current.scrollTop + outterRef.current.clientHeight + 20 > innerRef.current.clientHeight){
                    console.log("Fetch!!!");
                }
            } }>
            <div
                ref={ innerRef }>
                <Guestbook />
            </div>
        </div>
    );
}