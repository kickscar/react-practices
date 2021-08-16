import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Main from "./apps/Main";
import Gallery from "./apps/Gallery";
import Guestbook from "./apps/Guestbook";
import './assets/scss/App.scss'

export default function App() {
    return (
        <HashRouter>
            <Route exact path='/' component={Main}/>
            <Route path='/gallery' component={Gallery}/>
            <Route path='/guestbook' component={Guestbook}/>
        </HashRouter>
    );
}