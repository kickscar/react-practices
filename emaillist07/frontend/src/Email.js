import React from 'react';
import PropTypes from 'prop-types';
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

Email.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
}