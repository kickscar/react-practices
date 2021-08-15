import React from 'react';
import styles from './assets/scss/App.scss';

export default function App() {
    return (
        <div className={styles.App}>
            <h1 className={styles.Header}>{'SASS & SCSS (css-loader options: { modules: true })'}</h1>
        </div>
    );
}