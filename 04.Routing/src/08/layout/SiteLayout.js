import React, {Fragment} from 'react';
import {Outlet} from "react-router";
import Header from "../layout/Header";
import Navigation from "../layout/Navigation";
import Footer from "../layout/Footer";
import styles from '../assets/scss/layout/Content.scss';

export default function SiteLayout() {
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