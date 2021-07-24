import React from 'react';

export default function({name, desc}) {
    const description = "desc가 비어 있습니다.";
    return (
        <div>
            <h2>{ name }</h2>
            <p>
                {/*
                    구문은 사용할 수 없음- 표현하기도 애매하다.
                    if(desc) {
                        desc
                    } else {
                        ''
                    }

                    대신 ? 삼항 연산자(조건부 연산자) 사용
                */}
                {/*
                    desc ? desc : description

                    또, && 나 || 를 사용할 수 있다.
                */}
                {
                    desc || description
                }
            </p>
            <hr/>
        </div>
    );
}