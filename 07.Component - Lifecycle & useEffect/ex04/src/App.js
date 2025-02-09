import React, {useState, useEffect} from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {
    const getCurrentClockTime = () => {
        const now = new Date();
  
        return {
            hours: now.getHours(),
            minutes: now.getMinutes(),
            seconds: now.getSeconds()
        }
    }

    const [currentTime, setCurrentTime] = useState(getCurrentClockTime());
    const [ticks, setTicks] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(getCurrentClockTime());
            setTicks(x => x+1);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, []);

    return ticks % 5 === 0 ?
        null : 
        <Clock
            title={`ex04: Clock Component II: ${ticks}`}
            hours={currentTime.hours}
            minutes={currentTime.minutes}
            seconds={currentTime.seconds} />;
}