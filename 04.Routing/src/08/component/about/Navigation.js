import React from 'react';
import {NavLink} from "react-router-dom";
import styles from '../../assets/scss/component/about/Navigation.scss';

export default function Navigation() {
    return (
        <nav className={styles.About}>
            <NavLink to={'/about/kickscar'}>Kickscar</NavLink>
            <span/>
            <NavLink to={'/about/location'}>Location</NavLink>
        </nav>
    );
}