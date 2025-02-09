import React, {useState, useEffect} from 'react';
import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";
import Error404 from "./component/Error404";

export default function App() {
    const [route, setRoute] = useState('');

    useEffect(() => {
        window.addEventListener('hashchange', handlerHashChange);

        return () => {
            window.removeEventListener('hashchange', handlerHashChange);
        }
    }, []);

    const handlerHashChange = () => {
        console.log(window.location.hash);
        setRoute(window.location.hash.substring(1))
    }

    return (() => {
        switch(route) {
            case '' :
            case '/' :
                return <Main />;
            case '/guestbook' :
                return <Guestbook />;
            case '/gallery':
                return <Gallery />;
            default :
                return <Error404 />;                    
        }
    })();
}