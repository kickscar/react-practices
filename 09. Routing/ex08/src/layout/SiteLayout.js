import React from 'react';
import {Outlet} from 'react-router';
import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";
import * as styles from '../assets/scss/layout/Content.scss';

export default function SiteLayout() {
    return (
        <>
            <Header/>
            <div className={styles.Content}>
                <Outlet />
            </div>
            <Navigation/>
            <Footer/>
        </>
    );
}