import React, {Fragment} from 'react';
import Header from "../layout/Header";
import Navigation from "../layout/Navigation";
import Footer from "../layout/Footer";
import styles from '../assets/scss/apps/Gallery.scss';

export default function Gallery() {
    return (
        <Fragment>
            <Header/>
            <div class={styles.Gallery}>
                <h2>Gallery</h2>
            </div>
            <Navigation/>
            <Footer/>
        </Fragment>
    );
}