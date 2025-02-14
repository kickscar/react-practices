import React from 'react';
import * as styles from './assets/scss/RegisterForm.scss';

function RegisterForm() {
    return (
        <form className={styles.Register_Form}>
            <input type='text' name='firstName' placeholder='성' className={styles.Input_First_Name} />
            <input type='text' name='lastName' placeholder='이름' className={styles.Input_Last_Name} />
            <input type='text' name='email' placeholder='이메일' className={styles.Input_Email} />
            <input type='submit' value='등록' />
        </form> 
    );
}

export default RegisterForm;