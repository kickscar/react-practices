import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router';

import {SiteLayout} from './layout';

import {Main} from "./component/main";
import {Guestbook} from "./component/guestbook";
import {About} from "./component/about";
import {Gallery} from "./component/gallery";
import {Login, Join} from "./component/user";
import {Error, Error404} from "./component/error";

import './assets/scss/App.scss'

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<SiteLayout /> }>
                    <Route index path='' element={<Main />}/>
                    <Route path='gallery' element={<Gallery />}/>
                    <Route path='guestbook' element={<Guestbook />}/>
                    <Route path='about' element={<About />}/>
                    <Route path='user/join' element={<Join />}/>
                    <Route path='user/login' element={<Login />}/>
                    <Route path='error' element={<Error />}/>
                    <Route path='*' element={<Error404 />}/>
                </Route>
            </Routes>
        </Router>
    );
}