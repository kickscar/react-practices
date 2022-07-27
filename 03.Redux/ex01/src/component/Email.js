import React from 'react';
import styles from './assets/scss/Email.scss'

export default function Email({firstName, lastName, email}) {
    return (
        <li className={styles.Email}>
            {`${firstName} ${lastName}`}
            <br/>
            {email}
        </li>
    )
}