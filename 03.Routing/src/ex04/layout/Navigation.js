import React from 'react';
import {NavLink} from "react-router-dom";
import '../assets/scss/layout/Navigation.scss';

export default function Navigation() {
    return (
        <nav>
            <NavLink to={'/'}>Main</NavLink>
            <NavLink to={'/guestbook'}>Guestbook</NavLink>
            <NavLink to={'/gallery'}>Gallery</NavLink>
        </nav>
    );
}