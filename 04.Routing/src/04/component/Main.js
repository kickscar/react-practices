import React from 'react';
import {Link, NavLink} from 'react-router-dom';

export default function Main() {
    return (
        <div>
            <h1>Main</h1>
            {
                //*
                <ul>
                    <li><Link to={'/'}>[Main]</Link></li>
                    <li><Link to={'gallery'}>[gallery]</Link></li>
                    <li><Link to={'guestbook'}>[guestbook]</Link></li>
                </ul>
                /*/
            }
            {
                <ul>
                    <li><NavLink to={'/'}>[Main]</NavLink></li>
                    <li><NavLink to={'/gallery'}>[Gallery]</NavLink></li>
                    <li><NavLink to={'/guestbook'}>[Guestbook]</NavLink></li>
                </ul>
                //*/
            }
        </div>
    );
}