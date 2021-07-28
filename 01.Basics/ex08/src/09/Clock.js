import React from 'react';
import SessionAM from './SessionAM';
import SessionPM from './SessionPM';
import './assets/css/Clock.css';

export default function () {
    const date = new Date();

    const hours = date.getHours();
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const seconds = ('0' + date.getSeconds()).slice(-2);

    return (
        /*
            comment01: 컴포넌트 안이 아니기 때문에 여기는 자바스크립트이다 따라서 주석이다.
         */
        <div
            /*
                comment02: 여기서 다중행 주석도 가능하다.
            */
            className="Clock">

            { /* JSX는 HTML이 아니다. 이런 <!--  --> 주석은 사용할 수 없다. */ }

            // comment03: JSX 컴포넌트 렌더링 안에서 주석을 사용하면 화면에 그대로 나온다.

            {('0' + (hours == 0 ? 12 : (hours > 12 ? hours - 12 : hours))).slice(-2)}

            { /* comment04: 이런 식으로 주석을 달아야 한다. */ }

            { " : " }
            {minutes}
            { " : " }
            {seconds}
            { " " }
            {hours > 12 ? <SessionPM/> : <SessionAM/>}
        </div>
    );
}