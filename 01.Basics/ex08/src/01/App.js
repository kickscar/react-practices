import React from 'react';

export default function() {
    return (
        <div>
            <h2>App01</h2>
            <p>JSX Tutorial - Quirks I: Differences from HTML</p>
            {/*
                1.  속성(Attributes)은 Camel Cased
            */}
            <input type='text' maxLength='5'/>

            {/*
                2.  Elment는 닫혀야 한다.
                    오류: <input> <br> <hr>, <img src=''>
            */}
            <hr />
            <br />
            <img width='100px' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' />

            {/*
                3.  속성 이름은 DOM API 기반
                    <div id='box' class='box'></div>
                    document.getElementById('box').className='box'>
            */}
            <br />
            <div id='box' className='box'>
                box 입니다.
            </div>
        </div>
    );
}