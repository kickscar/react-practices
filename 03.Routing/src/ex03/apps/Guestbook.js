import React, {Fragment} from 'react';
import Header from "../layout/Header";
import Navigation from "../layout/Navigation";
import Footer from "../layout/Footer";
import styles from '../assets/scss/apps/Guestbook.scss';

export default function Gallery() {
    return (
        <Fragment>
            <Header/>
            <div class={styles.Guestbook}>
                <h2>Guestbook</h2>
            </div>
            <Navigation/>
            <Footer/>
        </Fragment>
    );
}