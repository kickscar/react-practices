import React, { useEffect } from 'react';
import './assets/scss/Clock.scss';

export default function Clock({hours, minutes, seconds, pm}) {

    useEffect( () => {
        console.log('Clock', 'Mounted');

        return function() {
            console.log('Clock', 'Clean-UP(componentWillUnmount)');
        }
    }, []);

    return (
        <div className="clock-field">
            <div className="numbers">
                <p className="hours">{hours}</p>
                <p className="placeholder"></p>
                <p className="type">hour</p>
            </div>
            <div className="colon">
                <p>:</p>
            </div>
            <div className="numbers">
                <p className="minutes">{minutes}</p>
                <p className="placeholder"></p>
                <p className="type">minute</p>
            </div>
            <div className="colon">
                <p>:</p>
            </div>
            <div className="numbers">
                <p className="seconds">{seconds}</p>
                <p className="placeholder"></p>
                <p className="type">second</p>
            </div>
            <div className="am-pm">
                <div>
                    <p className={`am ${pm ? '' : 'light-on'}`}>am</p>
                </div>
                <div>
                    <p className={`pm ${pm ? 'light-on' : ''}`}>pm</p>
                </div>
            </div>
        </div>
    );


    // componentWillUnmount() {
    //
    // }
}