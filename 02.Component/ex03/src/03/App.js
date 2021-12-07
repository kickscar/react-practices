import React, {Fragment} from 'react';

export default function App() {

    const onChangeMessageInput = function(e) {
        console.log(e.target.name, ':', e.target.value);
    }

    const onAddFormSubmit = function(e) {
        e.preventDefault();
        console.log(
            e.target.name,
            ":",
            e.target.message.value,
            ":",
            "Ajax 방식의 등록작업을 해야 합니다.");

    }

    return (
        <Fragment>
            <h2>ex03 - SyntheticEvent</h2>
            <p>
                Native DOM Event 객체를 Wrapper 하고 있다.<br/>
                Native DOM Event 객체와 사용하는 방식이 같다(인테페이스 동일)
            </p>
            <form
                name='AddForm'
                method='post'
                action='/do/not/go'
                onSubmit={ onAddFormSubmit }>
                <input
                    type='text'
                    name='message'
                    placeholder='메세지를 입력 하세요'
                    onChange={ onChangeMessageInput }/>
                <br/>
                <br/>
                <input
                    type='submit'
                    value='등록' />
            </form>
        </Fragment>
    );
}