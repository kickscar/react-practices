import React, {Fragment} from 'react';

export default function App() {

    const onChangeMessageInput = function(event) {
        console.log(event.target.name, ':', event.target.value);
    }

    const onAddFormSubmit = function(event) {
        event.preventDefault();
        console.log(event.target.name, ':', 'Ajax로 등록할 겁니다.');
    }

    return (
        <Fragment>
            <h2>ex03 - SyntheticEvent</h2>
            <p>
                Native DOM Event 객체를 Wrapper 하고 있다.<br/>
                Native 이벤트 객체와 사용하는 방식이 같다(인테페이스 동일)
            </p>
            <form
                name='addForm'
                method='post'
                action='/do/not/go'
                >
                <input
                    type='text'
                    name='message'
                    placeholder='메세지를 입력 하세요'
                    />
                <br/>
                <br/>
                <input
                    type='submit'
                    value='등록' />
            </form>
        </Fragment>
    );
}