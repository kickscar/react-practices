import React, {useRef} from 'react';
import styles from './assets/scss/RegisterForm.scss';

export default function RegisterForm({notifyEmailAdd}) {
    const refForm = useRef(null);

    return (
        <form
            ref={refForm}
            className={styles.RegisterForm}
            onSubmit={e => {
                e.preventDefault();

                try {
                    const newEmail = Array.from(e.target, (input) => {
                        // simple validatation of empty string
                        if (input.value === '') {
                            throw `validation ${input.placeholder} is empty ''`;
                        }

                        return {n: input.name, v: input.value};
                    })
                    .filter(({n}) => n !== '')
                    .reduce((res, {n, v}) => {
                        res[n] = v;
                        return res;
                    }, {});

                    refForm.current.reset();
                    notifyEmailAdd(newEmail);

                } catch(err) {
                    console.error(err);
                }
            }}>
            <input type={'text'} name={'firstName'} placeholder={'성'} className={styles.InputFirstName}/>
            <input type={'text'} name={'lastName'} placeholder={'이름'} className={styles.InputLastName}/>
            <input type={'text'} name={'email'} placeholder={'이메일'} className={styles.InputEmail}/>
            <input type={'submit'} value={'등록'} />
        </form>
    );
}