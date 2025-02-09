import React from 'react';
import Header from "../layout/Header";
import Navigation from "../layout/Navigation";
import Footer from "../layout/Footer";
import * as styles from '../assets/scss/component/Gallery.scss';

export default function Gallery() {
    return (
        <>
            <Header/>
            <div className={styles.Gallery}>
                <h2>Gallery</h2>
            </div>
            <Navigation/>
            <Footer/>
        </>
    );
}