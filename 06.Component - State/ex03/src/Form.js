import React from 'react';
import './assets/Form.css';

export default function Form() {

    return (
        <form
            id="loginForm"
            name="loginForm"
            method="post"
            action="/do/not/post"
            onSubmit={e => {
                e.preventDefault();

                console.log(e.target.email.value, e.target.password.value);
                console.log("validation code....");
                console.log("ajax 로그인 ....");           
            }}>

            <label htmlFor="email">이메일</label>
            <input id="email" name="email" type="text" autoComplete="off" />

            <label htmlFor="password">패스워드</label>
            <input id="password" name="password" type="password" autoComplete="off" />

            <input type="submit" value="로그인" />
        </form>
    );
}