import React from 'react';

export default function App() {


    return (
        <>
            <h2>ex03 - Synthetic Event</h2>
            <p>
                Native DOM Event 객체를 Wrapper 하고 있다.<br/>
                Native 이벤트 객체와 사용하는 방식이 같다.
            </p>
            <form
                name='addForm'
                method='post'
                action='/do/not/go'
                onSubmit={(event) => {
                    event.preventDefault();
                    console.log(event.target.name, ':', 'AJAX로 등록할 겁니다.');
                }}>
                <input
                    type='text'
                    name='message'
                    placeholder='메세지를 입력하세요'
                    onChange={(event) => {
                        console.log(event.target.name + ":" + event.target.value);
                    }}/>
                <br/>
                <br/>
                <input
                    type='submit'
                    value='등록' />
            </form>
        </>
    );
}