import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";

export default function App() {
    return (
        <HashRouter>
            <Route exact path='/' component={Main}/>
            <Route path='/gallery' component={Gallery}/>
            <Route path='/guestbook' component={Guestbook}/>
        </HashRouter>
    );
}