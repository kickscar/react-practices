import React, {useRef} from 'react';
import styles from './assets/scss/WriteForm.scss';

export default function WriteForm() {

    return (
        <form className={styles.WriteForm}>
            <input
                type={'text'}
                name={'name'}
                placeholder={'이름'}
                autoComplete={' off'}/>
            <input
                type={'password'}
                name={'password'}
                placeholder={'비밀번호'}
                autoComplete={'off'} />
            <textarea
                name={'message'}
                placeholder={'메세지(내용)'} />
            <input
                type={'submit'}
                value={'보내기'}
                autoComplete={'off'} />
        </form>
    );
}