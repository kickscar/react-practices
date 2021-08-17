import React from 'react';
import {NavLink} from "react-router-dom";
import '../assets/scss/layout/Header.scss';

export default function Header() {
    return (
        <header>
            <h1>
                <NavLink to={'/'}>MySite</NavLink>
            </h1>
        </header>
    );
}