import React from 'react';
import {Link, NavLink} from 'react-router-dom';

export default function Layout(props) {
    const selectedStyle = {
        backgroundColor: 'blue',
        color: 'white'
    };

    return (
        <div>
            <header>
                <h1>React Practices - Routing(Nesting)</h1>
            </header>
            <nav>
                {
                <ul>
                    <li><Link to={'/'}>[Main]</Link></li>
                    <li><Link to={'gallery'}>[Gallery]</Link></li>
                    <li><Link to={'guestbook'}>[Guestbook]</Link></li>
                </ul>
                }

                {/*
                <NavLink to={'/'} >[Main]</NavLink>
                <NavLink to={'/gallery'} activeStyle={ selectedStyle }>[Gallery]</NavLink>
                <NavLink to={'/guestbook'} activeStyle={ selectedStyle }>[Guestbook]</NavLink>
                */}
            </nav>
            <div class={'Contents'}>
                {props.children}
            </div>
        </div>
    );
}