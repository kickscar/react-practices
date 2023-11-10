import React, {Fragment} from 'react';
import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";
import styles from '../assets/scss/layout/Content.scss';
import {Outlet} from "react-router";

export default function MySiteLayout() {
    return (
        <Fragment>
            <Header/>
            <div className={styles.Content}>
                <Outlet />
            </div>
            <Navigation/>
            <Footer/>
        </Fragment>
    );
}