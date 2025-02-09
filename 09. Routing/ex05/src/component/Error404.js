import React from 'react';
import Header from "../layout/Header";
import Navigation from "../layout/Navigation";
import Footer from "../layout/Footer";
import * as styles from '../assets/scss/component/Error404.scss';

export default function Error404() {
    return (
        <>
            <Header/>
            <div className={styles.Error404}>
                <h2>Error 404</h2>               
            </div>
            <Navigation/>
            <Footer/>
        </>
    );
}