import React from 'react';
import PropTypes from 'prop-types';
import styles from './assets/scss/Email.scss'

export default function Email({firstName, lastName, email}) {
    return (
        <li className={styles.Email}>
            <a href=''/>
            <h4>
                {email}
            </h4>
            <span>
                {`${firstName} ${lastName}`}
            </span>
        </li>
    );
}

Email.propTypes = {
    fistName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
}