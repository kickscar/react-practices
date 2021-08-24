import React from 'react';
import {NavLink} from "react-router-dom";
import styles from '../assets/scss/layout/Navigation.scss';

export default function Navigation() {
    return (
        <nav className={styles.Main}>
            <NavLink to={'/guestbook'}>Guestbook</NavLink>
            <NavLink to={'/gallery'}>Gallery</NavLink>
            <NavLink to={'/about'}>About</NavLink>
        </nav>
    );
}