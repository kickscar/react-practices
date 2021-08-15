import React from 'react';

export default function () {
    return (
        /*
            리액트 컴포넌트는 단일 루트 노드만 렌더링 할 수 있다.
            오류:
            <h2>App01</h2>
            <p>JSX Tutorial - Quirks II: Single Root Node</p>
        */
        <div>
            <h2>App02</h2>
            <p>JSX Tutorial - Quirks II: Single Root Node</p>
        </div>
    );
}