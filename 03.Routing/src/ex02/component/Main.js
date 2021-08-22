import React from 'react';

export default function Main() {

    const handleAnchorClick = (e) => {
        e.preventDefault();

        const route = e.target.href.substr(e.target.href.lastIndexOf('/'))
        window.history.pushState(route, '', `/#${route}`);
    }
    
    return (
        <div>
            <div>
                <h1>Main</h1>
            </div>
            <ul>
                <li><a href={'/'} onClick={handleAnchorClick}>[Main]</a></li>
                <li><a href={'/gallery'} onClick={handleAnchorClick}>[Gallery]</a></li>
                <li><a href={'/guestbook'} onClick={handleAnchorClick}>[Guestbook]</a></li>
            </ul>
        </div>
    );
}