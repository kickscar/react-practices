import React, {useEffect} from 'react';
import LEDSevenSegment from "./LEDSevenSegment";
import LEDAmPm from "./LEDAmPm";
import './assets/scss/Clock.scss';

export default function Clock({title, hours, minutes, seconds}) {

    useEffect(() => {
        console.log("clock: componentDidMount");

        return () => {
            console.log("clock: componentWillUnmount");
        }
    }, []);

    return (
        <div className={'clock-display'}>
            <h2>{title}</h2>
            <div className={'Clock'}>
                <LEDSevenSegment number={('0' + (hours > 12 ? hours - 12 : hours)).slice(-2)} colon={true}/>
                <LEDSevenSegment number={('0' + minutes).slice(-2)} colon={true}/>
                <LEDSevenSegment number={('0' + seconds).slice(-2)} colon={false}/>
                <LEDAmPm meridiem={hours >= 12 ? 'pm' : 'am'}/>
            </div>
        </div>
    );
}