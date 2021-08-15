import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Main from "./sites/Main";
import Gallery from "./sites/Gallery";
import Guestbook from "./sites/Guestbook";

export default function App() {
    return (
        <HashRouter>
            <Route exact path='/' component={Main}/>
            <Route path='/gallery' component={Gallery}/>
            <Route path='/guestbook' component={Guestbook}/>
        </HashRouter>
    );
}