import React from 'react';
import PropTypes from 'prop-types';
import styles from './assets/scss/Message.scss';

export default function Message({no, name, message}) {
    return (
        <li className={styles.Message}>
            <strong>{name}</strong>
            <p>
                {message}
            </p>
            <strong/>
            <a>삭제</a>
        </li>
    );
}

Message.propTypes = {
    no: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
}