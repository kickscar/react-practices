import React from 'react';
import MySiteLayout from "../../layout/MySiteLayout";
import styles from '../../assets/scss/component/user/User.scss';

export default () => {
    return (
        <MySiteLayout>
            <div className={styles.User}>
                <h2>Settings</h2>
            </div>
        </MySiteLayout>
    );
}