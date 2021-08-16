import React, {Fragment} from 'react';
import Header from "../layout/Header";
import Navigation from "../layout/Navigation";
import Footer from "../layout/Footer";
import styles from '../assets/scss/apps/Main.scss';

export default function Main() {
    return (
        <Fragment>
            <Header/>
            <div class={styles.Main}>
                <h2>Main</h2>
            </div>
            <Navigation/>
            <Footer/>
        </Fragment>
    );
}