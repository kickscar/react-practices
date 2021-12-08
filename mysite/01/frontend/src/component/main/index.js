import React from 'react';
import MySiteLayout from "../../layout/MySiteLayout";
import styles from '../../assets/scss/component/main/Main.scss';

export default () => {
    return (
        <MySiteLayout>
            <div className={styles.Main}>
                <h2>Main</h2>
            </div>
        </MySiteLayout>
    );
}