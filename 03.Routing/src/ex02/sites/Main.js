import React from 'react';
import {Link} from 'react-router-dom';

export default function Main() {
    return (
        <div>
            <h1>Main</h1>
            <nav>
                <Link to={''}>[Main]</Link>
                <Link to={'gallery'}>[Gallery]</Link>
                <Link to={'guestbook'}>[Guestbook]</Link>
            </nav>
        </div>
    );
}