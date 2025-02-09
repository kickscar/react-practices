import React from 'react';
import Header from "../layout/Header";
import Navigation from "../layout/Navigation";
import Footer from "../layout/Footer";
import * as styles from '../assets/scss/component/About.scss';

export default function About() {
    return (
        <>
            <Header/>
            <div className={styles.About}>
                <h2>kickscar 입니다.</h2>
            </div>
            <Navigation/>
            <Footer/>
        </>
    );
}