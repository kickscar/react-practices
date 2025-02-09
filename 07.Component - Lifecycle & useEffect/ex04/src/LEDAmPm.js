import React from "react";
import {AmPm} from './assets/scss/LEDAmPm.scss';

function LEDAmPm({meridiem}) {
    return (
        <div className={AmPm}>
            <div>
                <p className={meridiem === 'am' ? 'on' : 'off'}>am</p>
            </div>
            <div>
                <p className={meridiem === 'pm' ? 'on' : 'off'}>pm</p>
            </div>
        </div>
    );
}

export default LEDAmPm;