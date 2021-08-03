import React, { useState, useEffect } from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';
export default function App() {
    const [state, setState] = useState({
        count: 0,
        hours: '00',
        minutes: '00',
        seconds: '00',
        pm: false
    });

    console.log(state);

    useEffect( () => {
        setTimeout(function(){
            const date = new Date();
            const hours = date.getHours();
            const minutes = ('0' + date.getMinutes()).slice(-2);
            const seconds = ('0' + date.getSeconds()).slice(-2);

            setState({
                count: state.count === 10 ? 0 : state.count + 1,
                hours: ('0' + (hours == 0 ? 12 : (hours > 12 ? hours - 12 : hours))).slice(-2),
                minutes: minutes,
                seconds: seconds,
                pm: hours > 12
            })
        }, 1000);
    });

    return (
        <div className='clock-display'>
            <h2>ex05 - useEffect Hook Practice</h2>

            { state.count === 10 ?
                null :
                <Clock
                    hours={ state.hours }
                    minutes={ state.minutes }
                    seconds={ state.seconds }
                    pm={ state.pm }/>
            }
        </div>
    );
}