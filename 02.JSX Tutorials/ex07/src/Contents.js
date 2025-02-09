import React from 'react';

function Contents(props) {

    /*
        1. JSX 밖은 JavaScript 구문이 가능하다. 따라서 주석(구)문도 가능하다.
    */

    return (
        <div
    
            /*
                2. JSX 엘리멘트 태그 안에 주석이 가능하다. - 비추천
            */
    
            className='Clock'
            title='시계'>

            {/* 3. 이런 방식으로 표현식이 실행되는 블록 안에서 주석을 단다 - 추천 */}

            <p>Comment</p>
            
            {/* 4. JSX는 HTML이 아니다. 따라서 <!-- --> HTML 주석은 사용할 수 없다.*/}
            
            <div>{'00:00:00'}</div>

            /* 5. JSX 안에서 javascript 주석을 사용하면 그대로 출력된다. (주의) */

        </div>
    );
}

export default Contents;