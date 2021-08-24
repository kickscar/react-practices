import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";
import About from "./component/about/About";
import './assets/scss/App.scss'

export default function App() {
    return (
        <HashRouter>
            <Route exact path='/' component={Main}/>
            <Route path='/gallery' component={Gallery}/>
            <Route path='/guestbook' component={Guestbook}/>
            <Route path='/about' component={About}/>
        </HashRouter>
    );
}