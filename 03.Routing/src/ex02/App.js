import React, {useState, useEffect} from 'react';
import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";

export default function App() {
    const [route, setRoute] = useState('/');

    useEffect(() => {
        const handlePopState = (e) => {
            setRoute(e.state);
        }

        window.addEventListener('popstate', handlePopState);
        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, []);

    const handleLinkClick = (e) => {
        e.preventDefault();

        const url = `${e.target.href.substr(e.target.href.lastIndexOf('/'))}`;
        window.history.pushState(url, e.target.text, url);
        setRoute(url);
    }

    const router = function () {
        let component = null;
        switch (route) {
            case '/':
                component = <Main/>;
                break;
            case '/gallery':
                component = <Gallery/>;
                break;
            case '/guestbook':
                component = <Guestbook/>;
                break;
        }

        return component;
    };

    return (
        <div>
            { router(route) }
            <ul>
                <li><a href={'/'} onClick={handleLinkClick}>[Main]</a></li>
                <li><a href={'/gallery'} onClick={handleLinkClick}>[Gallery]</a></li>
                <li><a href={'/guestbook'} onClick={handleLinkClick}>[Guestbook]</a></li>
            </ul>
        </div>
    )
}