import React from 'react';
import {Link, NavLink} from 'react-router-dom';

export default function Main() {
    const selectedStyle = {
        backgroundColor: 'blue',
        color: 'white'
    };

    return (
        <div>
            <h1>Main</h1>
            {
                /*
                <ul>
                    <li><Link to={'/'}>[Index]</Link></li>
                    <li><Link to={'gallery'}>[Index]</Link></li>
                    <li><Link to={'guestbook'}>[Index]</Link></li>
                </ul>
                /*/
            }
            {
                <ul>
                    <li><NavLink to={'/'}>[Main]</NavLink></li>
                    <li><NavLink to={'/gallery'} activeStyle={selectedStyle}>[Gallery]</NavLink></li>
                    <li><NavLink to={'/guestbook'} activeStyle={selectedStyle}>[Guestbook]</NavLink></li>
                </ul>
                //*/
            }
        </div>
    );
}