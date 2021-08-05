import React from 'react';
import styles from './assets/scss/WriteForm.scss';

export default function WriteForm() {
    return (
        <form className={ styles.Write__Form } action="" method="post">
            <input type="text" id="input-name" placeholder="이름"/>
            <input type="password" id="input-password" placeholder="비밀번호"/>
            <textarea id="tx-content" placeholder="내용을 입력해 주세요."/>
            <input type="submit" value="보내기"/>
        </form>
    );
}