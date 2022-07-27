import React from 'react';
import Email from './Email';
import styles from './assets/scss/Emaillist.scss';

export default function Emaillist({emails}) {
    console.log("!", emails);
    return (
        <ul className={styles.Emaillist}>
            {
                emails.map(email => <Email
                        key={email.no}
                        firstName={email.firstName}
                        lastName={email.lastName}
                        email={email.email}/>)
            }
        </ul>
    )

}