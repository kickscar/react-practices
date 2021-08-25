import React from 'react';
import PropTypes from 'prop-types';
import Email from './Email';
import styles from './assets/scss/Emaillist.scss';

export default function Emaillist({emails, keyword}) {
    return (
        <ul className={styles.Emaillist}>
            {
                emails
                    .filter(email => email.firstName.indexOf(keyword) != -1 || email.lastName.indexOf(keyword) != -1 || email.email.indexOf(keyword) != -1)
                    .map(email => <Email
                        key={email.no}
                        firstName={email.firstName}
                        lastName={email.lastName}
                        email={email.email}/>)
            }
        </ul>
    );

}

Emaillist.propTypes = {
    emails: PropTypes.arrayOf(Email.propTypes),
    keyword: PropTypes.string.isRequired
}