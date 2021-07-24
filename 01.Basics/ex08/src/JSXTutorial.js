import React, { Fragment } from 'react';

import Ex01 from './Ex01';
import Ex02 from './Ex02';
import Ex03 from './Ex03';
import Ex04 from './Ex04';

export default function() {
    return (
        // 1. 컴포넌트로 만들기<Ex01 /> 컴포넌트로 바꾸기
        //
        // <div>
        //     <h2>Ex01</h2>
        //     <p>
        //         예제입니다.
        //     </p>
        // </div>
        //

        // 2.
        //
        // 2-1. Syntax Error: Adjacent JSX Element must be wrapped in an enclosing tag
        //
        // <Ex01 />
        // <Ex02 />
        //
        // 2-2. 부모 엘리먼트로 꼭 감싸야한다.
        //
        // <div>
        //     <Ex01 />
        //     <Ex02 />
        // </div>
        //
        // 2-3. <div> 대신 <Fragment /> 사용
        //
        <Fragment>
            <h1>JSX Tutorials</h1>
            <Ex01
                name='Ex01'
                desc="Fuctional Component 예제"
            />
            <Ex02
                name='Ex02'
                desc='React API로 만든 컴포넌트'
            />
            <Ex03
                name='Ex03'
                desc='Class Component 예제'
            />
            <Ex04
                name='Ex04'
                desc='자바스크립트 표현식 사용하기 예제'
            />
        </Fragment>

        // 3. React API 연습 한 번 더!
        //
        // React.createElement(
        //     Fragment,
        //     null,
        //     React.createElement(Ex01, null, null),
        //     React.createElement(Ex02, null, null),
        //     React.createElement(Ex03, null, null)
        // )
    );
}

